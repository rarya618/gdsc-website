import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/send-email", (req, res) => {
  // Handle sending email logic here
  // Retrieve the data from req.body (name, email, message)
  // Use a package like nodemailer to send the email
  // Once the email is sent, send a response to the client

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
