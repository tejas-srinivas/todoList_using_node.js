import Todo from '../model/todo.js'


export const addTodo = async (request,response) =>{
    try{
    const newTodo = await Todo.create({
        data: request.body.data,
        createdAt: Date.now()
    })

    //this will transfer the contents to mongoDB after validation
    //mongoDB is async request
    await newTodo.save()
    //200 means successfull
    response.status(200).json(newTodo)
   }
   catch(error){
    //500 means failed
    return response.status(500).json(error.message)
   }
}

export const getAllTodos = async (request,response) => {
    try{
        //display all the colloection according to createdAt order
        const todos = await Todo.find({}).sort({ 'createdAt':-1 })
        //200 means successfull
        response.status(200).json(todos)
    }
    catch(error){
        //500 means failed
        return response.status(500).json(error.message)
    }
}

export const toggleTodoDone = async (request,response) => {
    try{
        const todoRef = await Todo.findById(request.params.id)
        
        const todo = await Todo.findOneAndUpdate(
            {_id: request.params.id},
            { done : !todoRef.done}
            )

            await todo.save();
        //200 means successfull
        return response.status(200).json(todo);
    }
    catch(error){
        //500 means failed
        return response.status(500).json(error.message)
    }
}

export const updateTodo = async (request,response) => {
    try{        
         await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data : request.body.data} )

        const todo = await Todo.findById(request.params.id)
        //200 means successfull
        return response.status(200).json(todo)
    }
    catch(error){
        //500 means failed
        return response.status(500).json(error.message)
    }
}

export const deleteTodo = async (request,response) => {
    try{        
        const todo = await Todo.findByIdAndDelete(request.params.id)

        //200 means successfull
        return response.status(200).json(todo)
    }
    catch(error){
        //500 means failed
        return response.status(500).json(error.message)
    }
}