<template>
  <div>
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
          <template #tbody style="text-align: start">
            <vs-tr :key="i" v-for="(tr, i) in gamers" :data="tr">
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
                  @click="
                    () => test(tr.id, tr.FirstName, tr.LastName, tr.Email)
                  "
                >
                  EDIT
                </vs-button>

                <vs-button
                  danger
                  border
                  :active="active == 1"
                  @click="deleteGamer(tr.id)"
                  :id="tr.id"
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
  </div>
</template>


<script>
import Gamers from "../services/Users.js";
import Create from "../components/Create.vue"
let gamers = Gamers.Gamers;
console.log(gamers, "gameeers");
export default {
  name: "gamers",
  components: {
    Gamers,
    Create,
  },

  data: () => ({
    search: "",
    gamers,
  }),
  methods: {
    deleteGamer(id) {
      console.log(id);
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch("removeGamer", id).then((res) => {
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
  padding-top: 145px;
}
</style>