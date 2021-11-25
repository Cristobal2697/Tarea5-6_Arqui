<script>
import { mapState } from "vuex";

export default {
  async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
    await dispatch("getAnimal", params);
    await dispatch("getReadMore", {
      slug: params.slug,
      tags: Object.keys(store.state.animals.data),
    });
    await dispatch("getPrevNext", params);
  },
  computed: {
    ...mapState({
      animal: (state) => state.animal.data,
      readMore: (state) => state.readMore.data,
      prevNext: (state) => state.prevNext.data,
    }),
  },
};
</script>
<style>
#font {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 23px;
  letter-spacing: -1.2px;
  word-spacing: 2.2px;
  color: #000000;
  font-weight: 400;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;
}

table,
th,
td {
  border: 2px solid #a40808;
  background-color: #eee7db;
  text-align: center;
  border-collapse: collapse;
}

table{
  table-layout: fixed ;
  width: 100%;
}

.t{
  text-transform: capitalize;
}

</style>
<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <table>
        <tr >
          <th colspan="2"><h3 class="t">{{ animal.animal_name }}</h3></th>
          <th colspan="4"><img class="card-img" :src="'/images/animals/' + animal.image" /></th>
        </tr>
        <tr></tr>
        <tr>
          <td>It has hair?</td>
          <td>{{ animal.hair }}</td>
          <td>It has feathers?</td>
          <td>{{ animal.feathers }}</td>
          <td>It lays eggs?</td>
          <td>{{ animal.eggs }}</td>
        </tr>
        <tr>
          <td>It produces milk?</td>
          <td>{{ animal.milk }}</td>
          <td>It flies?</td>
          <td>{{ animal.airborne }}</td>
          <td>It is aquatic?</td>
          <td>{{ animal.aquatic }}</td>
        </tr>
        <tr>
          <td>It is a predator?</td>
          <td>{{ animal.predator }}</td>
          <td>It has teeth?</td>
          <td>{{ animal.toothed }}</td>
          <td>It has a backbone?</td>
          <td>{{ animal.backbone }}</td>
        </tr>
        <tr>
          <td>It has air breathing?</td>
          <td>{{ animal.breathes }}</td>
          <td>It is poisonous?</td>
          <td>{{ animal.venomous }}</td>
          <td>It has fins?</td>
          <td>{{ animal.fins }}</td>
        </tr>
        <tr>
          <td>It has legs?</td>
          <td>{{ animal.legs }}</td>
          <td>It has tail?</td>
          <td>{{ animal.tail }}</td>
          <td>It is domestic?</td>
          <td>{{ animal.domestic }}</td>
        </tr>
        <tr>
          <td colspan="2">It is the size of a cat?</td>
          <td colspan="2">{{ animal.catsize }}</td>
        </tr>
      </table>
      <utteranc/>
    </div>
    
    <FooterView />
  </div>
</template>