const Order = require("../models/Order")




const createOrder = async (req, res) => {

    try {

        const { customerName, phone, address, item } = req.body

        // 👇 generate short ID
        const orderId = "ORD" + Math.floor(1000 + Math.random() * 9000)

        const order = new Order({
            orderId,
            customerName,
            phone,
            address,
            item
        })

        await order.save()

        res.status(201).json(order)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}




const getOrders = async (req, res) => {

    try {

        const { phone } = req.query

        const query = phone ? { phone } : {}

        const orders = await Order.find(query)

        res.json(orders)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const getSingleOrder = async (req, res) => {

    try {

        const order = await Order.findOne({
            orderId: req.params.id
        })

        if (!order) {
            return res.status(404).json({ message: "Order not found" })
        }

        res.json(order)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}


const updateOrderStatus = async (req, res) => {

  try {

    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      })
    }

    // ❌ Already delivered → no more updates
    if (order.status === "Delivered") {
      return res.status(400).json({
        message: "Order already delivered. Cannot update status."
      })
    }

    // ✅ Proper status flow
    const statusFlow = {
      "Pending": "Accepted",
      "Accepted": "Out for Delivery",
      "Out for Delivery": "Delivered"
    }

    const nextStatus = statusFlow[order.status]

    // ❌ Prevent backward or invalid changes
    if (req.body.status !== nextStatus) {
      return res.status(400).json({
        message: `You can only change status to ${nextStatus}`
      })
    }

    // ✅ Update status
    order.status = req.body.status

    await order.save()

    res.json(order)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }
}

module.exports = {
    createOrder,
    getOrders,
    getSingleOrder,
    updateOrderStatus
}