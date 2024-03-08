const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import the sequelize instance and models
const db = require('./models');

// Sync all models with the database
db.sequelize.sync().then(() => {
  console.log('Database synced');
});

// Use the user routes
app.use('/api/users', userRoutes);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


