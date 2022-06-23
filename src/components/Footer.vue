<script setup>
  const props = defineProps({
    notCompletedNumber: Number,
    modelValue: String,
    isCompleted: Boolean,
  })
  const emit = defineEmits(['update:modelValue', 'deleteCompleted'])
  const buttons = ['All', 'Active', 'Completed']
</script>

<template>
  <div class="footer">
    <div class="footer__items_left">
      {{notCompletedNumber}} items left
    </div>
    <div class="footer__buttons">
      <button v-for="button in buttons"
        class="buttons__button"
        :class="{active: button===modelValue}"
        @click="emit('update:modelValue', button)">
        {{button}}
      </button>
    </div>
    <div class="footer__button">
      <button v-if="isCompleted"
        class="footer__clear-completed"
        @click="emit('deleteCompleted')"
      >
        Clear completed
      </button>
    </div>
  </div>
</template>

<style scoped>
.footer{
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.footer__buttons {
  width: 200px;
  display: flex;
  justify-content: space-between
}
.buttons__button{
  border: 2px solid white;
  border-radius: 5px; 
}
.active{
  border: 2px solid rgb(201, 166, 166); 
}
.footer__button{
  width: 120px;
}
.footer__clear-completed{
  border: none;
  width: 120px;
}
  .footer__clear-completed:hover {
    text-decoration: underline;
  }

</style>
