<template>
<div class="box FullListDebitBill">

  <div class="companywise-body">
     <div class="one-company" v-if="!nodbtbill" v-for="dbill in dbills">
      <!-- v-for="company in companies" -->
      <input type="hidden">
      <span class="text title is-6">{{dbill.debit_no}}</span>
			<span class="text title is-6">{{dbill.debit_date}}</span>
			<span class="text title is-6">{{dbill.client_address.client.name}}</span>
			<span class="text title is-6">{{dbill.description}}</span>
			<span class="text title is-6">{{dbill.final_amount}}</span>
			<a class="button is-danger is-outlined a-tag login" @click="deleteDebit(dbill.debit_no)">Del</a>
			<a class="button is-success is-outlined a-tag login" @click="diffPage(dbill.debit_no)">View</a>
		</div>
		<div class="box" v-if="nodbtbill">
			<p class="title">No Debit Bill</p>
		</div>
  </div>

</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'FullListDebitBill',
  data: () => ({
    cid: null,
    yid: null,
    mid: null,
    nodbtbill: false,
    dbills: [],
    search: ''
  }),
  created () {
    this.getToken()
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    this.getDebitList()
  },
  methods: {
    deleteDebit (id) {
      let url = `http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/deleteDebitPrimary/` + id
      axios.delete(url)
        .then(response => {
          this.getDebitList()
        })
    },
    getDebitList () {
      axios.get(`http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/debitList`)
        .then(response => {
          this.dbills = response.data
          if (this.dbills === 'No Debit Bill') {
            this.nodbtbill = true
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    diffPage (id) {
      let url = '/financial-month/' + this.cid + '/year/' + this.yid + '/month/' + this.mid + '/details/' + id
      this.$router.push(url)
    },
    getToken () {
      var token = window.localStorage.getItem('token')
      if (token != null) {
        return true
      } else {
        this.$router.push('/')
      }
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

#search {
  padding: 1rem;
}

</style>
