<script setup>
const props = defineProps({
  Title: String,
  Description: String,
});
</script>

<template>
  <div class="awardContainer">
    <h2 class="awardTitle">{{ Title }}</h2>
    <p class="awardDescription">{{ Description }}</p>
    <div class="awardSlotContainer">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.awardContainer {
  display: flex;
  flex-direction: column;
}
.awardTitle {
  color: var(--baseGold);
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
}
.awardDescription {
  color: var(--baseGrey);
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0;
}
.awardSlotContainer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}
@media (max-width: 850px) {
  .awardTitle {
    color: var(--baseGold);
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
  }
  .awardDescription {
    color: var(--baseGrey);
    font-size: 1rem;
    font-weight: 700;
    margin-top: 0;
  }
}
</style>
