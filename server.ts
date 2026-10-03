import { createServer } from "node:http";

createServer(function (req, res) {
  if (req.url === "/api/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: { status: 200, message: "Ok." } }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      error: { status: 404, message: "Recurso não encontrado." },
    }),
  );
}).listen(3000);
