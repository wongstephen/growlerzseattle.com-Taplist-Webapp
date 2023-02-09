import axios from "axios";
import.meta.env.VITE_API;

const BASE_URL = "https://api.growlerzseattle.com/graphql";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
