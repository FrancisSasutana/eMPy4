
import { getSongs, getSongById } from "../services/songServices.js";

export const fetchSongs = async (req, res) => {
    try {
        const songs = await getSongs();

        res.status(200).json(songs);

    } catch (error) {
        console.error("Error fetching songs:", error);

        res.status(500).json({
            message: "Failed to fetch songs"
        });
    }
};

export const fetchSongById = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await getSongById(id);

        if (!song) {
            return res.status(404).json(
                { message: "Song not found" }
            );
        }

        res.status(200).json(song);

    } catch (error) {
        console.error("Error fetching song:", error);

        res.status(500).json({
            message: "Failed to fetch song"
        });
    }
};
