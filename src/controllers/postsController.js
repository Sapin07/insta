
import {getTodosPosts, createPost, updtPost } from "../models/postsModels.js";
import gerarDescricaoComGemini from "../services/geminiServices.js";
import fs from "fs";
export async function getPosts (req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);    
}

export async function sendPost (req, res){
    const newPost = req.body;
    try {
        const createdPost = await createPost(newPost);
        res.status(200).json(createdPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"erro":"Falha na requisicao"})
    }
}

export async function uploadImg (req, res){
    const newPost = req.body;
    try{
        const postCriado = await createPost(newPost);
        const updtImg = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, updtImg)
        res.status(200).json(postCriado);
    }catch (error){
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisicao"})
    }
}

export async function updtToPost (req, res){
    const id = req.params.id;
    const urlImg = `http://localhost:3000/${id}.png`
    
    try{
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imgBuffer)
        const post = {
            urlImg: urlImg,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCriado = await updtPost(id, post);
        res.status(200).json(postCriado);
    }catch (error){
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisicao"})
    }
}