
import pool from "../config/db.js";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
});

const generateSongUrl = async (s3Key) => {
    const command = new GetObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: s3Key
    });

    return await getSignedUrl(s3, command, {
        expiresIn: 3600
    });
};

export const getSongs = async () => {
    const result = await pool.query(
        `SELECT * FROM songs ORDER BY song_id DESC`
    );

    const songs = await Promise.all(
        result.rows.map(async (song) => ({
            ...song,
            songUrl: await generateSongUrl(song.s3_key)
        }))
    );

    return songs;
};

export const getSongById = async (id) => {
    const result = await pool.query(
        `SELECT * FROM songs WHERE song_id = $1`,
        [id]
    );

    if (result.rows.length === 0) {
        return null;
    }

    const song = result.rows[0];

    return {
        ...song,
        songUrl: await generateSongUrl(song.s3_key)
    };
};
