<template>
<div class="container">
  <h2 class="app-heading">My Task List</h2>
  <p class="author">Made by <a href="https://redhatdev16.github.io/portfolio" target="_blank">redhatdev16</a></p>
  <form @submit.prevent="addNewTask()" class="task-form">
    <div class="input-wrapper">
      <input type="text" class="input" v-model="newTask" placeholder="Enter the task">
    </div>
    <div class="actions-wrapper">
      <button class="btn add">
        <img src="@/assets/plus.png" alt="add" class="btn-icon">
      </button>
      <div class="btn-group">
        <button class="btn mark" @click="markAll()">
          <img src="@/assets/checked-mark.png" alt="add" class="btn-icon"> ALL
        </button>
        <button class="btn delete" @click="deleteAll()">
          <img src="@/assets/trash.png" alt="add" class="btn-icon"> ALL
        </button>
      </div>
    </div>
  </form>
  <div class="divider"></div>
  <div class="task-list">
    <div 
      class="task-card"
      v-for="task in tasks"
      :key="task.id"
      @click="taskIsCompleted(task)"
      :class="{'completed': task.isCompleted}"
    >
      <div class="task-card-content">
        <div class="task-number">{{tasks.indexOf(task)+1}}</div>
        <p class="task-text" :class="{'line-through': task.isCompleted}">{{task.text}}</p>
      </div>
      <div class="task-card-actions">
        <button 
          class="btn delete"
          v-if="task.isCompleted"
          @click="deleteTask(task)"
        >
          <img src="@/assets/trash.png" alt="add" class="btn-icon">
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {ref, onMounted} from 'vue'

export default {
  name: 'App',
  setup() {
    const newTask = ref('');
    const tasks = ref([]);

    onMounted(() => {
      if (localStorage.getItem('myTasks')) {
        let myTasks = JSON.parse(localStorage.getItem('myTasks'));
        myTasks.forEach(task => {
          tasks.value.push(task)
        })
      }
    })


    function addNewTask() {
      if (newTask.value.trim()) {
        tasks.value.push(
          {
            id: Date.now(),
            text: newTask.value,
            isCompleted: false
          }
        )
        newTask.value = '';
        localStorage.setItem('myTasks', JSON.stringify(tasks.value));
      }
    }

    function taskIsCompleted(task) {
      task.isCompleted = !task.isCompleted;
      localStorage.setItem('myTasks', JSON.stringify(tasks.value));
    }

    function deleteTask(task) {
      tasks.value = tasks.value.filter((item) => {
        return item != task;
      })
    }

    function markAll() {
      tasks.value.forEach((task) => {
        task.isCompleted = true;
      })
    }

    function deleteAll() {
      tasks.value.forEach((task) => {
        deleteTask(task);
      })
      localStorage.removeItem('myTasks');
    }

    return {
      newTask,
      tasks,
      addNewTask,
      taskIsCompleted,
      deleteTask,
      markAll,
      deleteAll
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Poppins', sans-serif;
  /* background: linear-gradient(60deg, #161725, #26274B); */
  background: url('assets/bg-city.jpeg') no-repeat top center / cover;
  min-height: 100vh;
  padding: 4rem 0;
  color: #fff;
  overflow-x: hidden;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
}
.app-heading,
.task-form,
.input,
.task-list {
  border-radius: 4px;
  margin-bottom: .5rem;
}
.app-heading {
  background: linear-gradient(60deg, #0E0C21, #2b0b41);
  text-align: center;
  padding: 0.5rem 1rem;
  font-weight: 700;
  letter-spacing: .8px;
  font-size: 1.4rem;
  border: 2px solid #7b5892
}
.author {
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 0.5rem;
}
.author a {
  color: #f5954c
}
.task-form {
  background: linear-gradient(45deg, #1C1C3A, #497ece);
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 10%);
  padding: 1rem;
  border: 2px solid #769acf
}
.input {
  height: 42px;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 1.2rem;
  letter-spacing: .8px;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
}
.actions-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  height: 42px;
  min-width: 3rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  font-size: .9;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: .5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 10%);
  transition: all ease .2s;
}
.btn:hover {
  opacity: .9;
}
.btn:active {
  opacity: .5;
}
.btn.add {
  background: linear-gradient(45deg, #458E6F, #9de63e) ;
}
.btn.mark {
  background: linear-gradient(45deg, #FE7F1B, #eaee20) ;
  margin-right: 0.5rem;
}
.btn.delete {
  background: linear-gradient(45deg, #CA313C, #cc6685) ;
}
.btn-icon {
  width: auto;
  height: 1.2rem;
}
.divider {
  width: 100%;
  height: 3px;
  background: linear-gradient(45deg, #007ACC, #c87cf3);
  margin-bottom: 1rem;
  border-radius: 4px;
}
.task-card {
  background: linear-gradient(45deg, #424079, #6866b1) ;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 10%);
  transition: all ease .2s;
}
.task-card:hover {
  transform: scale(1.02);
}
.task-card.completed {
  background: #505069;
}
.task-card-content {
  display: flex;
  align-items: center;
}
.task-number {
  min-width: 42px;
  min-height: 42px;
  background-color: #876ba7;
  border-radius: 50%;
  display: grid;
  place-items: center center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #ccc;
  margin-right: 0.8rem;
}
.task-text {
  font-size: 1.2rem;
  letter-spacing: .8px;
  max-width: 22rem;
  word-wrap: break-word;
  margin-right: .5rem;
}
.line-through {
  text-decoration: line-through;
  opacity: .6;
}
@media (max-width: 600px) {
  .task-text {
    font-size: 1rem;
    letter-spacing: .4px;
    max-width: 18rem;
  }
}
@media (max-width: 500px) {
  .btn {
    height: 30px;
    min-width: 2rem;
    padding: 0.5rem;
    font-size: .8;
    font-size: .9;
  }
  .btn-icon {
    height: .9rem;
  }
  .task-card {
    padding: 0.5rem;
  }
  .task-number {
    min-width: 30px;
    min-height: 30px;
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }
  .task-text {
    max-width: 14rem;
    font-size: .9rem;
  }
}
@media (max-width: 400px) {
  .task-text {
    max-width: 11.5rem;
  }
}
</style>
