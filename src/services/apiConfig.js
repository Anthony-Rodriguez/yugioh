import axios from 'axios'

const url = "https://db.ygoprodeck.com/api/v7"

const api = axios.create({
  url,
})

export default api
