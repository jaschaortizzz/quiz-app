import mongoose from "mongoose"

const { Schema } = mongoose

const resultModel = new Schema ({
    username: {type : String},
    result: {type : Array, default: []},
    attemps: { type : Number, defaul : 0},
    poinst: { type : Number, default : 0},
    createdAt: {type : Date, default: Date.now}
})

export default mongoose.model('Result', resultModel)
