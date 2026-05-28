const DeliveryBoy = require("../models/DeliveryBoy")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await DeliveryBoy.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.json({ token })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}

module.exports = { login }