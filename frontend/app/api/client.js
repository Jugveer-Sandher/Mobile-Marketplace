import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.79:8000/api",
});

export default apiClient;
