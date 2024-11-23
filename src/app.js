import express, { response } from "express";
import userRoutes from "./router/user.routes.js";
import productsRoutes from "./router/products.routes.js"

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static("public"))

app.use("/users", userRoutes);
app.use("/products", productsRoutes);

app.get("/", (req, res)=>{

    res.send("Clase 08")
})

app.listen(PORT, () => {
    console.log(`"Servidor escuchando en el puerto ${PORT}"`);
})