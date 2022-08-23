<template>
  <button
    :class="{
      'btn': isFormReady,
      'btn--alert': !isFormReady,
      'close-modal': closeModalColor,
      'sort-btn': sortBtn,
      'btn-adding': addingItems}" >
    <slot name="iconOne"></slot>
    <slot name="iconTwo"></slot>
    <slot name="text">{{ text }}</slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
  },
  isFormReady: {
    type: Boolean,
    default: false,
  },
  closeModalColor: {
    type: Boolean,
    default: false,
  },
  iconBtn:{
    type: String,
    default: require('../assets/icon/arrow-down.svg')
  },
  sortBtn: {
    type: Boolean,
    default: false,
  },
  addingItems: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss">
.btn {
  height: 3.3rem;
  width: 9rem;
  letter-spacing: 0.3rem;
  background-color: #acff2fd0;
  color: #ffffff;
  border-radius: 0.5rem;

  img{
    width: 50%;
    height: 50%;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &--alert {
    background-color: #e71212;
    color: #ffffff;
    letter-spacing: 0.3rem;
    border-radius: 0.5rem;
    height: 3.3rem;
  }
}

.close-modal {
  height: 3.2rem;
  min-width: 3rem;
  background-color: transparent;
  color: #ffffff;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
}

.sort-btn{
  width:3rem;
  height: 2rem;
 background-color: transparent;
 border: 0.3rem;

  img{
    width: 90%;
    height: 90%;
  }

  &:hover{
     cursor: pointer;
    opacity: 0.4;
  }
}

.btn-adding{

  min-width:3rem;
  height: 4rem;
  border: none;
  background-color: #334155;

&:hover{

  cursor: pointer;
  opacity: 0.8;

}
}

</style>
