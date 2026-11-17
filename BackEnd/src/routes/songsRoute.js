
import express from "express";
import { fetchSongs,fetchSongById } from "../controllers/songsController.js";

const router = express.Router();


router.get("/", fetchSongs);


router.get("/:id", fetchSongById);

export default router;
