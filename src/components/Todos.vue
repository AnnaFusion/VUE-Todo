<script setup>
import Todo from './Todo.vue'
const props = defineProps({
  todos: Array,
})
const emit =  defineEmits(['deleteTodo', 'changeTodo']);

</script>

<template>
  <div class="todos">
    <Todo 
      @deleteTodo="(id) => emit('deleteTodo',id)"
      @changeTodo="(id) => emit('changeTodo',id)"
      v-for="todo in todos" 
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