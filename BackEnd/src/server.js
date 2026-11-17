import express from "express"
import cors from "cors";
import songsRoute from "./routes/songsRoute.js";
const PORT = process.env.PORT || 3000;
const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/songs", songsRoute);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});