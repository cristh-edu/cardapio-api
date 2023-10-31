import express from "express";
import cors from "cors";
import { calculateTotalPrice, getItens } from "./itens.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Cardápio");
});

app.get("/foods", (req, res) => {
  res.status(200).json(getItens());
});

app.post("/foods", (req, res) => {
  const { itens } = req.body;
  const totalPrice = calculateTotalPrice(itens);
  res.status(201).json({ totalPrice });
});

export default app;
