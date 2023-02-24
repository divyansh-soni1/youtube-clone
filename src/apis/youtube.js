import axios from "axios";
const KEY = "AIzaSyC52qEVqqCRL0hkbDqMhBUJVN66k7I_UBY";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});