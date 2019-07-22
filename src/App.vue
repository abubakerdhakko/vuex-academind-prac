<template>
<div id="app">
<StudentsComponent></StudentsComponent>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
        products: [
                {name: 'Banana Skin', price: 20},
                {name: 'Shiny Star', price: 40},
                {name: 'Green Shells', price: 60},
                {name: 'Red Shells', price: 80}
            ]
    }
  }
}
</script>

<style>

</style>
