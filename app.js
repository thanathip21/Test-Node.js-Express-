const express = require('express');

const debug = require('debug')('app');
// const morgan  = require('morgan');
const app = express();
const port = 3000;
const path = require('path');
const productRouter = express.Router();
app.use(express.static(path.join(__dirname, "/public/")));


app.set("views","./src/views");
app.set("view engine", "ejs")


productRouter.route("/").get((req, res) => {
    res.send("Hello World! I'm Product");
});

app.use("/products", productRouter)

app.get('/', (req, res) => {

    res.render('index',{username: "leoza5555+", customers: ["thanthip999","Phimchanok777","Leoyuuu"]});
})

app.listen(port, () => {

    console.log("listening on port" ,port);
})