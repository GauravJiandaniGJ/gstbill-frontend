<template>
  <div class="box PendingDebitBills">

    <div class="companywise-body">
      <div class="one-company" v-if="!nodbtbill" v-for="dbill in dbills">
        <!-- v-for="company in companies" -->
        <input type="hidden">
  			<span class="text title is-6">{{dbill.debit_no}}</span>
  			<span class="text title is-6">{{dbill.debit_date}}</span>
  			<span class="text title is-6">{{dbill.client_address.client.name}}</span>
  			<span class="text title is-6">{{dbill.description}}</span>
  			<span class="text title is-6">{{dbill.final_amount}}</span>
  			<a class="button is-danger is-outlined a-tag login">Del</a>
  			<a class="button is-success is-outlined a-tag login">View</a>
  		</div>
  		<div class="box" v-if="nodbtbill">
  			<p class="title">No Debit Bill</p>
  		</div>
    </div>

    <!-- <UniqueModal :key="1" :sendData="sendData"></UniqueModal> -->
  </div>
</template>
<script>
import UniqueModal from '@/components/UniqueModal'
import axios from 'axios'
export default {
  name: 'PendingDebitBills',
  components: {
    UniqueModal
  },
  data: () => ({
    sendData: {
      name: 'sasdasd',
      age: 22,
      details: 'sadads'
    },
    cid: null,
    yid: null,
    mid: null,
    nodbtbill: false,
    dbills: []
  }),
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    axios.get(`http://localhost:8000/api/company/` + this.cid + `/year/` + this.yid + `/month/` + this.mid + `/debitListPending`)
      .then(response => {
        this.dbills = response.data
        console.log(this.dbills)
        if (this.dbills === 'No Debit Bill') {
          this.nodbtbill = true
        }
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
<style lang="scss">
.PendingDebitBills {
	max-width: 100%;

	.companywise {
		padding: 1rem;
		border-bottom: solid 1px #ddd;
	}

	.companywise-body {
		padding: 0.2rem;
	}

	.one-company {
		width: 100%;
		padding: 0.7rem;
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
