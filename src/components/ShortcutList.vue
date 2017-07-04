<template>
  <div class="ShortcutList box">
    <div class="companywise-body">

      <div class="one-company columns" v-for="shortcut in shortcuts">
        <!-- v-for="company in companies" -->

        <input type="hidden">
        <div class="column"><span class="text title is-5" >{{shortcut.description}}</span></div>
        <div class="column"><span class="text title is-5" >{{shortcut.service_code}}</span></div>
        <div class="column"><span class="text title is-5" >{{shortcut.price}}</span></div>
        <!-- <a class="button is-danger is-outlined a-tag login">Delete</a> -->
        <!-- <a class="button is-success is-outlined a-tag login">Edit</a> -->
        <ShortcutModal :key="shortcut.id" :sendData="shortcut"></ShortcutModal>
      </div>

    </div>

  </div>
</template>
<script>
import ShortcutModal from '@/components/ShortcutModal'
import axios from 'axios'
export default {
  name: 'ShortcutList',
  components: {
    ShortcutModal
  },
  data: () => ({
    shortcuts: [],
    sendData: {
      id: null,
      description: '',
      service_code: null,
      price: null
    }
  }),
  created () {
    this.cid = this.$route.params.cid
    this.yid = this.$route.params.yid
    this.mid = this.$route.params.mid
    axios.get(`http://localhost:8000/api/shortcut/index`)
      .then(response => {
        this.shortcuts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
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
