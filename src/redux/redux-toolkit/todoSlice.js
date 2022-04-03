import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllTodos = createAsyncThunk('getAllTodo', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')

    return res.data
})

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        // addTodo: (state, action) => {
        //     state.push(action.payload)
        // },
        // deleteTodo: (state, action) => {
        //     const newData = [...state]
        //     return newData.filter(item => item !== action.payload)
        // }
    },
    extraReducers: {
        [getAllTodos.pending]: (state, action) => {
            console.log('Đang xử lý');
        },
        [getAllTodos.fulfilled]: (state, action) => {
            return [...action.payload]
        },
        [getAllTodos.rejected]: (state, action) => {
            console.log('Đã lỗi');
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer

//action + reducer = 1 file