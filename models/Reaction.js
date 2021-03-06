//Require what is needed fom packages you installed
const {Schema, Types} = require('mongoose');

// const dateFormat = require('../utils/dateFormat')

// create a new schema that will have the table columns and export it

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
          },
          reactionBody: {
            type: String,
            maxlength: 280,
            required: true

          },
          username: {
            type: String,
            required: true
          },
          createdAt: {
            type: Date,
            default: Date.now
          },
    },
    {
        toJSON: {
            getters: true
          },
          id: false
    }
);


// create a model



module.exports = reactionSchema;