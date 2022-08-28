<template>
  <form class="form">
    <div class="form__container">
      <div class="form__category">
        <div class="form__item">

          <c-select-option labelText="Category"
                           attributeValue="category" :options="getcategoryProduct"
                           :labelModal="true"
                           :selectModal="true"
                           @select-value="selectOptionValue"/>

        </div>
          <p class="form__warning"
             v-if="!getCategoryValueLength && isSubmiteBtnActive">

              you have to select category
          </p>
      </div>

      <div class="form__name">
        <div class="form__item">

          <c-inputs
            @input-value="nameValue"
            attributeValue="Name"
            labelText="Name"/>

        </div>

        <p v-if="getNameValueLength > 79"
           class="form__warning">

           you can add only 80 characters
        </p>

        <p class="form__warning"
           v-if="!getNameValueLength && isSubmiteBtnActive">

            you have to add name
        </p>

        <p v-if="getValidationInputValueByNumber"
           class="form__warning">

           do not use numbers
        </p>
      </div>
      <div class="form__price">
        <div class="form__item">

          <c-inputs
            input-type="number"
            @input-value="priceValue"
            attributeValue="Price"
            labelText="Price" />

        </div>

        <p v-if="!getPriceValue && isSubmiteBtnActive"
           class="form__warning">
           you have to add price value
        </p>

      </div>

      <div class="form__image-upload">
        <div class="form__item">

          <c-upload-image
            input-type="file"
            attributeValue="image"
            labelText="Image"
            @drop-file="dropeFiles"/>

        </div>

        <p v-if="!getImageBase64Length && isSubmiteBtnActive"
           class="form__warning">
           you have to upload image

        </p>

      </div>
      <div class="form__upload-form">
        <div class="form__upload-btn">

          <c-btn @click="submitForm"
                 text="submite"
                 :is-form-ready="getValidateFormReady" />

        </div>
        <div class="form__close-btn">

          <c-btn text="X"
                 @click="closeModal"
                 :close-modal-color="true" />

        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import cInputs from "@/components/cInput.component.vue";
import cBtn from "@/components/cButton.component.vue";
import cSelectOption from "@/components/cSelectOption.component.vue";
import cUploadImage from "@/components/cInputUplolad.component.vue";
import { useStore } from "vuex";
import { computed } from "vue"

const store = useStore();

const getcategoryProduct = computed(()=> store.state.productCategory);
let getCategoryValueLength = computed(()=>store.getters.getCategoryValueLength);

const getNameValueLength = computed(()=> store.getters.getnameValueLength);

 const getPriceValue = computed(()=> store.getters.getPriceValue);
 const getImageBase64Length = computed(()=> store.getters.getImageBase64Length);

const getValidationInputValueByNumber = computed(() => store.getters.getValidationInputValueByNumber);

const getValidateFormReady = computed(() => store.getters.getValidateFormReady)

const isSubmiteBtnActive = computed(()=> store.state.isSubmiteBtnActive)

function dropeFiles(payload) {
  store.dispatch("addImageValue", payload);
  store.dispatch('addSubmiteForm', false)
}

function closeModal(e) {
  e.preventDefault();
  store.dispatch('isModalOpen', false)
}

function selectOptionValue(payload) {
   store.dispatch('addCategoryValue', payload)
   store.dispatch('addSubmiteForm', false)
}

function nameValue(payload) {
   store.dispatch('addNameValue', payload)
   store.dispatch('addSubmiteForm', false)
}

function priceValue(payload) {
   store.dispatch('addPriceValue', payload)
   store.dispatch('addSubmiteForm', false)
}

function submitForm(e) {
  e.preventDefault();
  store.dispatch('addSubmiteForm', true)
}
</script>

<style lang="scss" scoped>
.form {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: 2;

  &__container {
    max-width: 50rem;
    margin: auto;
    margin-top: 15%;

    @media (min-width: 32rem) {
      padding: 1rem;
    }
  }

  &__category {
    height: 3rem;
    margin-top: 5rem;
  }
  &__item {
    display: flex;
    gap: 2rem;
  }
  span {
    width: 17rem;
    margin: auto;
    color: #ffffff;
    letter-spacing: 0.1rem;
  }
  p {
    margin-top: 1rem;
  }

  &__name {
    height: 3rem;
    margin-top: 5rem;
    gap: 2rem;
  }

  &__price {
    height: 3rem;
    margin-top: 5rem;
    gap: 2rem;
  }

  &__image-upload {
    height: 3rem;
    margin-top: 5rem;
    gap: 2rem;
  }

  &__upload-form {
    height: 3rem;
    margin-top: 5rem;
    display: flex;
  }

  &__upload-btn {
    width: 90%;
    display: flex;
    justify-content: center;
  }
  &__close-btn {
    margin-left: 9rem;
    padding-left: 1rem;
  }
  &__warning {
    color: #e71212;
    font-size: 1.2rem;
    margin-left: 14rem;
  }
}
</style>
