<template>
  <div id="ClientListModal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Client Details</p>
        </header>
        <section class="modal-card-body">
          <div class="">
            <div>

              <div class="companywise-body">
                <div class="one-company">
                  <!-- v-for="company in companies" -->
                  <input type="hidden">
                  <span class="text title is-4">Client1</span>&nbsp&nbsp&nbsp
                  <a class="button is-success is-outlined a-tag login">Edit</a>&nbsp&nbsp&nbsp
                  <a class="button is-success is-outlined a-tag login">Remove</a>
                </div>
                <hr>
                <div class="one-company">
                  <!-- v-for="company in companies" -->
                  <input type="hidden">
                  <span class="text title is-4">Client2</span>&nbsp&nbsp&nbsp
                  <a class="button is-success is-outlined a-tag login">Edit</a>&nbsp&nbsp&nbsp
                  <a class="button is-success is-outlined a-tag login">Remove</a>
                </div>
              </div>

            </div>
            <hr>
          </div>

        </section>
        <footer class="modal-card-foot">
          <a class="button" v-on:click="$emit('close')">Close</a>
        </footer>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ClientListModal',
  data: () => ({

  })
}
</script>
<style lang="scss">
</style>
