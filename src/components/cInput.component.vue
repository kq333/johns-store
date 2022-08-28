<template>
  <label :for="attributeValue">{{ labelText }}</label>
  <input
    :type="inputType"
    @input="inputValue"
    :value="inputValues"
    :id="attributeValue"
    :name="attributeValue"
    maxlength="80"
    min="0"
    class="input" />

</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  inputValues: {
    type: String,
  },
  inputType: {
    type: String,
    default: "text",
  },
  labelText: {
    type: String,
    default: "label",
  },
  attributeValue: {
    type: String,
    default: "label",
  },
});
const emit = defineEmits(["inputValue"]);

function inputValue(e) {
  emit("inputValue", e.target.value);
}
</script>

<style lang="scss" scoped>
label {
  color: #ffffff;
  width: 17rem;
  margin-top: 0.4rem;
  font-size: 2rem;
}
.input {
  width: 20rem;
  width: 100%;
  height: 3rem;
  background-color: #f2f3f2;
  border-radius: 1rem;
  border: none;
  padding-left: 1rem;
}
*:focus {
  outline: none;
}
input[type="text"] {
  background-position: 1.5rem;
  background-repeat: no-repeat;
}
</style>
