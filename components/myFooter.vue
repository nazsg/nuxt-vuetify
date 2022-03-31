<template>
  <footer>
    <p>&copy; {{ new Date().getFullYear() }} Resources and Such...</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: rgb(182, 179, 179);
  border-top: 2px solid rgb(146, 143, 143);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 2px;
  font-family: 'Stardos Stencil', cursive;
  // font-family: 'Allerta Stencil', sans-serif;;

  p {
    padding: 0px;
    margin: 0;
  }
}
</style>
