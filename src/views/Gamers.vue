<template>
  <div class="table">
    <h4>Gamers</h4>
    <Create />
    <vs-table>
      <template #thead>
        <vs-tr style="text-align: start">
          <vs-th> Id </vs-th>
          <vs-th> FirstName </vs-th>
          <vs-th> LastName </vs-th>
          <vs-th> Email </vs-th>
          <vs-th> CUstom </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in games" :data="tr">
          <vs-td>
            {{ tr.id }}
          </vs-td>
          <vs-td>
            {{ tr.FirstName }}
          </vs-td>
          <vs-td>
            {{ tr.LastName }}
          </vs-td>
          <vs-td>
            {{ tr.Email }}
          </vs-td>
          <vs-td style="display: flex; gap: 10px">
            <vs-button
              :active="active == 0"
              @click="() => test(tr.id, tr.FirstName, tr.LastName, tr.Email)"
            >
              EDIT
            </vs-button>

            <vs-button
              danger
              border
              :active="active == 2"
              @click="deleteGamers(row.id)"
              id="Id"
            >
              Delete
            </vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <Gamers />
  </div>
</template>

<script>
import Create from "../components/Create.vue";
import Gamers from "../services/Users.js";

let games = Gamers.Gamers;
export default {
  components: {
    Gamers,
    Create,
  },

  data: () => ({
    search: "",
    games,
   
    
  }),
  methods: {
    // editCustomer(customer) {
    //   this.editId = customer.id;
    //   this.showAdd = false;
    // },
    addGamer() {
      this.editId = "";
      this.showAdd = true;
    },
    deleteGamer(gamer) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch("removeGamer", gamer).then((res) => {
            if (res)
              this.$swal("Deleted!", "Record has been deleted.", "success");
            else this.$swal("Fail!", "Fail to delete record.", "error");
          });
        }
      });
    },
  },
};


</script>

<style scoped>
.table {
  width: 900px;
  margin-left: 500px;
  padding-top: 130px;
}
</style>