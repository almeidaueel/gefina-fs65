import express from "express";

const app = express();

app.get("/api/health", (req, res) => {
  res
    .status(200)
    .json({ success: { status: 200, message: "Servidor em execução" } });
});

app.use((req, res) => {
  res.status(404).json({
    error: {
      status: 404,
      message: "Recurso não encontrado",
    },
  });
});

import { createServer } from "node:http";

createServer(function (request, response) {
  if (request.url === "/api/health" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: { status: 200, message: "Ok." } }));
    return;
  }

  response.writeHead(404, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify({
      error: { status: 404, message: "Recurso não encontrado." },
    }),
  );
}).listen(3000);
