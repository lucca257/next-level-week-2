import express from "express";

const app = express();

//convertendo dados recebidos do body em json para objeto
app.use(express.json());

app.post('/users', (request, response) => {
  return response.json(request.body);
});

app.listen(3333);
