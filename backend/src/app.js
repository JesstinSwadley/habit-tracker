// File/Package Requirements
const express = require("express");

// Express Configuration
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is on Port: ${PORT}`);
});