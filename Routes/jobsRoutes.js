import express from 'express'
const router = express.Router()

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStatus,
} from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs)
router.route('/state').get(showStatus)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router
