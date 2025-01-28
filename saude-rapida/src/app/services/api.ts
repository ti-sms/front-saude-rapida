import axios from "axios";

const api = axios.create({
    baseURL: "/", 
    timeout: 5000, 
    headers: {
      "Content-Type": "application/json",
    },
  });