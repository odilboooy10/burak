import express from "express";
import path from "path";
import router from "./router";

/** 1-Entrance **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** 2-Sessions **/

/** 1-Views **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 1-Routers **/
app.use("/", router);  // Middleware desgin pattern

export default app;