<template>
  <div>
    <h1>Lists</h1>
    <TableView
      :headers="{ dataHeaders }"
      :rows="{ dataRows }"
      :sort="{ sort }"
      :pagination="{ pagination }"
      css-style="my-css-style"
    >
      <template v-slot:items="{ row }">
        <td>{{ row.first_name }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.age }}</td>
      </template>
      <template v-slot:no-data>
        <span>No data</span>
      </template>
    </TableView>
  </div>
</template>
<script>
// import TableView from "vue-table-component";

export default {
  name: "List",
  data() {
    return {
      dataHeaders: [
        {
          label: "First Name",
          field: "first_name",
          sortable: true,
          type: "String",
        },
        { label: "Email", field: "email", sortable: true, type: "String" },
        { label: "Age", field: "age", sortable: true, type: "Number" },
      ],
      dataRows: [
        { first_name: "Isidor", email: "igatenby0@stanford.edu", age: 20 },
        { first_name: "Max", email: "mchimienti1@ebay.vi", age: 32 },
        { first_name: "Brigham", email: "bibell2@businesswire.com", age: 54 },
        { first_name: "Jakob", email: "jcecil3@cmu.kz", age: 37 },
        { first_name: "Brannon", email: "btamsett4@jiathis.com", age: 18 },
      ],
      sort: {
        field: "first_name",
        order: "asc",
      },
      pagination: {
        itemsPerPage: 10,
        align: "center",
        visualStyle: "select",
      },
    };
  },
  components: {},
  computed: {},
  created(){
    this.$store.dispatch('fetch')
  }
};
</script>