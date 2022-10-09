<template>
  <div id="canvas">
    <video  class="weather-canvas-screen" autoplay  loop>
      <source src="../assets/WeatherVideos/rain.mp4">
    </video>
    <div class="content">
        <div class="weather-info weather-info-now"></div>
        <div class="weather-info weather-info-details">
          <div class="weather-details-wrapper">
            <section>
              <h2 class="section-title">San Francisco</h2>
            </section>
            <section>
              <h2 class="section-title">Weather Details</h2>
              <ul class="weather-characteristics">
                <li class="characteristic">
                  <span class="characteristic-name"></span>
                  <span class="characteristic-value"></span>
                </li>
                <li class="characteristic">
                  <span class="characteristic-name"></span>
                  <span class="characteristic-value"></span>
                </li>
                <li class="characteristic">
                  <span class="characteristic-name"></span>
                  <span class="characteristic-value"></span>
                </li>
                <li class="characteristic">
                  <span class="characteristic-name"></span>
                  <span class="characteristic-value"></span>
                </li>
              </ul>
            </section>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCast"
}
</script>

<style scoped>
#canvas{
  position: fixed;
  color: black;
}
.weather-canvas-screen{
  position: fixed;
  width: 100%;
}
.content{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
}
.weather-info{
  height: 100%;

}
.weather-info-now{
  width: 75%;
  background-color: transparent;
}
.weather-info-details{
  width: 25%;
  background-color: white;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  overflow: auto;
}
.weather-details-wrapper{
  padding: 16px 32px;
}
.section-title{
  font-size: 1.4rem;
}
.weather-info-details section{
  border-bottom: 1px solid lightgrey;
}
</style>