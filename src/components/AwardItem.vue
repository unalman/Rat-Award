<script setup>
const props = defineProps({
  Title: String,
  Name: String,
  Description: String,
  IsImage: Boolean,
  IsEmote: Boolean,
  Url: String,
  IsWinner: Boolean,
});
const resultText = props.IsWinner ? "Winner" : "Nominee";
const parents = ["www.ratawards.com", "ratawards.com", "localhost"];
const parentString = "&parent=";
const UrlFilled = props.Url + parentString + parents.join(parentString);
</script>

<template>
  <div class="awardItemContainer">
    <div :class="{ winnerFramework: IsWinner, nomineeFramework: !IsWinner }">
      <figure class="awardFigure">
        <img v-if="IsImage && !IsEmote" class="awardImage" v-lazy="Url" />
        <img v-if="IsEmote" class="awardEmote" v-lazy="Url" />
        <iframe
          v-if="!IsImage"
          v-lazy="UrlFilled"
          frameborder="0"
          loading="lazy"
          allowfullscreen="true"
          scrolling="no"
          height="378"
          width="620"
          preload="0"
        ></iframe>
      </figure>
    </div>
    <div
      :class="{
        winnerTextContainer: IsWinner,
        nomineeTextContainer: !IsWinner,
      }"
    >
      <div :class="{ winnerText: IsWinner, nomineeText: !IsWinner }">
        {{ resultText }}
      </div>
    </div>
    <div :class="{ awardWinnerName: IsWinner, awardNomeneeName: !IsWinner }">
      {{ Name }}
    </div>
  </div>
</template>

<style scoped>
.awardItemContainer {
  height: fit-content;
  width: fit-content;
}
.winnerFramework,
.nomineeFramework {
  padding: 7px;
}
.winnerFramework {
  background: linear-gradient(
      -45deg,
      gold,
      #ffdb51,
      orange,
      #fff,
      #ff8c00,
      #cfb53b
    )
    0 0 /600% 600%;
}
.nomineeFramework {
  background: linear-gradient(-45deg, #666681, #373739, #9f9f9f) 0 0 /600% 600%;
}
.winnerTextContainer,
.nomineeTextContainer {
  padding: 0.6rem;
}
.winnerTextContainer {
  background: linear-gradient(to right, gold, orange);
}
.nomineeTextContainer {
  background: linear-gradient(-45deg, #4c4c4f, #000000, #a9a8a8) 0 0 /600% 600%;
}
.winnerText,
.nomineeText {
  color: white;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
}
.awardFigure {
  border: thin solid;
  display: flex;
  flex-flow: column;
  margin: auto;
}
.awardImage {
  max-width: 350px;
  max-height: 250px;
}
.awardEmote {
  max-width: 150px;
  max-height: 120px;
}
.awardWinnerName,
.awardNomeneeName {
  font: var(--baseFont);
  font-size: 1.5rem;
  line-height: 2;
  font-weight: 600;
}
.awardWinnerName {
  color: var(--baseGold);
}
.awardNomeneeName {
  color: var(--baseGrey);
}
</style>
