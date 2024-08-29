const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.get("/api/noti", (req, res) => {
    res.json({ message: "Server Running notification" });
});

app.use('/api/noti' , require('./src/routes/email.route'));

const PORT = 8004;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. `);
});