const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
// Serve from the root directory
app.use(express.static(path.join(__dirname, '../')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
