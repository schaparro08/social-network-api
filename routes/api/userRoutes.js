// import the needed modules
const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController')

// api/users route
router.route('/').get(getUsers).post(createUser);

// api/users/:userId route
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
// api/users/:userId/friends/:friendId route



router.route('/:userId/friends/friendId').put(addFriend).delete(removeFriend);
// export the route
module.exports = router;