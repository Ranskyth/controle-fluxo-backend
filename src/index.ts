import express from 'express';
import { routerProdutos } from './routes/produtosRoutes';
import cors from 'cors'

const PORT = process.env.PORT

const app = express();
app.use(cors())

app.use(express.json());
app.use("/api/",routerProdutos)

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});