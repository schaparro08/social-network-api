// import needed models
const { User,Thought } = require('../models');

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
    
        .then((course) => res.json(course))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });

    },

    deleteUser(req,res) {
        User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.username } })
      )
      .then(() => res.json({ message: 'User and thoughts deleted' }))
      .catch((err) => res.status(500).json(err));
    },
    updateUser(req,res) {
        User.findOneAndUpdate(
        { _id: req.params.userId},
        { $addToSet: { friends: req.params.friendId } },
        {new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user with this ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    addFriend(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId},
            { $addToSet: { friends: req.params.friendId } },
            {new: true }
          )
            .then((user) =>
              !user
                ? res
                    .status(404)
                    .json({ message: 'No user with this ID :(' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));

    },
    removeFriend(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId  } },
            { runValidators: true, new: true }
          )
            .then((user) =>
              !user
                ? res
                    .status(404)
                    .json({ message: 'No user found with that ID' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },



};

module.exports = userController;