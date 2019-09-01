import axios from 'axios'

const route = 'http://kimmikirino.pythonanywhere.com/'
const API = axios.create({
    baseURL: route
})

export default API
