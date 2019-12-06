<template>
    <div class="todo">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>This is My To Do page</h1>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="card-header border">
                        My Morning Routine
                    </div>
                    <div class="card todo-list">
                        <ul v-for="myToDo in jobToDo" v-bind:key="myToDo.jobId" class="list-group list-group-flush text-left">
                            <li class="list-group-item todo-item">
                                <div class="form-check">
                                    <input class="form-check-input" onclick="" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" v-bind:class="{'job-done': myToDo.isDone}" for="defaultCheck1">
                                        {{myToDo.jobName}}
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
    name: 'todo',
    // JSON for Profile Name
    data: function() {
        return {
            jobToDo: [{
                jobId: 1,
                jobName: "5 Minutes Jogging",
                isDone: false
            }, {
                jobId: 2,
                jobName: "300x jumping rope",
                isDone: false
            }, {
                jobId: 3,
                jobName: "Take a Bath",
                isDone: false
            }]
        };
    },
    components: {}
}
</script>

<style scope>
.job-done {
    color: #d0d0d0;
}
</style>