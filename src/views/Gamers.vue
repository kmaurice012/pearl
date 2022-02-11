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
                 
                  @click="
                    () => test(tr.id, tr.FirstName, tr.LastName, tr.Email)
                  "
                >
                  EDIT
                </vs-button>

                <vs-button
                  danger
                  border
               
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
import Create from "../components/Create.vue";
import axios from "axios";
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
    async deleteGamer(id) {
      await axios
        .delete(`http://localhost:3000/gamers/${id}`)
        .then((response) => {
          console.log(response);
          window.location.reload();
          window.location.reload();
        });
      //  axios({
      //   method: "delete",
      //   url: "http://localhost:3000/gamers",
      //   data: {
      //     id: id
      //   },
      // })
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