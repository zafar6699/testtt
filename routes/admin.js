const express = require("express")
const router = express.Router()
const { Dashboard } = require("../controllers/admin/dashboardController")
const { Category } = require("../controllers/admin/categoryController")
const { Product } = require("../controllers/admin/productController")
const { Orders } = require("../controllers/admin/ordersController")
const { Users } = require("../controllers/admin/usersController")

router.get("/index", Dashboard)
router.get("/category", Category)
router.get("/product", Product)
router.get("/orders", Orders)
router.get("/users", Users)


module.exports = router