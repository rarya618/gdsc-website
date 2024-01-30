const express = require("express");
const sgMail = require("@sendgrid/mail");
const { resolve } = require("path-browserify");

// Set up SendGrid API key
sgMail.setApiKey(
  "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"
);

// Create Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, server!");
});
// Route to handle sending emails
app.post("/sendemail", (req, res) => {
  const { Name, Email, Message, submitbutton } = req.body;

  const msg = {
    to: "paristiffany12@gmail.com",
    from: "paristiffany12@gmail.com",
    subject: "Example Subject",
    text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Message}\nSubmit Button: ${submitbutton}`,
    html: `<p>Name: ${Name}</p><p>Email: ${Email}</p><p>Message: ${Message}</p><p>Submit Button: ${submitbutton}</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((error) => {
      console.error(error.toString());
      res.status(500).json({ error: "Failed to send email" });
    });
});

// Set up fallback for path module
resolve.fallback = { path: require.resolve("path-browserify") };

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
