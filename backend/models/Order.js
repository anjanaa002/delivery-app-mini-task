const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
      orderId: String,
    customerName: String,
      // email: String, 
      phone: String,  
    address: String,
    item: String,
    status: {
        type: String,
        default: "Pending"
    }
})

module.exports = mongoose.model("Order", orderSchema)
