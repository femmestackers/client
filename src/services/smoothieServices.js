import api from '../config/api'

// Returns all smoothies from the server
export async function getSmoothies() {
    const response = await api.get("/smoothies")
    return response.data
}
// Returns a single smoothie based on the id provided
export function getSmoothieFromId(smoothies, id) {
    const smoothie =  smoothies.find((smoothie) => smoothie._id === id)
    return smoothie
  }


// Adds a smoothie on the server
export async function addSmoothie(newSmoothie) {
    const response = await api.post("/smoothies", newSmoothie)
    return response.data
}
  // Deletes a smoothie on the server
export async function deleteSmoothie(id) {
    const response = await api.delete(`/smoothies/${id}`)
    return response.data
  }


  export async function updateSmoothie(smoothie) {
    const response = await api.put(`/smoothies/${smoothie._id}`, smoothie)
    return response.data
}