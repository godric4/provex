import axios from 'axios'

const customFetch = axios.create({
  baseURL: `http://localhost:1337/api`,
})



export default customFetch
