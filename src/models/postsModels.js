import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectar from "../config/configDb.js";
const conexao = await conectar(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("imersao_insta");
    const colecao = db.collection("posts");
    return await colecao.find().toArray();
}

export async function createPost(newPost){
    const db = conexao.db("imersao_insta");
    const colecao = db.collection("posts");
    return await colecao.insertOne(newPost);
}

export async function updtPost(id, post){
    const db = conexao.db("imersao_insta");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id)
    return await colecao.updateOne({_id: new ObjectId(objId)}, {$set: post});
}