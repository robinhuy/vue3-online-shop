import axios from "axios";
import { API_DOMAIN } from "@/config";

const options = {};
options.baseURL = API_DOMAIN;

const instance = axios.create(options);

export default instance;
