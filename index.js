const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);

app.listen(PORT);
