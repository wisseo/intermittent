// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller.js"
application.register("hello", HelloController)


import UpdateTaskStatusController from "./update_task_status_controller.js"
application.register("update-task-status", UpdateTaskStatusController)

import InsertInListController from "./insert_in_list_controller.js"
application.register("insert-in-list", InsertInListController)

