const router = require("express").Router()

const {
    createOrder,
    getOrders,
    getSingleOrder,
    updateOrderStatus
} = require("../controllers/orderController")

router.post("/", createOrder)

router.get("/", getOrders)

router.get("/:id", getSingleOrder)

router.put("/:id", updateOrderStatus)

module.exports = router