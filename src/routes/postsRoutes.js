import express from "express";
import multer from "multer";
import cors from "cors";
import { getPosts, sendPost, uploadImg, updtToPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req,file, cb) {
        cb(null,file.originalname)
    }
})
const upload = multer({ storage: storage})


const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions))
    //rota para todos os posts
    app.get("/posts", getPosts); 
    //rota para criar um post
    app.post("/posts", sendPost);
    app.post("/upload", upload.single("imagem"), uploadImg)
    app.put("/upload/:id", updtToPost)
}
// app.get("/posts/:id",(req, res) => {
//     const index = getPostById(req.params.id);
//     res.status(200).json(posts[index]);    

// })

// app.get("/posts/search/:keyword",(req, res) => {
//     const index = getPostByKeyword(req.params.keyword);
//     res.status(200).json(index);
// })

export default routes;
