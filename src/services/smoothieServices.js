import api from '../config/api'

// Returns all blog posts from the server
export async function getSmoothies() {
    const response = await api.get("/smoothies")
    return response.data
}