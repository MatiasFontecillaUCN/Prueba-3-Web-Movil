// Importa las bibliotecas necesarias.
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:5108/api";
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Backend = {
  posts: () => requests.post("/posts"),

};

const agent = { Auth, User };

export default agent;
