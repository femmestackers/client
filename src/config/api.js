import axios from 'axios'

// Create an axios instance
export default axios.create({
baseURL: "http://localhost:3020",
timeout: 10000,
withCredentials: true
})