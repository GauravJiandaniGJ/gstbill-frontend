<template lang="html">
  <div class="admin-student-preview">

    <a @click="hidden = false" class="is-success view-profile" v-if="hidden"> Show </a>

    <div class="modal is-active" v-if="!hidden">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Preview</p>
          <button class="delete" @click="hidden=true"></button>
        </header>
        <section class="modal-card-body">

          <h2 class="title">Title</h2>
          <pre>{{sendData}}</pre>

        </section>
        <footer class="modal-card-foot">
          <!-- <a class="button" @click="hidden=false">Cancel</a> -->
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unique-modal',
  data () {
    return {
      hidden: true
    }
  },
  props: {
    sendData: {
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
