import express, { Request, Response, NextFunction } from "express";
import { routerProdutos } from "./routes/produtosRoutes";
import cors from "cors";

const PORT = process.env.PORT;

const app = express();

app.use((req: Request, res: Response,next:NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type")
  app.use(cors());
  next()
});


app.use(express.json());

app.use("/api/", routerProdutos);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
