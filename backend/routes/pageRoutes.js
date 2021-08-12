import express from "express"
import {
  addPage,
  deletePageById,
  editPageById,
  getPageById,
  listPages,
} from "../controllers/pageController.js"
const router = express.Router()
import { admin, protect } from "../middleware/authMiddleware.js"

router.route("/").post(protect, admin, addPage).get(listPages)
router
  .route("/:id")
  .put(protect, admin, editPageById)
  .delete(protect, admin, deletePageById)
  .get(getPageById)

export default router
