<template>
  <div id="app">
    <div id="nav">
      <div class="hidden" style="background-color: black;" >
        <vs-sidebar absolute hover-expand reduce v-model="active" open  style="background-color: black; height: 100%;">
          <template>
            <!-- <h1 style="font-family: 'Aldrich';">Black_Pearl</h1> -->
            <!-- <Pearl /> -->
          </template>
          <router-link to="/">
            <vs-sidebar-item id="home" style="color: white;">
              <template #icon>
                <i class="bx bx-home"></i>
              </template>
              Dashboard
            </vs-sidebar-item>
          </router-link>
          <router-link to="/about">
            <vs-sidebar-item id="market" style="color: white;">
              <template #icon>
                <i class="bx bx-grid-alt"></i>
              </template>
              About
            </vs-sidebar-item>
          </router-link>
          <router-link to="users">
            <vs-sidebar-item id="Music" style="color: white;">
              <template #icon>
                <i class="bx bxs-music"></i>
              </template>
              Users
            </vs-sidebar-item>
          </router-link>
          <router-link to="gamers">
            <vs-sidebar-group>
              <template #header>
                <vs-sidebar-item arrow style="color: white;">
                  <template #icon>
                    <i class="bx bx-group"></i>
                  </template>
                  Social media
                </vs-sidebar-item>
              </template>

              <vs-sidebar-item id="Instagram" style="color: white;">
                <template #icon>
                  <i class="bx bxl-instagram"></i>
                </template>
                Instagram
              </vs-sidebar-item>
              <vs-sidebar-item id="twitter" style="color: white;">
                <template #icon>
                  <i class="bx bxl-twitter"></i>
                </template>
                Twitter
              </vs-sidebar-item>
              <vs-sidebar-item id="Facebook" style="color: white;">
                <template #icon>
                  <i class="bx bxl-facebook"></i>
                </template>
                Facebook  ``
              </vs-sidebar-item>
            </vs-sidebar-group>
          </router-link>
          <router-link to="blog">
            <vs-sidebar-item id="donate" style="color: white;">
              <template #icon>
                <i class="bx bxs-donate-heart"></i>
              </template>
              Donate
            </vs-sidebar-item>
          </router-link>
          <vs-sidebar-item id="drink" style="color: white;">
            <template #icon>
              <i class="bx bx-drink"></i>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping" style="color: white;">
            <template #icon>
              <i class="bx bxs-shopping-bags"></i>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat" style="color: white;">
            <template #icon>
              <i class="bx bx-chat"></i>
            </template>
            Chat
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class="bx bx-bell"></i>

                <template #badge> 28 </template>
              </vs-avatar>

              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="" />
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
      <h1 style="font-family: 'Aldrich';">Black_Pearl</h1>
      
    </div>
    <router-view />
    <!-- <Card/> -->
  </div>
</template>

  <script>
//  import Card from "@/componentsCard.vue";
import Pearl from "@/components/Pearl.vue";
export default {
  data: () => ({
    active: "home",
    components: {
      Pearl,
    },
  }),
};
</script>
<style>
/* #nav{
  position: fixed;
} */
@import url("https://fonts.googleapis.com/css?family=Aldrich");
h1 {
  margin-left: 715px;
  font-size: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

 #nav {
  padding: 30px;
  position: fixed; height: 100%;
}
/*
#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
