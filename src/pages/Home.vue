<template>
  <div class="columns is-mobile">
    <div class="column is-three-fifths is-offset-one-fifth">
      <h1 style="text-align: left; font-size: 150%;">Home</h1>
      
      <div class="card" v-for="data in financelist" v-bind:key="data">
        <div class="card-content">
          <div class="columns">
            <div class="column is-one-fifth">
              <img src="download.png" width="60" height="100" />
            </div>
            <div class="column" @click="list(data.name)">
              <div class="columns">
                <div class="column">
                  <p class="title" style="text-align:left;">{{data.name}}</p>
                </div>
                <div class="column">
                  <p style="text-align:right;">{{ data.count}}</p>
                </div>
              </div>

              <div class="content">
                <p style="text-align:left;">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index'
export default {
  name: "Home",
  data(){
      return {
          financeData : this.$store.state.finance
      }
  },
  components: {},
  methods: {
    list(name){
        router.push(`/list/${name}`)
    }
  },
  beforeMount() {
    this.$store.dispatch("fetchReksadana");
    this.$store.dispatch("fetchSbn");
    this.$store.dispatch("fetchFinance");
    this.$store.dispatch("fetchConventionalOsf");
    this.$store.dispatch("fetchProductiveInvoice");
    console.log('finance:',this.$store.state.finance)
  },
   computed: {
    reksadanaLength() {
      return this.$store.state.reksadana.length;
    },
    conventionalOsfLength() {
        
      return this.$store.state.conventionalOsf.length;
    },
    conventionalInvoiceLength() {
      return this.$store.state.conventionalInvoice.length;
    },
    productiveInvoiceLength() {
      return this.$store.state.productiveInvoice.length;
    },
    sbnLength() {
      return this.$store.state.sbn.length;
    },
    financelist() {
      
     
      return this.$store.state.finance;
    },
  },
};
</script>