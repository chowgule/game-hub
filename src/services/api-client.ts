import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "13607d8fcc774e7986aa8c57ee00e7b1",
  },
});
