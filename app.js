const express = require('express');
require('dotenv').config();
const questionRoutes = require('./routes/questionRoutes');

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use('/api/question', questionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));