import axios from 'axios'

const baseUrl = "http://localhost:3001"

const getAllTodos = (setToDo) => {
    axios.get(baseUrl)
        .then(({data}) => {
            console.log('data ----> ', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {
    axios.post(`${baseUrl}/save`, {text})
        .then((data) => {
            console.log('saved data: ', data);
            setText("")
            getAllTodos(setToDo)
        })
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios.post(`${baseUrl}/update`, {_id: toDoId, text})
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllTodos(setToDo)
        })
        .catch((err) => console.log("Error while updating: ", err))
}

const deleteToDo = (_id, setToDo) => {
    axios.post(`${baseUrl}/delete`, {_id})
        .then((data) => {
            getAllTodos(setToDo)
        })
        .catch((err) => console.log("Error while deleting: ", err))
}

export {getAllTodos, addToDo, updateToDo, deleteToDo}