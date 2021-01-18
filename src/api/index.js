import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:3000/'
  // baseURL: 'https://toko-bangun-beli-tidur.herokuapp.com/'
})

export default server
