require("dotenv").config(); // Load environment variables

const express = require("express");

// Import service routes
const productServices = require("./routes/inventory-route");
const posServices = require("./routes/pos-routes");
const authService = require("./routes/auth-routes");
const empService = require("./routes/employee_routes");

// API request mapper prefix
const mapper = "/api/v1";

// Initialize app
const app = express();

// Middleware
app.use(express.json()); // Ensure JSON parsing before routes
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.path}`);
    next();
});

// Register routes
app.use(`${mapper}/inventory`, productServices);
app.use(`${mapper}/pos`, posServices);
app.use(`${mapper}/auth`, authService);
app.use(`${mapper}/emp`, empService);

// Handle unmatched routes
app.use((req, res) => {
    res.status(404).json({ error: "No such endpoint exists" });
});

// Start the server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`ESB Server is running on port ${PORT}`);
});
