import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 5000, // タイムアウト時間（ミリ秒）
  //headers:ここでheadersの設定も可能
});
