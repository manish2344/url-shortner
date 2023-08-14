require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");
const shortUrl =require( "./models/shortStore.js");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
res.send("!!welcome")
})

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.post("/short", async (req, res) => {
    const found = await shortUrl.find({ full: req.body.full });
    if (found.length > 0) {
      res.send(found);
    } else {
      await shortUrl.create({ full: req.body.full });
      const foundNow = await shortUrl.find({ full: req.body.full });
      res.send(foundNow);
    }
  });
  


// router.post('/shorten', async (req, res) => {

    

// })


  app.get("/:shortUrl", async (req, res) => {
    const short = await shortUrl.findOne({ short: req.params.shortUrl });
    if (short == null) return res.sendStatus(404);
    res.redirect(`${short.full}`);
  });
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
