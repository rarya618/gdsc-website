"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mail_1 = require("@sendgrid/mail");
var path_browserify_1 = require("path-browserify");
// Set up SendGrid API key
mail_1.default.setApiKey("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");
// Create Express app
var app = (0, express_1.default)();
// Middleware to parse JSON requests
app.use(express_1.default.json());
// Route to handle sending emails
app.post("/send-email", function (req, res) {
    var _a = req.body, Name = _a.Name, Email = _a.Email, Message = _a.Message, submitbutton = _a.submitbutton;
    var msg = {
        to: "paristiffany12@gmail.com",
        from: "gdscusyd@gmail.com",
        subject: "Example Subject",
        text: "Name: ".concat(Name, "\nEmail: ").concat(Email, "\nMessage: ").concat(Message, "\nSubmit Button: ").concat(submitbutton),
        html: "<p>Name: ".concat(Name, "</p><p>Email: ").concat(Email, "</p><p>Message: ").concat(Message, "</p><p>Submit Button: ").concat(submitbutton, "</p>"),
    };
    mail_1.default
        .send(msg)
        .then(function () {
        res.status(200).json({ message: "Email sent successfully" });
    })
        .catch(function (error) {
        console.error(error.toString());
        res.status(500).json({ error: "Failed to send email" });
    });
});
// Set up fallback for path module
path_browserify_1.resolve.fallback = { path: path_browserify_1.require.resolve("path-browserify") };
// Start the server
app.listen(3000, function () {
    console.log("Server started on port 3000");
});
