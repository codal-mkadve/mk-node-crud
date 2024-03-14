const {User}  = require('../models/index');
const { v4: uuidv4 } = require('uuid');

const UserController = {
  // Get all users
  getAllUsers: async (req, res) => {
    console.log('User',User)
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Get a single user by ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  bulkCreateUsers: async (req, res) => {
    try {
      // The request body should be an array of user objects
      const newUsers = await User.bulkCreate(req.body);
      res.status(201).json(newUsers);
    } catch (error) {
      res.status(400).send(error.message);
    } 
  },

  // Create a new user
  createUser: async (req, res) => {
    try {
      const id = uuidv4(); // Generate a new UUID
      const newUser = await User.create({ id, ...req.body });
      res.status(201).json(newUser);
    } catch (error) {
      console.log('error', error);
      res.status(400).send(error.message);
    }
  },

  // Update an existing user
  updateUser: async (req, res) => {
    try {
      const updated = await User.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedUser = await User.findByPk(req.params.id);
        res.json(updatedUser);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  // Delete a user
  deleteUserById: async (req, res) => {
    try {
      const deleted = await User.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.send('User deleted');
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = UserController;
