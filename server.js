import express from "express";
import routes from "./src/routes/postsRoutes.js";



/*const posts = [
    {
        id: 1,
        descricao: "Omg Gatinho",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Cachorrinho fofinho",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Paisagem maravilhosa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Céu estrelado",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Delícia de sobremesa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "gatinho",
        imagem: "https://placekitten.com/g/300/150"
    }
];*/

const app = express();
app.use(express.static("uploads"))
routes(app);

app.listen(3000,() => {
    console.log("Server is running on port 3000");
});






// function getPostById(id){
//     return posts.findIndex((post) => {return post.id === Number(id)});
// }
// function getPostByKeyword(keyword){
//         return posts.filter((post) => {return post.descricao.toLowerCase().includes(String(keyword.toLowerCase()))});  
// }
    

