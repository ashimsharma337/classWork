import express from "express";
import { authrouter } from "./auth.controller.js";

const app = express();
const router = express.Router();



// Mounting of router with out mounting it does not work
app.use(authrouter);
// app.use("/", router);
// app.use("/auth", authrouter);

app.listen(9000, () => {
    console.log("app is listening at port 9000");
});