<template>
  <label :for="attributeValue">{{ labelText }}</label>
  <input
    :type="inputType"
    @change="uploadFile"
    :value="inputValues"
    :id="attributeValue"
    :name="attributeValue"
    class="input icon"/>

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
  fileTypeAccept:{
    type: String,
    default: "image/*"
  },

});
const emit = defineEmits(["dropFile"]);

function uploadFile(payload) {
  emit("dropFile", payload.target.files[0]);
}
</script>

<style lang="scss" scoped>
label {
  color: #ffffff;
  width: 12rem;
  margin-top: 0.4rem;
  font-size: 2rem;
}
input {
  width: 9rem;
  height: 3rem;
  border: none;
}
*:focus {
  outline: none;
}
input[type="file"] {
  font-size: 2rem;
  width: 12rem;
  border-radius: 0.6rem;
}

</style>
