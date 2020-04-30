<template>
  <nav class="nav-area">
    <ul>
      <li><a href="#">Home</a></li>
      <li class="drop-down"><a href="#">Projects</a>
        <ul>
          <li><a href="#">NoRobot</a></li>
          <li><a href="#">Rest Sample</a></li>
          <li><a href="#">Holiday</a></li>
        </ul>
      </li>
    </ul>
  </nav>  
</template>

<style lang="scss" scoped>
$col1 : #000;
$col2 : #262626;

.nav-area {
  font-family: Arial, Helvetica, sans-serif;

  ul {
    background-color: $col1;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    // -ms-flex-wrap: wrap;
    // flex-wrap: wrap;

    li {
      width: 20%;

      &:hover > ul {
        display: flex;
      }

      > ul {
        display: none;
        flex-direction: column;

        li {
          width: 100%;
        }
      }
    }
  }

  a {
    text-transform: uppercase;
    display: block;
    background: $col1;
    padding: 15px;
    color: white;
    text-decoration: none;
    text-align: center;

    &:hover {
      background-color: #e84393;
      color: white;
    }
  }

  .drop-down {
    position: relative;
    > a:after {
      content: "+";
      padding: 5px;
    }
    li {
       a {
        // display: block;
        background: #000;
        color: #ffffff;

        &:hover {
          background: #e84393;
        }
      }
    }
  }
  .drop-down ul  {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    width: 100%;
  }
}


@media (max-width:600px) {
    .nav-area ul li {
        width: 100%;
    }
}
</style>