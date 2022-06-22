<script setup>
import TodoForm from './components/TodoForm.vue'
</script>

<template>
  <div class="todo">
    <div class="todo-header">
      todos
    </div>
    <TodoForm />
  </div>
</template>

<style>
@import '@/assets/base.css';
.todo {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center

}
.todo-header{
  color: rgb(138, 1, 1);
  opacity: 15%;
  font-size: 100px;
  letter-spacing: -5px;
  width: 100%;
  display:flex;
  justify-content: center;
}
</style>
