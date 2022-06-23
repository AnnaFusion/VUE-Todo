<script setup>
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo';
  const store = useTodoStore();
  const { 
    allActiveCompleted, 
    notCompletedNumber, 
    isCompleted 
    } = storeToRefs(store);
  const buttons = ['All', 'Active', 'Completed'];
</script>

<template>
  <div class="footer">
    <div class="footer__items_left">
      {{notCompletedNumber}} items left
    </div>
    <div class="footer__buttons">
      <button v-for="button in buttons"
        class="buttons__button"
        :class="{active: button===allActiveCompleted}"
        @click="store.allActiveCompleted=button">
        {{button}}
      </button>
    </div>
    <div class="footer__button">
      <button v-if="isCompleted"
        class="footer__clear-completed"
        @click="()=>store.deleteCompleted()"
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
