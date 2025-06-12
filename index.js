require('dotenv').config()
const express = require("express");
const Handlebars = require("handlebars");
const { engine } = require("express-handlebars");
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");

const app = express();
const connectDB = require("./models/db");
const PORT = process.env.PORT
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars setup (only once)
app.engine('handlebars', engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set("view engine", "handlebars");
app.set("views", "./views");

// Database connection
connectDB();

// Routes
app.get("/", (req, res) => {
    res.render("home");
});
app.use("/stu", require("./controllers/routes"));

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));