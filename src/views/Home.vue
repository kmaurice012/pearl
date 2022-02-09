<template>
  <div>
    <div class="top">
      <Card />
      <Cards />
      <Pearl />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import Card from "@/components/Card.vue";
import Cards from "@/components/Cards.vue";
// import Desc from "@/components/Desc.vue";
import Pearl from "@/components/Pearl.vue";
export default {
  name: "Home",
  components: {
    Card,
    Cards,
    Pearl,
  },
};
</script>
<style scoped>
.top {
  margin-top: 0;
}
</style>