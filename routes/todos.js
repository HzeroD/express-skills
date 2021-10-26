import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
const router = Router()

/* GET users listing. */

router.get('/', todosCtrl.index)

export {
  router
}
