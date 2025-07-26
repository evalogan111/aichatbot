const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve all files in the current directory
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
