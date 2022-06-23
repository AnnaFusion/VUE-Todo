import { defineStore, acceptHMRUpdate } from 'pinia';

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [
      { id: Date.now() + Math.random(), text: 'Task1', done: false },
      { id: Date.now() + Math.random(), text: 'Task2', done: false },
      { id: Date.now() + Math.random(), text: 'Task3', done: false },
    ],
    allActiveCompleted: 'All',
  }),
  getters: {
    completedTodos: (state) =>
      state.todos.filter((todo) => todo.done),
    notCompletedTodos: (state) => {
      return state.todos.filter((todo) => !todo.done)
    },
    filteredTodos: (state) => {
      return state.allActiveCompleted === 'All'
        ? state.todos : state.allActiveCompleted === 'Active'
          ? state.notCompletedTodos : state.completedTodos
    },
    isCompleted: (state) => !!state.completedTodos.length,
    notCompletedNumber:  (state) => state.notCompletedTodos.length,
    isAllCompleted: (state) => state.todos.length === state.completedTodos.length,
  },
  actions: {
    addTodo(todoObject) {
      this.todos.push(todoObject)
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
    changeTodo(id) {
      this.todos.forEach((t) => {
        if (t.id === id) { t.done = !t.done }
      })
    },
    changeAllTodo() {
      const changedDone =  this.isAllCompleted ? false : true;
      this.todos.forEach((t) => t.done = changedDone)
    },
    deleteCompleted() {
      this.todos = this.todos.filter((t) => t.done !== true)
    },
  }
});