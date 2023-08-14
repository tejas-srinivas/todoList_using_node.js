// we can validate data recieved from frontend, we should never put data directly to datbase
//mongoose has its own validator
import mongoose from "mongoose"

// create a schema using moongoose
const TodoSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done: {
        type:Boolean,
        default:false
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
})

const todo = mongoose.model('todo',TodoSchema)

export default todo
