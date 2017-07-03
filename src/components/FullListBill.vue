<template>
<div class="box FullListFill">

  <div class="companywise-body">
    <div class="one-company">
      <!-- v-for="company in companies" -->
      <input type="hidden">
			<span class="text title is-6">123</span>
			<span class="text title is-6">24/07/2017</span>
			<span class="text title is-6">Shipment of 1 X 20' GST Bill from Mundra to Haiphong Pending</span>
			<span class="text title is-6">200000</span>
		</div>
  </div>

</div>
</div>
</template>
<script>
export default {
  name: 'FullListBill',
  data: () => ({

  })
}
</script>
<style lang="scss">
.FullListDebitBill {

	max-width: 100%;

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
