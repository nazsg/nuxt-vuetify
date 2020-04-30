<template>
  <footer>
    <p>
      &copy; {{ $moment().year() }} Resources and Such...
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    padding: 0px;
    margin: 0;
  }
}
</style>