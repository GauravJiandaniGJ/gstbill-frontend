<template>
  <div class="box PendingGstBills">

    <div class="companywise-body">
      <div class="one-company" v-if="!nodbtbill" v-for="gbill in gbills">
        <!-- v-for="company in companies" -->
        <input type="hidden">
  			<span class="text title is-6">{{gbill.debit_no}}</span>
  			<span class="text title is-6">{{gbill.debit_date}}</span>
  			<span class="text title is-6">{{gbill.client_address.client.name}}</span>
  			<span class="text title is-6">{{gbill.description}}</span>
  			<span class="text title is-6">{{gbill.final_amount}}</span>
  			<a class="button is-danger is-outlined a-tag login" @click="deleteBill(gbill.bill_no)">Del</a>
  			<a class="button is-success is-outlined a-tag login" @click="diffPage(gbill.bill_no)">View</a>
  		</div>
  		<div class="box" v-if="nodbtbill">
  			<p class="title">No GST Bill Pending! You are up to date!</p>
  		</div>
    </div>

  </div>
</template>
<script>
import HTTP from '@/packages/HTTP'
export default {
  name: 'PendingDebitBills',
  data: () => ({
    cid: null,
    yid: null,
    mid: null,
    nodbtbill: false,
    gbills: []
  }),
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    this.getFullList()
  },
  methods: {
    getFullList () {
      HTTP.get(`company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/billListPending`)
      .then(response => {
        this.gbills = response.data
        console.log(response.data)
        if (this.gbills === 'No Bill') {
          this.nodbtbill = true
        }
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    deleteBill (id) {
      let url = `company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/deleteBillPrimary/` + id
      HTTP.delete(url)
        .then(response => {
          this.getFullList()
        })
    },
    diffPage (id) {
      let url = '/financial-month/' + this.cid + '/year/' + this.yid + '/month/' + this.mid + '/details/gst/' + id
      this.$router.push(url)
    }
  }
}
</script>
<style lang="scss">
.PendingGstBills {

  	max-width: 100%;
    padding-left: 0rem;
    padding-right: 0rem;

  	.company-wise {
  		padding: 1rem;
  		border-bottom: solid 1px #ddd;
  	}

  	.companywise-body {
  		padding: 0.2rem;
  	}

  	.one-company {
  		width: 100%;
  		padding: 0.7rem;
      padding-bottom: 2.2rem;
      padding-left: 0rem;
      padding-right: 0rem;
  		border-bottom: solid 1px #ddd;
  		.text {
  			padding-left: 7px;
  		}
  	}

  	.login {
  		margin-left: 0.3rem;
  	}

  	.a-tag {
  		float: right;
  	}

  	.allow-btn {
  		padding-left: 1rem;
  		padding-right: 1rem;
  	}

}
</style>
