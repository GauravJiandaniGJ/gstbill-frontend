<template>
<div id="ClientListModal">
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Client Details</p>
      </header>
      <section class="modal-card-body">
        <div class="columns" v-for="client in company.client">
          <div class="column" >
            <span class="text title is-4">{{client.name}}</span>&nbsp&nbsp

            <EditClientName :key="1" :clientData="client"></EditClientName>


          </div>
          <hr>
        </div>

      </section>
      <footer class="modal-card-foot">
        <a class="button is-info" @click="$emit('close')">Close</a>
      </footer>
    </div>
  </div>
</div>
</div>
</template>
<script>
import EditClientName from '@/components/EditClientName'
export default {
  name: 'ClientListModal',
  components: {
    EditClientName
  },
  data: () => ({
    sendData: {
      name: 'gaurav',
      age: 22
    }
  }),
  props: {
    company: {
      required: true
    }
  }
  // created () {
  //   axios.get(`http://localhost:8000/api/company/dashboard`)
  //     .then(response => {
  //       // JSON responses are automatically parsed.
  //       this.data = response.data
  //       console.log(response.data)
  //     })
  //     .catch(e => {
  //       this.errors.push(e)
  //     })
  // }
}
</script>
<style lang="scss">
</style>
