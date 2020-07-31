import axios from 'axios'

// Create an axios instance
export default axios.create({

baseURL: "https://smoothiverse-server.herokuapp.com/",
timeout: 30000,
withCredentials: true
})