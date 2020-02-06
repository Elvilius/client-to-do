<template>
  <form class="todo-form">
    <input
      type="text"
      class="todo-input-name"
      placeholder="What needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <div v-for="(todo, index) in todos" :key="todo" class="todo-item">
      <div>{{todo.id}} {{todo.name}}{{todo.createdAt}}</div>
      <div class="remove-item" v-on:click="removeTodo(index)">&times;</div>
    </div>
  </form>
</template>

<script>
import { normalizeData } from "../../utils/utils";
export default {
  name: "ToDoList",
  data() {
    return {
      newTodo: "",
      idForTodo: 1,
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodo.trim().length) {
        return;
      }
      this.todos = this.todos.concat({
        id: this.idForTodo,
        name: this.newTodo,
        isComplited: false,
        createdAt: normalizeData(new Date()),
      });
      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(index) {
      this.todos = this.todos.filter((e, i) => i !== index);
    }
  }
};
</script>

<style lang="scss">
textarea {
  width: 90%; /* Ширина поля в процентах */
  height: 80px; /* Высота поля в пикселах */
  resize: none; /* Запрещаем изменять размер */
}

.todo-input-name {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
}

.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
</style>
