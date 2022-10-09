<template>
  <footer>
    <span class="date translate-right">06:12 AM - Monday, 31 March 2020</span>
    <span class="region translate-left">San Francisco,USA</span>
  </footer>
</template>

<script>
export default {
  name: "CommonFooter"
}
</script>

<style scoped>
footer{
  padding: 60px;
  display: flex;
  justify-content: space-between;
}
footer>span{
  height: 60px;
  line-height: 60px;
}
.date{
 animation-duration: 1.32s;
}
.region{
  animation-duration: 1.32s;
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