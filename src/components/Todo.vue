<script setup>
  import { ref, computed } from 'vue'
  const props = defineProps({
    id: Number,
    text: String,
    done: Boolean
  })
  const emit = defineEmits(['deleteTodo', 'changeTodo']);

  const isHovered=ref(false)

  function deleteClick() {
    emit('deleteTodo',props.id)
  }

  function changeClick() {
    emit('changeTodo',props.id)
  }
</script>

<template>
  <div 
    class="todo__item"
    @mouseover="isHovered=true"
    @mouseleave="isHovered=false"
  >
    <button 
      class="item__button"  
      @click='changeClick'
    >
      <img 
        v-if="done" 
        class="button__img" 
        src='/done_round.png'/>
      <div v-else class="button__round"/>
    </button>
    <div 
      class="item__text" 
      :class="{completed: done}">
        {{text}} 
    </div>
    <button
      v-if="isHovered"
      class="item__button" 
      @click='deleteClick'
    > 
      X 
    </button>
  </div>
</template>

<style scoped>
.todo__item {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(223, 221, 221);
}
.item__button{
  width: 40px;
  height: 40px; 
  border-radius: 50%;
  border: none;
  margin-top: 5px;
}
.button__img {
  margin-top: 2px;
  width: 35px;
  height: 35px;
}
.button__round {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid rgb(223, 221, 221);
}
.item__text{
  width: 400px;
  min-height: 50px;
  padding: 10px;
  font-size: 20px; 
  color: rgb(61, 60, 60);
  word-break: break-word;
}
.completed {
  text-decoration: line-through;
  opacity: 50%;
}
</style>