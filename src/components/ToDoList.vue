<template>
    <div>
        <ul><ToDoItem/></ul>
        <ul><ToDoItem/></ul>
        <ul><ToDoItem/></ul>
        <ul><ToDoItem/></ul>
        <ul><ToDoItem/></ul>
    </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem';

export default {
  name: 'app',
  components: {
    ToDoItem,
  }
}
</script>