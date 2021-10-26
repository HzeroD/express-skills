import { Router } from 'express'
import * as todoDb from '../data/todo-db.js'
const router = Router()

/* GET users listing. */

router.get('/', function(req, res) {
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos: todos,
      error: error
    })
  })
})

export {
  router
}
