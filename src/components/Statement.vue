<template>
<div class="Statement">
    <div class="box">
    <h2 class="title header">Statement</h2>

    <span class="select is-fullwidth">
          <select v-validate="'required|not_in:null'" name="statement" @change="">
            <option value=null>Select Dropdown</option>
            <option value=null>Statement 1</option>
            <!-- <option v-for="state in states" :value="state">{{ state }}</option> -->
          </select>
        </span>

    <a class="button is-info">Generate</a>
    <div class="help is-danger" v-show="errors.has('statement')">
      {{errors.first('statement')}}
    </div>

  </div>
</div>
</template>
<script>
export default {
  name: 'Statement',
  data: () => ({

  })
}
</script>
<style lang="scss">
.Statement{
  .box{
    .is-info{
      margin: 1rem;
      margin-bottom: 0rem;
    }
  }
}
</style>
