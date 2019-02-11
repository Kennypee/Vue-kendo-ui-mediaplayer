<template>
  <div class="hello">
    <h1>Kendo ui Mediaplayer demo</h1>
    <div id="vueapp" class="vue-app">
      <div class="col-xs-12 col-sm-6 example-col">
        <div class="h-100 row align-items-center">
        <kendo-mediaplayer
          style="height: 500px; margin: 150px"
          :auto-play="true"
          :navigatable="true"
          :media-title="'Kendo ui Media player demo in Vue.js'"
          :media-source="'https://www.youtube.com/watch?v=tc3xhD24iTU'"
        ></kendo-mediaplayer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";
export default {
  name: "Mediaplayer",

};
</script>
