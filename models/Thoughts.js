//Require what is needed fom packages you installed
const {Schema, model} = require('mongoose');
const reactionsSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat')

// create a new schema that will have the table columns and export it
const thoughtSchema = new Schema(
    {
        thoughtPost:{
            type: String,
            minlength:1,
            maxlength: 280,
            required: true,

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [{
            type: Schema.Types.ObjectId,
            ref: "reaction",
        }]

    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)
// create a model

const Thought = model('Thought', thoughtSchema);
// must refrence the reaction schema
module.exports = Thought;