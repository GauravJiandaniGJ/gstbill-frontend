<template>
<div class="box FullListFill" id="fulllist">

	<div class="companywise-body">
    <div class="one-company" v-if="!nodbtbill" v-for="gbill in gbills" id="onecompany">
      <!-- v-for="company in companies" -->
      <input type="hidden">
			<span class="text title is-6">{{gbill.bill_no}}</span>&nbsp
			<span class="text title is-6">{{gbill.bill_date}}</span>&nbsp
			<span class="text title is-6">{{gbill.client_address.client.name}}</span>
			<span class="text title is-6">{{gbill.description}}</span>
			<span class="text title is-6">{{gbill.final_amount}}</span>&nbsp
      <a class="button is-success is-outlined a-tag login" @click="diffPage(gbill.bill_no)">View</a>
      <a class="button is-danger is-outlined a-tag login" @click="deleteBill(gbill.bill_no)">Del</a>
		</div>
		<div class="box" v-if="nodbtbill">
			<p class="title">No Bill</p>
		</div>
  </div>

</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'FullListBill',
  data: () => ({
    cid: null,
    yid: null,
    mid: null,
    gbills: [],
    nodbtbill: false
  }),
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    this.getFullList()
  },
  methods: {
    getFullList () {
      axios.get(`http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/billList`)
        .then(response => {
          this.gbills = response.data
          if (this.gbills === 'No Bill') {
            this.nodbtbill = true
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    deleteBill (id) {
      console.log(id)
      let url = `http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/bill/deleteBillDetail/` + id
      axios.delete(url)
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
.FullListDebitBill {

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

#onecompany {
    width: 100%;
    padding: 0.7rem;
		padding-left: 0rem;
		padding-right: 0rem;
    border-bottom: solid 1px #ddd
}

#fulllist {

}

</style>
