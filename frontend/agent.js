import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Backend = {
  posts: () => requests.get("/posts"),
  comments: (id) => requests.get("/post/"+id+"/comments"),
  delete: (id) => requests.delete("/posts/"+id),
};

const agent = { Backend };

export default agent;
