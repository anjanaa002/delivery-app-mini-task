import axios from "axios"

const API = axios.create({
  baseURL: "http://10.169.146.138:5000/api"
})

export default API