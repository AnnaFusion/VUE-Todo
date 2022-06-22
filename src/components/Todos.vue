<script setup>
  import Todo from './Todo.vue';
  import { useTodoStore } from '@/stores/todo';
    const store = useTodoStore();
</script>

<template>
  <div class="todos">
    <Todo 
      @deleteTodo="(id) => emit('deleteTodo',id)"
      @changeTodo="(id) => emit('changeTodo',id)"
      v-for="todo in store.filteredTodos" 
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :done="todo.done"
    />
  </div>
</template>

<style scoped>
.todos {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>