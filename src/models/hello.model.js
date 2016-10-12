const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HelloSchema = new Schema(
    {
        name: String,
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
)

module.exports = mongoose.model('Hello', HelloSchema)
