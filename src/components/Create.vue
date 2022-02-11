
<template>
  <div class="center">
    <vs-button @click="active = !active"> Create </vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Welcome to <b>Black_Pearl</b></h4>
      </template>
      <form>
        <div class="con-form" style="padding-left: 80px">
          <vs-input v-model="staff.FirstName" placeholder="FirstName">
            <template #icon> F</template>
          </vs-input>
e
          <vs-input
            v-model="staff.LastName"
            placeholder="Lastname"
            style="margin-top: 15px"
          >
            <template #icon> L </template>
          </vs-input>
          <vs-input
            v-model="staff.Email"
            placeholder="Email"
            style="margin-top: 15px"
          >
            <template #icon> @ </template>
          </vs-input>
          <vs-input
            type="password"
            v-model="staff.Password"
            placeholder="Password"
            style="margin-top: 15px"
          >
            <template #icon> <i class="bx bxs-lock"></i>P </template>
          </vs-input>
          <!-- <div class="flex">
          <vs-checkbox v-model="remember">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div> -->
        </div>
      </form>

      <template #footer>
        <div class="footer-dialog" style="padding-top: 15px 5px 5px 15px">
          <vs-button block @click="create()"> Sign up </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
 import axios from "axios";
export default {
  name: "create",
  props: {},
  data: () => ({
    active: false,
    staff: { FirstName: "", LastName: "", Email: "", Password: "" },
  }),

  methods: {
    
    create() {
      // let dat = JSON.stringify(this.staff); 
      // let test = JSON.stringify(dat);
      axios({
        method: "post",
        url: "http://localhost:3000/gamers",
        data: {
         dat
        },
      });
      const dat = JSON.stringify(this.staff); 
      console.log(dat, "this is theeeeee dattaaaaaaaaaaaa");
    },
  },
};
</script>

<style scoped>
.con-form {
  padding-left: 80px;
}
</style>
        