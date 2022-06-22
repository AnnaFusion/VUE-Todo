<script setup>
  import { ref } from 'vue';
  import NewTodo from '@/components/NewTodo.vue';
  import Todos from '@/components/Todos.vue';
  import Footer from '@/components/Footer.vue';

    const newTodoText=ref('');
</script>

<template>
  <div class="todo-form">
    <NewTodo v-model="newTodoText" />
    <Todos />
    <Footer />
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
