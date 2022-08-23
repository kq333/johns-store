<template>
  <div class="home-view">
    <main>
    <teleport to="#modal" >
      <section v-if="isModalOpen">
        <c-modal-form/>
      </section>
    </teleport>

    <section class="home-view__events">
      <div class="home-view__search-item">
        <c-inputs @input-value="searchInputValue"
                  label-text="search" />

      </div>
         <div class="home-view__currancy-item">

          <c-select-option
            labelText="currency"
            attributeValue="currency"
            :options="getCurrencyName"
            :disable-option-text="false"
            :label-currancy="true"
            :select-currancy="true"
            @select-value="productCurrancy"
          />
        </div>

      <div class="home-view__btn-item">
        <c-btn @click="openModal"
               text="add to collection"
               :adding-items="true"/>

      </div>
    </section>
<article>
    <section v-if="catsproducts.length>0">
      <c-category-card :items='catsproducts'
                       header="Category: Cats"
                       :is-searched-words="getSearchedWordLength"/>
    </section>

     <section  v-if="treehousesProducts.length>0" >
      <c-category-card :items='treehousesProducts'
                       header="Category: Cottage tree" :is-searched-words="getSearchedWordLength"/>
    </section>

    <section  v-if="GroundhouseProducts.length>0" >
      <c-category-card :items='GroundhouseProducts'
                       header="Category: Groundhouse" :is-searched-words="getSearchedWordLength"/>
    </section>
    </article>
    </main>
      <span style="display: none">{{getPushNewDataToStore}}</span>
  </div>
</template>

<script setup>
import cModalForm from "@/components/cModalUploadData.component.vue";
import cCategoryCard from "@/components/cCategoryMainCard.component.vue";
import cSelectOption from "@/components/cSelectOption.component.vue";
import cBtn from "@/components/cButton.component.vue";
import cInputs from "@/components/cInput.component.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const catsproducts = computed(() => store.getters.getSortCats);
const treehousesProducts = computed(() => store.getters.getSortTreehouse);
const GroundhouseProducts = computed(() => store.getters.getSortGroundhouse);

const getSearchedWordLength = computed(()=>store.getters.getSearchedWordLength);

const getCurrencyName = computed(() => store.state.currancy);
const isModalOpen = computed(() => store.state.isModalOpen);

function searchInputValue(payload){
  store.commit('ADD_SEARCHED_INPUT_VALUE', payload)
}

function productCurrancy(payload){
  store.commit('ADD_CURRENCY_PRODUCT', payload)
}

function openModal(){
  store.commit('SET_IS_MODAL_OPEN', true)
}

const getPushNewDataToStore = computed(() => store.getters.getPushNewDataToStore)

</script>
<style lang="scss" scoped>

.home-view{
  margin-top: 12rem;

article{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70rem, 1fr));
  gap: 4rem;
  margin-top: 3rem;

  @media(max-width: 42.5rem){

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    padding: 1rem;

  }
}

  &__events{
    display: flex;
    min-height: 8rem;
    max-width: 70%;
    margin-left: 15%;
    border: solid 0.1rem #2c3e5042;
    border-radius: 1rem;

    @media(max-width: 425px){
      display: block
    }
     @media(min-width:768px) and (max-width:1023px){
       max-width: 90%;
       margin-left: 5%;
    }
  }
  &__search-item{
     width:50%;
     display:flex;
     align-items: center;

     @media(max-width: 425px){
      display: block;
      width: 80%;
      margin: auto;;
    }

  }
  &__currancy-item{
     width:25%;
     display:flex;
     justify-content: center;
     align-items: center;

     @media(max-width: 425px){
      width: 90%;
      margin: auto;
      margin-top: 1rem;

    }
  }
  &__btn-item{
     width: 25%;
     display:flex;
     justify-content: center;
     align-items: center;

     @media(max-width: 425px){
      margin: auto;
      width: 70%;
      margin-top: 1rem;
      padding-bottom: 0.9rem;;
    }
  }
}

</style>
