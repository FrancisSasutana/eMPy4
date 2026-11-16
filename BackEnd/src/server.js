import express from "express"
const PORT = process.env.PORT || 3000;
const server = express();

server.get("/", (req, res) =>{
    res.json({message: "Hello World!"})
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});