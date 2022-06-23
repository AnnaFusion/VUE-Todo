<script setup>
  const emit = defineEmits(['addTodo', 'update:modelValue', 'changeAllTodo'])
  const props = defineProps({
    modelValue: String,
    isAllCompleted: Boolean,
  })
  function updateValue(value) {
    emit('update:modelValue', value)
  }
  function addTodo() {
    emit('addTodo')
  }
  function updateAllTodo() {
    emit('changeAllTodo')
  }
</script>

<template>
  <div class="new-todo">
    <button 
      class="new-todo__button"
      :class="{ok_button: isAllCompleted}"
      @click="updateAllTodo"
    >
      <img class="button__ok" src="/ok.png" />
    </button>
    <input 
      class="new-todo__input" 
      :value="props.modelValue" 
      v-on:input="updateValue($event.target.value)"
      @keyup.enter.native="addTodo" 
      placeholder='What needs to be done?'
    />
  </div>
</template>
<style scoped>
.new-todo{
  width: 100%;
  min-height: 50px;
  display: flex;
  border-bottom: 1px solid rgb(182, 179, 179);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
}
.new-todo__button{
  width: 50px;
  height: 50px;
  border: none;
  background-color: white;
  padding-top: 8px;
  opacity: 50%;
}
.ok_button{
  opacity: 100%;
}
.new-todo__input{
  width:450px;
  min-height: 30px;
  border: none;
  outline: none;
  font-size: 22px; 
  color: rgb(43, 42, 42);
  padding: 10px;
  word-break: break-word;
  font-style: italic;
}
.button__ok{
  width: 30px;
  height: 20px;
}
</style>
