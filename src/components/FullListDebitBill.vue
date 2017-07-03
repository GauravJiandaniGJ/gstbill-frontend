<template>
<div class="box FullListDebitBill">

  <div class="companywise-body">
    <div class="one-company">
      <!-- v-for="company in companies" -->
      <input type="hidden">
      <span class="text title is-4">Bill No.</span>&nbsp&nbsp
      <span class="text title is-4">Bill Date</span>&nbsp&nbsp
      <span class="text title is-4">Bill Description</span>&nbsp&nbsp
      <span class="text title is-4">Bill Price</span>&nbsp&nbsp
			<a class="button is-danger is-outlined a-tag login">Delete</a>
      <a class="button is-success is-outlined a-tag login">View</a>
    </div>
  </div>

</div>
</div>
</template>
<script>
export default {
  name: 'FullListDebitBill',
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
		padding: 1.5rem;
	}

	.one-company {
		width: 100%;
		padding: 0.5rem;
		border-bottom: solid 1px #ddd;
		.text {
			padding-left: 5px;
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
