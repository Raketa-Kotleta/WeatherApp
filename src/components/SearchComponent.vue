<template>
  <form action="" class="form">
    <h1 class="form-title" @click="isShown = 'search-show'">Hello, friend!</h1>
    <input type="search" class="form-search" :class="isShown" placeholder="Write your city..." >

  </form>
</template>

<script>
export default {
  name: "SearchComponent",
  data(){
    return{
      isShown: "search-unshow",
    }
  }
}
</script>

<style scoped>
.form{
  text-align: center;
  position: relative;
}
.form-title{
  font-size: 5.5rem;
  margin: 0;
}
.form-subtitle{
  font-size: 3rem;
  margin: 0 0 30px 0;
}
.form-search{
  width: 90vw;
  max-width: 630px;
  height: 75px;
  border-radius: 50px;
  padding: 0 50px;
  font-size: 1.4rem;
  outline: none;
}
.search-unshow{
  opacity: 0;
  transform: translateY(70px);
  transition: 1s;
}
.search-show{
  transition: 1s;
  opacity: 1;
  transform: translateY(0px);
}
</style>