<template>
  <div class="jumbotron">
    <h1 class="display-4">Welcome</h1>
    <br />
    <img src="../assets/images/logo.png" class="img-fluid" alt="" />

    <p class="lead">Click on start to play</p>
    <hr class="my-4" />
    <h3>Rules</h3>
    <p>When a light is pressed, this light and the four adjacent lights are toggled, i.e., they are switched on if they were off, and switched off otherwise.</p>
    <p>The purpose of the game is to switch all the lights off.</p>
    <p>Red ==> Off</p>
    <p>Green ==> On</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">
      <router-link to="/game">Start</router-link>
    </a>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    console.log(this.box);
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
.jumbotron {
  background-color: #fff;
}
.btn-primary {
  color: #fff;
  background-color: #41b883;
  border-color: #35495e;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>
