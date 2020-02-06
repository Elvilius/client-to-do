<template>
  <div id="app" class="container">
    <ToDoList/>
  </div>
</template>

<script>
import ToDoList from './components/to-do/ToDoList'

export default {
  name: "app",
  components: { ToDoList }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0% auto;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
</style>