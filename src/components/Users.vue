<template>
  <div id="Users">
<div class="box company-wise-listing">

			<div class="company-wise head">
				<a class="button is-success is-outlined a-tag login" @click="openModal">Add New</a>
				<h2 class="title">Users List</h2>
			</div>
		<div class="companywise-body">
			<div class="one-company">
				<!-- v-for="company in companies" -->
				<input type="hidden">
				<span class="text title is-4">User Name</span>
				<a class="button is-success is-outlined a-tag login">Remove</a>
			</div>
		</div>

		<AddUser v-if="usermodal" @close="usermodal = false"></AddUser>
</div>
  </div>
</template>
<script>
import AddUser from '@/components/AddUser'
export default {
  name: 'Users',
  components: {
    AddUser
  },
  data: () => ({
    usermodal: false
  }),
  methods: {
    openModal () {
      this.usermodal = true
    }}
}
</script>
<style lang="scss">
.company-wise-listing {

	max-width: 500px;

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
