// src/api/usersApi.js
import axiosInstance from "./axiosInstance.js";
export const getUsers = () => axiosInstance.get("/users");

export const getUserById = (id) => axiosInstance.get(`/users/${id}`);

// for later (POST)
// export const createUser = (data) => axiosInstance.post("/users", data);
