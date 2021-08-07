import express from "express"
const router = express.Router()
import {
  deleteProduct,
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  createReview,
  getTopProducts,
  getProductsCategory,
  getFeaturedProducts,
  getNewProducts,
} from "../controllers/productControllers.js"
import { admin, protect } from "../middleware/authMiddleware.js"

router.route("/").get(getProducts).post(protect, admin, createProduct)
router.route("/:id/review").post(protect, createReview)
router.route("/topratedproducts").get(getTopProducts)
router.route("/featuredproducts").get(getFeaturedProducts)
router.route("/new").get(getNewProducts)
router.route("/productscategory").get(getProductsCategory)
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router
