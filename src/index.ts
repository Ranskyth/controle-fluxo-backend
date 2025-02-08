import express, { Request, Response, NextFunction } from "express";
import { routerProdutos } from "./routes/produtosRoutes";
import cors from "cors";
import { routerVendas } from "./routes/vendaRoutes";

const PORT = process.env.PORT;

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  app.use(cors());
  next();
});

app.use(express.json());

app.use("/api/", routerProdutos);
app.use("/api/", routerVendas)

app.listen(PORT, () => {
  console.log(`Server on in http://localhost:${PORT}/api/`);
});
