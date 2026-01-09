# Insta API

API RESTful para gerenciamento de posts com imagens, desenvolvida para aprendizado de Node.js, upload de arquivos e integração com IA.

## Sobre o Projeto

Projeto focado em praticar conceitos de backend com Node.js:
- Upload e armazenamento de imagens
- CRUD de posts com MongoDB
- Integração com Google Gemini para descrição automática de imagens com IA

## Funcionalidades

- Upload de imagens
-  Criar e listar posts
-  Geração automática de descrições usando Google Gemini AI

##  Tecnologias

- **Node.js** + **Express**
- **MongoDB**
- **Multer** - Upload de arquivos
- **Google Generative AI (Gemini)** - Descrição de imagens com IA
- **CORS**
- **dotenv**

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Sapin07/insta.git
cd insta
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env`:
```env
STRING_CONEXAO=mongodb+srv://usuario:senha@cluster.mongodb.net/imersao_insta
GEMINI_API_KEY=sua_chave_api_gemini
```

> **Obter API Key do Gemini:** [Google AI Studio](https://makersuite.google.com/app/apikey)

4. Crie a pasta de uploads:
```bash
mkdir uploads
```

5. Inicie o servidor:
```bash
npm start
```

##  Endpoints da API

### **GET** `/posts`
Lista todos os posts
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "descricao": "Descrição gerada pela IA",
    "urlImg": "http://localhost:3000/507f1f77bcf86cd799439011.png",
    "alt": "Texto alternativo"
  }
]
```

### **POST** `/posts`
Cria um novo post
```json
{
  "descricao": "",
  "urlImg": "",
  "alt": ""
}
```

### **POST** `/upload`
Faz upload de uma imagem
- **Content-Type:** `multipart/form-data`
- **Campo:** `imagem` (arquivo)

### **PUT** `/upload/:id`
Atualiza o post com descrição gerada pela IA
- Gera automaticamente a descrição da imagem usando Gemini
- Atualiza os campos `urlImg`, `descricao` e `alt`

## 🤖 Integração com Gemini

O Gemini analisa cada imagem enviada e gera uma descrição em português:

**Fluxo:**
1. Upload da imagem → `/upload`
2. Imagem salva em `uploads/` com ID do post
3. Chamada PUT → `/upload/:id`
4. Gemini processa a imagem e retorna descrição
5. Post é atualizado com a descrição gerada

## 📁 Estrutura do Projeto

```
src/
├── config/
│   └── configDb.js          # Conexão MongoDB
├── controllers/
│   └── postsController.js   # Lógica das rotas
├── models/
│   └── postsModels.js       # Operações no banco
├── routes/
│   └── postsRoutes.js       # Definição das rotas
└── services/
    └── geminiServices.js    # Integração Gemini AI
```

## Banco de Dados

**Database:** `imersao_insta`  
**Collection:** `posts`

**Schema do Post:**
```javascript
{
  _id: ObjectId,
  descricao: String,
  urlImg: String,
  alt: String
}
```

## CORS

O projeto está configurado para aceitar requisições do frontend em:
```javascript
origin: "http://localhost:8000"
```

## O que Aprendi

- Upload e manipulação de arquivos com Multer
- Operações CRUD com MongoDB
- Integração com APIs de IA (Google Gemini)
- Conversão de imagens para Base64
- Configuração de CORS
- Gerenciamento de variáveis de ambiente

Projeto desenvolvido para fins educacionais
