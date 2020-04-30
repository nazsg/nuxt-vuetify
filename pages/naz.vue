<template>
  <div class="wrapper">
    <div class="content">
      <appHeader />

    <v-parallax height="550"
      src="https://panteli.biz/static/coffee.jpg">
    </v-parallax>     
    <v-parallax height="550"
      src="https://panteli.biz/static/cup-smoke.jpg">
    </v-parallax>     

    </div>
    <footer>
      <p>
        &copy; {{ $moment().year() }}
      </p>
    </footer>
  </div>
</template>

<style>
*, p {
  margin: 0;
  padding: 0;
}
html {
  overflow: auto;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex: 1 0 auto;
}
footer {
  background-color: #868585;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>