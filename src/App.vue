<script setup>
import AwardItem from "./components/AwardItem.vue";
import AwardItemContainer from "./components/AwardItemContainer.vue";
import hookrat from "./assets/hookrat.jpg";
import assassin from "./assets/assassin.jpg";
import gunner from "./assets/gunner.jpg";
</script>

<template>
  <header>
    <h3 class="title">MOONIEJOY RAT AWARD 2023</h3>
  </header>

  <main>
    <div class="descriptionContainer">
      <a class="imageATag" href="https://www.twitch.tv/mooniejoy">
        <img src="/src/assets/mooniejoyTwitchImage.png" />
      </a>

      <p class="description">
        Welcome to the Rat Awards, which will be held for the first time this
        year. <br />
        We selected many topic for award from
        <a href="https://www.twitch.tv/mooniejoy">Mooniejoy's streams</a>.
      </p>
    </div>
    <ul class="awardUl">
      <li>
        <AwardItemContainer
          Title="GAME OF THE YEAR"
          Description="Unsurprisingly, the winner is Rattide."
        >
          <AwardItem
            Name="Warhammer: Vermintide 2"
            :IsImage="true"
            Url="https://gaming-cdn.com/images/products/2401/616x353/warhammer-vermintide-2-pc-game-steam-cover.jpg?v=1649317626"
            :IsWinner="true"
          />
          <AwardItem
            Name="Lethal Company"
            :IsImage="true"
            Url="https://cdn.akamai.steamstatic.com/steam/apps/1966720/capsule_616x353.jpg?t=1700231592"
            :IsWinner="false"
          />
          <AwardItem
            Name="Warhammer 40000: Darktide"
            :IsImage="true"
            Url="https://cdn.cloudflare.steamstatic.com/steam/apps/1361210/capsule_616x353.jpg?t=1700602975"
            :IsWinner="false"
          />
        </AwardItemContainer>
      </li>
      <li>
        <AwardItemContainer
          Title="BOSS OF THE YEAR"
          Description="A performance that single-handedly narrowed down the game for the entire team.
           Both candidates were very good, but the Minotaur became the winner by slaughtering the entire team."
        >
          <AwardItem
            Name="Minotaur"
            :IsImage="false"
            :Url="'https://clips.twitch.tv/embed?clip=BashfulFlaccidPandaTwitchRaid-HlQE8twFedxRpTqH'"
            :IsWinner="true"
          />
          <AwardItem
            Name="Stormfiend"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=BreakableConsiderateReubenMikeHogu-leOc--efrg78HxYs"
            :IsWinner="false"
          />
        </AwardItemContainer>
      </li>
      <li>
        <AwardItemContainer
          Title="BEST SPECIAL RAT"
          Description="Hookrat wins by catching 3 times in a row."
        >
          <AwardItem
            Name="Packmaster"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=ObliqueCoweringAnteaterBCouch-pLPJIdOQcG5z5ooc"
            :IsWinner="true"
          />
          <AwardItem
            Name="Lifeleech"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=ResilientUglyHyenaAMPEnergy-yQCDL3JZfu1aSUzN"
            :IsWinner="false"
          />
        </AwardItemContainer>
      </li>
      <li>
        <AwardItemContainer
          Title="BEST SHOT"
          Description="This topic was hard to choose winner. We have many candidates."
        >
          <AwardItem
            Name="Impossible Shot"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=TransparentCheerfulFennelCopyThis-_uuTHlTTyaG9xVxC"
            :IsWinner="true"
          />
          <AwardItem
            Name="She gently warns her teammate with the bomb"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=MotionlessJollyMochaMVGame-MHJel9ZITl1EylvT"
            :IsWinner="false"
          />
          <AwardItem
            Name="She helps kill Kerillian"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=ImportantTenderFriseeAMPTropPunch-CTWtuMZikvV-5U_j"
            :IsWinner="false"
          />
          <AwardItem
            Name="Calculated Shot"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=SeductiveDiligentLatteDuDudu-iDb9rEy-8wzrJJkO"
            :IsWinner="false"
          />
        </AwardItemContainer>
      </li>
      <li>
        <AwardItemContainer
          Title="MOST TALKS PLAYER"
          Description="zwickks was the clear winner."
        >
          <AwardItem
            Name="zwickks"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=SolidRealTurtleBrokeBack-rx1buVr5M9y6HSmx"
            :IsWinner="true"
          />
        </AwardItemContainer>
      </li>
      <li>
        <AwardItemContainer
          Title="FUNNIEST MOMENT OF THE YEAR"
          Description="zwickks was the clear winner."
        >
          <AwardItem
            Name="Unexpected End"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=RichTiredSwanCorgiDerp-LQimx58lYjUMd4KS"
            :IsWinner="true"
          />
          <AwardItem
            Name="Christmas Gift"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=TransparentSpeedyLionTBTacoRight-anTuk8rSWGxjMXdi"
            :IsWinner="false"
          />
          <AwardItem
            Name="0.01 Seconds Block"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=SecretiveGracefulLlamaDogFace-WMntSHCeHN2fWty9"
            :IsWinner="false"
          />
        </AwardItemContainer>
      </li>
      <li>
        <AwardItemContainer
          Title="BEST EMOTE OF THE YEAR"
          Description="Gunner is a very successful emote in every sense."
        >
          <AwardItem
            Name="Ratling Gunner"
            :IsImage="true"
            :IsEmote="true"
            :Url="gunner"
            :IsWinner="true"
          />
          <AwardItem
            Name="Packmaster"
            :IsImage="true"
            :IsEmote="true"
            :Url="hookrat"
            :IsWinner="false"
          />
          <AwardItem
            Name="Gutter Runner"
            :IsImage="true"
            :IsEmote="true"
            :Url="assassin"
            :IsWinner="false"
          />
        </AwardItemContainer>
      </li>
      <li>
        <AwardItemContainer
          Title="FOREIGN GAME OF THE YEAR"
          Description="The winner is Lethal Company, which left its mark on this year."
        >
          <AwardItem
            Name="Lethal Company - Stepping Into A New Game"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=RichTentativeKoupreyImGlitch-RGO5WmD1Cs8eOTun"
            :IsWinner="true"
          />
          <AwardItem
            Name="Phasmophobia - Facial Expression"
            :IsImage="false"
            Url="https://clips.twitch.tv/embed?clip=AnnoyingObservantPrariedogArsonNoSexy-QKLVPw4Mqd41dD2e"
            :IsWinner="false"
          />
        </AwardItemContainer>
      </li>
      <li></li>
    </ul>
  </main>
</template>

<style scoped>
.title {
  font-weight: 1000;
  color: var(--titleGold);
  font-size: 4rem;
  text-align: center;
}
.descriptionContainer {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
.description {
  color: var(--baseGrey);
  font-size: 2rem;
  font-weight: 700;
}
.imageATag {
  display: block;
}
.imageATag img {
  padding: 0.3rem;
  background: linear-gradient(to right, #772ce8, purple);
  border-radius: 3rem;
}

.awardUl {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
