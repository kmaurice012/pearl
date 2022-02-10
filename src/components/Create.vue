
<template>
  <div class="center">
    <vs-button @click="active = !active"> Create </vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Welcome to <b>Black_Pearl</b></h4>
      </template>

      <div class="con-form" style="padding-left: 80px">
        <vs-input v-model="text" placeholder="FirstName" >
          <template #icon> F</template>
        </vs-input>
        
        <vs-input v-model="text" placeholder="Lastname" style="margin-top: 15px;">
          <template #icon> L </template>
        </vs-input>
        <vs-input v-model="email" placeholder="Email" style="margin-top: 15px;">
          <template #icon> @ </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Password" style="margin-top: 15px;">
          <template #icon>
            <i class="bx bxs-lock"></i>P
          </template>
        </vs-input>
        <!-- <div class="flex">
          <vs-checkbox v-model="remember">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div> -->
      </div>

      <template #footer >
        <div class="footer-dialog" style="padding-top: 15px 5px 5px 15px;">
          <vs-button block> Sign up </vs-button>

         
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  name: "create",
  props: {},
  data: () => ({
    active: false,
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  }),
};

</script>

<style scoped>
.con-form {
  padding-left: 80px;
}
</style>
        