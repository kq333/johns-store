<template>
  <label :class="{
         'label-currancy' :labelCurrancy,
         'label-modal' : labelModal
         }"
         :for="attributeValue">

          {{ labelText }}
  </label>

  <select :class="{
          'select-currancy' : selectCurrancy,
          'select-modal' : selectModal
          }"
          :name="attributeValue"
          :id="attributeValue"
          @change="selectedValue">

    <option value=""
            v-if="disableOptionText">
            {{ optionText }}

    </option>
    <option v-for="option in options"
            :key="option.name"
            :value="option.value">

      {{ option.name }}
    </option>
  </select>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

defineProps({
  options: {
    type: Array,
    required: true,
  },
  labelText: {
    type: String,
    default: "label",
  },
  attributeValue: {
    type: String,
    default: "select",
  },
  optionText: {
    type: String,
    default: "Please select category",
  },
  disableOptionText: {
    type: Boolean,
    default: true,
  },
  labelCurrancy: {
    type: Boolean,
    default: false
  },
  labelModal: {
    type: Boolean,
    default: false
  },
  selectCurrancy: {
    type: Boolean,
    default: false
  },
  selectModal: {
     type: Boolean,
    default: false
  }

});

const emit = defineEmits(["selectValue"]);

function selectedValue(payload) {
  emit("selectValue", payload.target.value);
}
</script>

<style lang="scss" scoped>
.label-modal {
  color: #ffffff;
  width: 17rem;
  margin-top: 0.4rem;
  font-size: 2rem;
}

.label-currancy{
  color: #2c3e50;
  max-width: 6rem;
  margin-top: 0.4rem;
  font-size: 2rem;
}
.select-currancy{
  width: 8rem;
  height: 3.4rem;
  background-color: #f2f3f2;
  border-radius: 1rem;
  border: none;
  padding-left: 0.5rem;
  margin-left: 3rem

}
.select-modal {
  width: 20rem;
  width: 100%;
  height: 3.4rem;
  background-color: #f2f3f2;
  border-radius: 1rem;
  border: none;
  padding-left: 1rem;
}

*:focus {
  outline: none;
}
</style>
