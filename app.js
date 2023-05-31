const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Connection with MongoDB
mongoose.connect("mongodb+srv://robincyril24:Robin1993@cluster0.rebkxr7.mongodb.net/PortfolioRobin?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// Schema
const profileSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mob: { type: Number },
  msg: { type: String }
});

const Profile = mongoose.model("PortFolio", profileSchema);

// Update form
app.post("/contact", async (req, res) => {
  const { name, email, mob, msg } = await req.body;
  const product = new Profile({
    name,
    email,
    mob,
    msg
  });

  product.save()
    .then(() => {
      console.log('Saved product:', product);
      res.send('Thank you for contacting us!');
    })
    .catch((error) => {
      console.log('Error saving product:', error.message);
      res.status(500).send('Error saving product');
    });
});

app.use(express.static(__dirname));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
