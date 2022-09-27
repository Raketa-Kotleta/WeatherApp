<template>
  <footer>
    <span class="date">06:12 AM - Monday, 31 March 2020</span>
    <span class="region">San Francisco,USA</span>
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
</style>