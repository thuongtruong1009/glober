<script setup>
  import { getImage } from "./server/api";
  import Main from "./components/Main.vue";
  import Virus from "./components/icons/Virus.vue";
  import EarthIcon from "./components/icons/EarthIcon.vue";
  import Error from "./components/icons/Error.vue";

const data = {
    Countries: [
      {
        Country: "United States of America",
        CountryCode: "US",
        Date: "2023-05-08T19:32:45.482Z",
        NewConfirmed: 12260,
        NewDeaths: 86,
        NewRecovered: 309,
        Slug: "united-states",
        TotalConfirmed: 3250385,
        TotalDeaths: 58071,
        TotalRecovered: 1879232
      },
    ],
    Global: {
        TotalConfirmed: 10,
        TotalDeaths: 0,
    },
    Date:  "2023-05-08T19:32:45.482Z",
    Max: 3000,
  };

  const isLoading = ref(false);
  const image = ref(null);

  watchEffect(async()=> {
    isLoading.value = true;
    const res  = await getImage();
    res && (image.value = res);
    isLoading.value = false;
  })

</script>

<template>
  <main>
    <section v-if="isLoading">
      <div style="display: flex; gap: 10px">
        <Virus />
        <EarthIcon />
      </div>
      <p class="loading-text" />
    </section>
    <Main :data="data" :image="image" v-if="image" />
    <section v-else-if="!image">
      <Error />
      <p>Something went wrong</p>
    </section>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #000;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
}

  section {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  p {
    text-align: center;
  }

  .loading-text::after {
    content: "Fetching Covid Status";
    animation: load-ellipsis 2s infinite linear;
  }

  @keyframes load-ellipsis {
    0% {
      content: "Fetching Covid Status";
    }

    12.5% {
      content: "Fetching Covid Status.";
    }

    25% {
      content: "Fetching Covid Status..";
    }

    37.5% {
      content: "Fetching Covid Status...";
    }

    50% {
      content: "Building Earth Map";
    }

    52.5% {
      content: "Building Earth Map.";
    }

    75% {
      content: "Building Earth Map..";
    }

    87.5% {
      content: "Building Earth Map...";
    }

    100% {
      content: "Building Earth Map...";
    }
  }
</style>

