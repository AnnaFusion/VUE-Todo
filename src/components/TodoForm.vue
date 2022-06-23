<script setup>
import { ref, computed } from 'vue'
import NewTodo from '@/components/NewTodo.vue';
import Todos from '@/components/Todos.vue';
import Footer from '@/components/Footer.vue';

let id = 0;

const todos = ref([
  { id: id++, text: 'Task1', done: false},
  { id: id++, text: 'Task2', done: false},
  { id: id++, text: 'Task3', done: false},
]);

const newTodoText=ref('')

const allActiveCompleted=ref('All')

const completedTodos = computed(() => {
  return todos.value.filter((todo) => todo.done) 
});

const notCompletedTodos = computed(() => {
  return todos.value.filter((todo) => !todo.done) 
});

const isAllCompleted = computed(() => 
  todos.value.length === completedTodos.value.length)

function addTodo () {
  todos.value.push({ id: id++, text: newTodoText.value, done: false})
   newTodoText.value=''
}

function deleteTodo (id) {
  todos.value = todos.value.filter((t) => t.id !== id)
}

function changeTodo(id) {
  todos.value.forEach((t) => {
    if(t.id===id) {t.done = !t.done}
  })
}

function changeAllTodo() {
  const changedDone = isAllCompleted.value ? false : true;
  todos.value.forEach((t) => t.done = changedDone)
}

function deleteCompleted() {
  todos.value = todos.value.filter((t) => t.done !== true)
}

const filteredTodos = computed(() => {
  return allActiveCompleted.value==='All' 
  ?  todos.value : allActiveCompleted.value==='Active' 
    ? notCompletedTodos.value : completedTodos.value
    })

</script>
<template>
  <div class="todo-form">
    <NewTodo 
      @addTodo="addTodo" 
      @changeAllTodo="changeAllTodo"
      v-model="newTodoText"
      :isAllCompleted="isAllCompleted"
    />
    <Todos 
      :todos="filteredTodos"
      @deleteTodo='deleteTodo'
      @changeTodo='changeTodo'
    />
    <Footer
      :notCompletedNumber="notCompletedTodos.length"
      :isCompleted="!!completedTodos.length"
      v-model="allActiveCompleted"
      @deleteCompleted="deleteCompleted"
    />
  </div>
</template>

<style scoped>
.todo-form {
  width: 500px;
  background-color: white;
  border: 1px solid rgb(209, 209, 209);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
</style>
