import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";
import { errors } from "celebrate";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(3333);

/* ** ANOTAÇÕES DE AULA **

const users = ["Diego", "Palloma", "Sirius"];

app.get("/users", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.json(filteredUsers);
  return response.json(users);
});

app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post("/users", (request, response) => {
  const data = request.body;

  const user = {
    name: data.name,
    email: data.email,
  };

  return response.json(user);
  //Importante colocar o "return" antes do "response" para que retorne os dados e pare a execução.
});

//Rota: endereço completo da requisição.
//Recurso: qual entidade do sistema estamos acessando.

//GET: buscar uma ou mais informações do backend
//POST: criar uma nova informação no backend
//PUT: atualizar uma informação existente no backend
//DELETE: remover uma informação do backend

//Request Params: parâmetros que vem na própria rota que identifica um recurso.
//Query Params: são parâmetros que vem na própria rota (geralmente opcionais) para filtros, paginação, etc.
//Request Body: são parâmetros para criação e atualização de informações.

** ANOTAÇÕES DE AULA ** */
