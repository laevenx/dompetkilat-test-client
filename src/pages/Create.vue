<template>
  <div class="column is-half is-offset-one-quarter">
     <select v-model="option">
      <option>Type Select</option>
      <option
        v-for="data in options"
        v-bind:key="data"
        v-bind:value="data.value"
      >
        {{ data.text }}
      </option>
    </select>
    <div v-if="option == 'ConventionalOsf'">
     
      <section>
        <b-field>
          <b-input v-model="name" placeholder="Name" type="text"></b-input>
        </b-field>

        <b-field>
          <b-input
            v-model="amount"
            placeholder="Amount"
            type="number"
           
          >
          </b-input>
        </b-field>

        <b-field>
          <b-input
            v-model="tenor"
            placeholder="Tenor"
            type="number"
            required
            validation-message="Only lowercase is allowed"
           
          >
          </b-input>
        </b-field>

        <b-field>
          <b-input v-model="grade" placeholder="Grade" type="text"></b-input>
        </b-field>

        <b-field>
          <b-input
            v-model="rate"
            type="number"
            placeholder="Rate"
          >
          </b-input>
        </b-field>
      </section>
    </div>
   

    <div v-if="option == 'ConventionalInvoice'">
      <b-field>
          <b-input v-model="name" placeholder="Name" type="text"></b-input>
        </b-field>
      <b-field>
          <b-input
            v-model="amount"
            placeholder="Amount"
            type="number"
           
          >
          </b-input>
        </b-field>
      <b-field>
          <b-input
            v-model="tenor"
            placeholder="Tenor"
            type="number"
            required
            validation-message="Only lowercase is allowed"
           
          >
          </b-input>
        </b-field>
      <b-input v-model="grade" placeholder="Grate" type="text" />
     <b-field>
          <b-input
            v-model="rate"
            type="number"
            placeholder="Rate"
          >
          </b-input>
        </b-field>
    </div>
    <div v-if="option == 'ProductiveInvoice'">
     <b-field>
          <b-input v-model="name" placeholder="Name" type="text"></b-input>
        </b-field>
      <b-field>
          <b-input
            v-model="amount"
            placeholder="Amount"
            type="number"
           
          >
          </b-input>
        </b-field>
       <b-field>
          <b-input
            v-model="grade"
            type="text"
            placeholder="grade"
          >
          </b-input>
        </b-field>
      <b-field>
          <b-input
            v-model="rate"
            type="number"
            placeholder="Rate"
          >
          </b-input>
        </b-field>
    </div>
    <div v-if="option == 'Reksadana'">
      <b-field>
          <b-input v-model="name" placeholder="Name" type="text"></b-input>
        </b-field>
      <b-field>
          <b-input
            v-model="amount"
            placeholder="Amount"
            type="number"
           
          >
          </b-input>
        </b-field>
      <b-input v-model="returnReksa" type="text" />
    </div>
    <div v-if="option == 'Sbn'">
      <b-field>
          <b-input v-model="name" placeholder="Name" type="text"></b-input>
        </b-field>
      <b-field>
          <b-input
            v-model="amount"
            placeholder="Amount"
            type="number"
           
          >
          </b-input>
        </b-field>
      <b-field>
          <b-input
            v-model="tenor"
            placeholder="Tenor"
            type="number"
            required
            validation-message="Only lowercase is allowed"
           
          >
          </b-input>
        </b-field>
      <b-field>
          <b-input v-model="type" placeholder="type" type="text"></b-input>
        </b-field>
    <b-field>
          <b-input
            v-model="rate"
            type="number"
            placeholder="Rate"
          >
          </b-input>
        </b-field>
    </div>
    <b-button @click="submit">Create</b-button>
  </div>
</template>
<script>
import router from '../router';
export default {
  name: "Create",
  data() {
    return {
      option: "ConventionalOsf",
      name: "",
      amount: 0,
      rate: 0,
      grade: "",
      tenor: 0,
      type: "",
      returnReksa: 0,
      options: [
        { text: "ConventionalOsf", value: "ConventionalOsf" },
        { text: "ConventionalInvoice", value: "ConventionalInvoice" },
        { text: "ProductiveInvoice", value: "ProductiveInvoice" },
        { text: "Reksadana", value: "Reksadana" },
        { text: "Sbn", value: "Sbn" },
      ],
    };
  },
  methods: {
    submit() {
      let payload = {};
      switch (this.option) {
        case "ConventionalOsf":
          payload = {
            option: "ConventionalOsf",
            name: this.name,
            amount: Number(this.amount),
            tenor: Number(this.tenor),
            grade: this.grade,
            rate: Number(this.rate),
          };
          break;

        case "ConventionalInvoice":
          payload = {
            option: "ConventionalInvoice",
            name: this.name,
            amount: Number(this.amount),
            tenor: Number(this.tenor),
            grade: this.grade,
            rate: Number(this.rate),
          };
          break;

        case "ProductiveInvoice":
          payload = {
            option: "ProductiveInvoice",
            name: this.name,
            amount: Number(this.amount),
            grade: this.grade,
            rate: Number(this.rate),
          };
          break;

        case "Reksadana":
          payload = {
            option: "Reksadana",
            name: this.name,
            amount: Number(this.amount),
            return: Number(this.returnReksa),
          };
          break;

        case "Sbn":
          payload = {
            option: "Sbn",
            name: this.name,
            amount: Number(this.amount),
            tenor: Number(this.tenor),
            rate: Number(this.rate),
            type: this.type,
          };
          break;
      }
      this.$store.commit('SET_CREATEDATA', payload)
      this.$store.dispatch("create");
    },
    changeOption(input) {
      this.name = "";
      this.amount = 0;
      this.rate = 0;
      this.tenor = 0;
      this.grade = "";
      this.type = "";
      this.option = input;
    },
  },
  components: {},
  created(){
    if (!localStorage.getItem('token')){
      router.push('/login')
    }
  }
};
</script>