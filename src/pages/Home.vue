<template>
    <div>
        <h1>Home</h1>
        <div v-for="data in financeData " v-bind:key="data">
            <p>{{data.name}}</p>
            <p>iorem ipsum</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data(){
        return {
            financeData : this.financelist
        }
    },
    components: {

    },
    computed:{
        reksadanaLength(){
            return this.$store.reksadana.length
        },
        conventionalOsfLength(){
            return this.$store.conventionalOsf.length
        },
        conventionalInvoiceLength(){
            return this.$store.conventionalInvoice.length
        },
        productiveInvoiceLength(){
            return this.$store.productiveInvoice.length
        },
        sbnLength(){
            return this.$store.sbn.length
        },
        financelist(){
            return this.$store.finance
        }
    },
    created(){
        this.$store.dispatch("fetchReksadana")
        this.$store.dispatch("fetchSbn")
        this.$store.dispatch("fetchFinance")
        this.$store.dispatch("fetchConventionalOsf")
        this.$store.dispatch("fetchProductiveInvoice")
    }
}
</script>