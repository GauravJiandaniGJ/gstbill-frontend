<template lang="html">
  <div class="EditClientName eligibility-criteria-box">
    <div class="but">
    <a class="button is-info is-outlined a-tag login" @click="hidden=false" v-if="hidden">Edit</a>&nbsp&nbsp&nbsp
    <a class="button is-info is-outlined a-tag login" @click="hidden=true" v-if="!hidden">Hide</a>
    </div>
    <div class="box" v-if="!hidden">

      <div class="columns is-multiline">
        <div class="column">
          <div class="field">
            <label class="label">Client Name</label>
            <p class="control">
              <input v-validate="'required'" name="cname" placeholder="Name" type="text" class="input">
            </p>
            <div v-show="errors.has('description')" class="help is-danger">
              {{ errors.first('description') }}
            </div>
          </div>
        </div>
      </div>

    <a class="button is-success is-outlined a-tag login">Edit</a>&nbsp&nbsp&nbsp
    <a class="button is-danger is-outlined a-tag login">Remove</a>


    </div>
  </div>
</template>

<script>
export default {
  name: 'EditClientName',
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
.EditClientName{
  .but{
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;
  }
}

</style>
