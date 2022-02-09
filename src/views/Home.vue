<template>
  <div class="home">
    <Card /> 
    <Cards />
    <Desc/>
  </div>
</template>

<script>
// @ is an alias to /src

import Card from "@/components/Card.vue";
import Cards from "@/components/Cards.vue";
import Desc from "@/components/Desc.vue";
export default {
  name: "Home",
  components: {
    Card, 
    Cards,
    Desc
  },
};
</script>
