import { MongoClient } from "mongodb";

export default async function conectar(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao Cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (error) {
        console.error('Falha na conexao com o banco', error);
        process.exit();
    }
}
