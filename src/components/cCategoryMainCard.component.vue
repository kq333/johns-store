<template>
  <section class="main-card">
    <div class="main-card__container">
      <header class="main-card__header">
        <h2 v-if="isSearchedWords">searched items</h2>
        <h2 v-else>{{ header }}</h2>
      </header>
      <div class="main-card__divader"></div>
      <div class="main-card__sort-section">
          <span>sort by price</span>

            <c-btn  @click="sortData(items)"
                    :isFormReady="true"
                    :sort-btn="true">

            <template #iconOne
                      v-if="!isSortActive">

              <img src="../assets/icon/arrow-up.svg" alt="arrow-icon"/>

            </template>

            <template #iconTwo
                      v-else>

              <img src="../assets/icon/arrow-down.svg" alt="arrow-icon"/>

            </template>
          </c-btn>

      </div>
      <div class="main-card__content">

        <div v-for="item in items"
            :key="item.id"
            class="main-card__list-items">

          <div class="main-card__item">
            <img :src="item.src"
                 :alt="item.name"/>

          </div>
          <div class="main-card__item">
            <span class="main-card__item-names">name:</span>
             <span> {{ item.name }}</span>
          </div>
          <div class="main-card__item">
            <span class="main-card__item-names">price:</span>
             <span>{{ item.price.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useStore } from 'vuex';

import cBtn from "@/components/cButton.component.vue";


 defineProps({
  header: {
    type: String,
    default: "searched results",
  },
  items: {
    type: Array,
    required: true,
  },
  isSearchedWords: {
    type: Boolean,
    default: false,
  }
});

const isSortActive = ref(false);
const store = useStore()

function sortData(payload){

  isSortActive.value = !isSortActive.value
  const filterSortedCategory = payload.map(elem => elem.category)
  const finalvalue = [...new Set(filterSortedCategory), isSortActive.value]

  finalvalue[0] === 'cats' ?  store.commit("ADD_SORT_PRICE_CATS", finalvalue[1]) : ''

 finalvalue[0] === 'treehouse' ?  store.commit("ADD_SORT_PRICE_TREEHOUSE", finalvalue[1]) : ''

 finalvalue[0] === 'groundhouse' ?  store.commit("ADD_SORT_PRICE_GROUNDHOUSE", finalvalue[1]) : ''

}

</script>

<style lang="scss" scoped>
.main-card {
  max-width: 70rem;
  height: 72rem;
  overflow-x: auto;
  background-color: #6b7280;
  border-radius: 1rem;
  margin: auto;

  &__container {
    padding: 1rem;
  }

  h2 {
    letter-spacing: 0.5rem;
    color: #d4d4d8;
  }
  &__divader {
    border-bottom: solid 0.2rem #65a30d;
    max-width: 50rem;
  }

  &__content {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    padding: 1rem;
    gap: 1rem;

  }
  &__list-items {
    background-color: #e4e4e7;
    border-radius: 0.6rem;

  }
  &__item {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    font-size: 1.3rem;
    padding-bottom: 0.5rem;

    img {
      width: 20rem;
      height: 10rem;
      object-fit: contain;
    }
  }
  &__item-names{
    font-weight: 700;

  }

  span{
    margin-left: 0.3rem;
  }
  &__sort-section {
    margin-top: 3rem;
    display: flex;
    max-width: 80rem;

  }

}
</style>
