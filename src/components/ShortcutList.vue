<template>
  <div class="ShortcutList box">
    <div class="companywise-body">
      <div class="one-company">
        <!-- v-for="company in companies" -->
        <input type="hidden">
        <span class="text title is-5">Shortcut Name -</span>
        <span class="text title is-5">Service Code -</span>
        <span class="text title is-5">Price</span>
        <!-- <a class="button is-danger is-outlined a-tag login">Delete</a> -->
        <!-- <a class="button is-success is-outlined a-tag login">Edit</a> -->
				<ShortcutModal></ShortcutModal>
      </div>


    </div>

  </div>
</template>
<script>
import ShortcutModal from '@/components/ShortcutModal'
export default {
  name: 'ShortcutList',
  components: {
    ShortcutModal
  },
  data: () => ({

  })
}
</script>
<style lang="scss">
.ShortcutList {

	max-width: 100%;

	.company-wise {
		padding: 1rem;
		border-bottom: solid 1px #ddd;
	}

	.companywise-body {
		padding: 0.3rem;
	}

	.one-company {
		width: 100%;
		padding: 1rem;
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
