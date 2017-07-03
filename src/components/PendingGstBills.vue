<template>
  <div class="box PendingGstBills">
    <div class="companywise-body">
      <div class="one-company">
        <!-- v-for="company in companies" -->
        <input type="hidden">
        <span class="text title is-6">123</span>
        <span class="text title is-6">24/07/2017</span>
        <span class="text title is-6">GST Billing </span>
        <span class="text title is-6">200000</span>
        <!-- <a class="button is-success is-outlined a-tag login">View</a> -->
				<!-- <UniqueModal :key="1" :sendData="sendData"></UniqueModal> -->
      </div>
    </div>

  </div>
</template>
<script>
// import UniqueModal from '@/components/UniqueModal'
export default {
  name: 'PendingDebitBills',
  // components: {
  //   UniqueModal
  // },
  data: () => ({
    // sendData: {
    //   name: 'sasdasd',
    //   age: 22,
    //   details: 'sadads'
    // }
  })
}
</script>
<style lang="scss">
.PendingGstBills {
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
