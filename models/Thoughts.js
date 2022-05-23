//Require what is needed fom packages you installed
const {Schema, model} = require('mongoose');
const reactionsSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat')

// create a new schema that will have the table columns and export it
const thoughtSchema = new Schema(
    {
        thoughtPost:{

        },
        createdAt: {
            get: timestamp => dateFormat(timestamp)
        }

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