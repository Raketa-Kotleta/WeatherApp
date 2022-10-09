<template>
    <div id="main">
      <div class="container">
        <nav-bar></nav-bar>
        <div class="component-container">
          <div :is="showingComp"></div>
        </div>
        <common-footer></common-footer>
      </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import SearchComponent from "@/components/SearchComponent";
import CommonFooter from "@/components/CommonFooter";
export default {
  name: "FlyingMask",
  components: {NavBar, SearchComponent, CommonFooter},
  data(){
    return{
      showingComp: "SearchComponent",
    }
  },
}
</script>

<style scoped>

#main{
  background-color: #1c1c1c;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.component-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

</style>