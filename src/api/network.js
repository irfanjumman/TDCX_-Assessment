// import { BASE_URL, API_KEY } from './'
import axios from 'axios';
import env from "react-dotenv";

let BASE_URL = env.BASE_URL
let API_KEY = env.API_KEY

const get = async (endpoint) => {
    let token = sessionStorage.getItem('token')
      let response = await axios({
        method: 'get',
        url: endpoint,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
        },
      });
    return response.data;
};

const loginPost = async (endpoint, body) => {
    const response = await axios({
      method: 'post',
      url: endpoint,
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body)
    });
    return response.data;
};

const post = async (endpoint, body) => {
    let token = sessionStorage.getItem('token')
    const response = await axios({
      method: 'post',
      url: endpoint,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body)
    });
    return response.data;
};

const put = async (endpoint, body) => {
  let token = sessionStorage.getItem('token')
    const response = await axios({
      method: 'put',
      url: endpoint,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body),
    });
    return response.data;
};

const remove = async (endpoint, body) => {
  let token = sessionStorage.getItem('token')
    const response = await axios({
      method: 'delete',
      url: endpoint,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body),
    });
    return response.data;
};


export const network = {
  login: async (userName) => {
    const data = { 
        name:userName,
        apiKey:`${API_KEY}`
    };
    const loginResponse = await loginPost(`${BASE_URL}/login`,data);
    return loginResponse;
  },

  getDashboard: async () => {
    const dashboardResponse = await get(
      `${BASE_URL}/dashboard`);

    return dashboardResponse;
  },

  getAllTasks: async () => {
    const getAllTasksResponse = await get(
      `${BASE_URL}/tasks`
    )
    return getAllTasksResponse
  },

  addNewTask: async (task) => {
    const addNewTaskResponse = await post(`${BASE_URL}/tasks`, task);
    return addNewTaskResponse;
  },

  editTask: async (id,editInformation) => {
    const editResponse = await put(
      `${BASE_URL}/tasks/${id}`, editInformation
    );
    return editResponse
  },

  deleteTask: async (id,deleteInformation) => {
    const deleteResponse = await remove(
      `${BASE_URL}/tasks/${id}`,deleteInformation
    );
    return deleteResponse
  },
};
