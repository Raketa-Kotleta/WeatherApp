<template>
  <nav>
    <a href="" class="logo-link translate translate-right">WeatherNow™</a>
    <ul class="navbar translate translate-left">
      <li class="nav-item"><button class="nav-search-btn"><img src="../assets/icon-search.svg" alt="1"></button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>


.logo-link{
  font-size: 1.6rem;
  color:white;
  text-decoration: none;
  animation-duration: 1.33s;
}
ul{
  animation-duration: 1.1s;
}
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
}
.navbar{
  list-style: none;
}
.nav-search-btn{
  background-color: transparent;
  padding: 8px;
  border:none;
}

.nav-search-btn img{
  height: 30px !important;
  width: 30px !important;
  color:white;
}
.translate-left{
  animation-name: left-translateX;
}
.translate-right{
  animation-name: right-translateX;
}
@keyframes left-translateX {
  0%{
    transform: translateX(400px);
    opacity: 0;
  }
  100%{
    transform: translateX(0px);
    opacity: .9;
  }
}
@keyframes right-translateX {
  0%{
    transform: translateX(-400px);
    opacity: 0;
  }
  100%{
    transform: translateX(0px);
    opacity: .9;
  }
}

</style>