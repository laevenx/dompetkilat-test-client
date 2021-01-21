<template>
  <div class="column is-10 is-offset-1">
    <h1>Lists</h1>

    <div class="column is-6 is-offset-3">
      <input class="effect-1" type="text" placeholder="Search" />

      <select v-model="filter">
        <option v-for="option in options" v-bind:key="option" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>

    <b-table :data="data" :columns="columns"></b-table>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {},
  data() {
    return {
      filter: "",
      options: [
        { text: "ALL", value: "ALL" },
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "B+", value: "B+" },
      ],
      data: [
        {
          id: 1,
          first_name: "Jesse",
          last_name: "Simmons",
          date: "2016-10-15 13:43:27",
          gender: "Male",
        },
        {
          id: 2,
          first_name: "John",
          last_name: "Jacobs",
          date: "2016-12-15 06:00:53",
          gender: "Male",
        },
        {
          id: 3,
          first_name: "Tina",
          last_name: "Gilbert",
          date: "2016-04-26 06:26:28",
          gender: "Female",
        },
        {
          id: 4,
          first_name: "Clarence",
          last_name: "Flores",
          date: "2016-04-10 10:28:46",
          gender: "Male",
        },
        {
          id: 5,
          first_name: "Anne",
          last_name: "Lee",
          date: "2016-12-06 14:38:38",
          gender: "Female",
        },
      ],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true,
        },
        {
          field: "first_name",
          label: "First Name",
        },
        {
          field: "last_name",
          label: "Last Name",
        },
        {
          field: "date",
          label: "Date",
          centered: true,
        },
        {
          field: "gender",
          label: "Gender",
        },
      ],
    };
  },
  components: {},
  computed: {},
  // methods: {
  //   headerSet(index) {
  //     if (index == 1) {
  //     } else if (index == 2) {
  //     } else if (index == 3) {
  //     } else if (index == 4) {
  //     }
  //   },
  // },
  created() {
    if (this.props.option == "ConventionalOsf") {
      this.$store.dispatch("fetchConventionalOsf");
    } else if (this.props.option == "ConventionalInvoice") {
      this.$store.dispatch("fetchConventionalInvoice");
    } else if (this.props.option == "ProductiveInvoice") {
      this.$store.dispatch("fetchProductiveInvoice");
    } else if (this.props.option == "Reksadana") {
      this.$store.dispatch("fetchReksadana");
    } else if (this.props.option == "sbn") {
      this.$store.dispatch("fetchSbn");
    }
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css?family=Damion|Muli:400,600");
body {
  font-family: "Muli", sans-serif;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/geometry2.png");
}
h2 {
  font-family: "Damion", cursive;
  font-weight: 400;
  color: #4caf50;
  font-size: 35px;
  text-align: center;
  position: relative;
}
h2:before {
  position: absolute;
  content: "";
  width: 100%;
  left: 0;
  top: 22px;
  background: #4caf50;
  height: 1px;
}
h2 i {
  font-style: normal;
  background: #fff;
  position: relative;
  padding: 10px;
}
:focus {
  outline: none;
}

/* necessary to give position: relative to parent. */
input[type="text"] {
  font: 15px/24px "Muli", sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
}

:focus {
  outline: none;
}

.col-3 {
  float: left;
  width: 27.33%;
  margin: 40px 3%;
  position: relative;
} /* necessary to give position: relative to parent. */
input[type="text"] {
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
}

.effect-1,
.effect-2,
.effect-3 {
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
}

.effect-1 ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #4caf50;
  transition: 0.4s;
}
.effect-1:focus ~ .focus-border {
  width: 100%;
  transition: 0.4s;
}
</style>