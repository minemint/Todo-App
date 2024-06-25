import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'https://6679449518a459f6394eea74.mockapi.io'

export const useTodoStore = defineStore('todo', {
  state: () => ({ // กำหนดข้อมูล state ที่จะเก็บใน store นี้
    list: [],
    selectedTodo: {},
    statuses: ['Pending', 'Doing', 'Done'],
    types:['All','Work','Personal','Shopping']
  }),
  actions: {
    async loadTodos () {
      try {
        const response = await axios.get(`${BASE_URL}/todos`)
        this.list = response.data
      } catch (error) {
        console.log('error', error)
      }
    },
    async loadTodo (id) {
      try {
        const response = await axios.get(`${BASE_URL}/todos/${id}`)
        this.selectedTodo = response.data
      } catch (error) {
        console.log('error', error)
      }
    },
    async addTodo (todoText) {
      const bodyData = {
        name: todoText,
        status: 'Pending',
        type: 'Work'
      }
      try {
        const response = await axios.post(`${BASE_URL}/todos`, bodyData)
        console.log(response.data)
        // this.list = response.data
      } catch (error) {
        console.log('error', error)
      }
    },
    async editTodo (todoData, id) {
      try {
        const bodyData = {
          name: todoData.name,
          status: todoData.status,
          type: todoData.type
        }
        const response = await axios.put(`${BASE_URL}/todos/${id}`, bodyData)
        console.log(response.data)
      } catch (error) {
        console.log('error', error)
      }
    },
    async removeTodo (id) {
      try {
        const response = await axios.delete(`${BASE_URL}/todos/${id}`)
        console.log(response.data)
      } catch (error) {
        console.log('error', error)
      }
    }
  }
})