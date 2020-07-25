import axios from 'axios'

// Create an axios instance
export default axios.create({
baseURL: "http://localhost:3020",
//https://zealous-easley-2bbf5c.netlify.app/
timeout: 5000,
withCredentials: true
})