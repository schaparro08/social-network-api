// import needed models
const { User, Thought } = require('../models');

// create easy CRUD commands to grab info 
const userController = {
    //get all users
    getUsers(req,res) {
        User.find()
        .select('__v')
        .then((dbUserData) => {
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    //get single user by id
    getSingleUser(req,res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .populate('friends')
        .populate('thoughts')
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({message: 'No user with this id!'});
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    createUser(req,res) {
        User.create(req.body)
        // FINISH THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

}

module.exports = userController;