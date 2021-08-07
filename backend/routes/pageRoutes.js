import express from "express"
import {
  addPage,
  getPageById,
  listPages,
} from "../controllers/pageController.js"
const router = express.Router()
import { admin, protect } from "../middleware/authMiddleware.js"

router.route("/").post(protect, admin, addPage).get(listPages)
router.route("/:slug").get(getPageById)

export default router
