<template lang="html">
  <div class="eligibility-criteria-box">
    <a class="" @click="hidden=false" v-if="hidden">Edit</a>&nbsp&nbsp&nbsp
    <a class="" @click="hidden=true" v-if="!hidden">Hide</a>
    <div class="box" v-if="!hidden">

    <h3 class="title">Hello</h3>
    <a class="button is-success is-outlined a-tag login">Edit</a>&nbsp&nbsp&nbsp
    <a class="button is-danger is-outlined a-tag login">Remove</a>


    </div>
  </div>
</template>

<script>
export default {
  name: 'box',
  data () {
    return {
      hidden: true
    }
  },
  props: {
    sendData: {
      required: true
    }
  },
  created () {
    console.log(this.sendData)
  }
}
</script>

<style lang="scss">


</style>
