// import needed modules
const router = require('express').Router();
// api/thoughts route
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController')

// api/thoughts/:thoughtId route
router.route('/').get(getThoughts).post(createThought);


// api/thoughts/:thoughtId/reations routw
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


// api/thoughts/:thoughtsID/reactions/:reactionId route

router.route('/:thoughtsID/reactions').post(addReaction)


router.route('/:thoughtsID/reactions/:reactionId').delete(removeReaction)

//export the route
module.exports = router;