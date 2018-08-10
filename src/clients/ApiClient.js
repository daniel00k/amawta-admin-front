import axios from 'axios'

const urlBackend = 'http://localhost'

const instance = axios.create({
  baseURL: urlBackend,
  timeout: 30000
});

export default class ApiClient {

  getCategories() {
    return instance.get('/categories').catch((error)=>{ return {data: [], errorMessage: error}})
  }

}
