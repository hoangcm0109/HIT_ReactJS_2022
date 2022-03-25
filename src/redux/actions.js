export const addTodo = (data) => {
    return {
        type: 'addTodo',
        payload: data
    }
}

export const deleteTodo = (data) => {
    return {
        type: 'deleteTodo',
        payload: data
    }
}