import { LocalStorage } from "quasar";
import { api } from "src/boot/axios";

export const login = async (email, password) => {
  const res = await api.post(`/users/login`, {
    email: email,
    password: password,
  });
  // LocalStorage("user", res.data);
  return res.data;
};

export const signup = async (username, email, password) => {
  const res = await api.post(`/users/register`, {
    username: username,
    email: email,
    password: password,
  });
  // LocalStorage("user", res.data);
  return res.data;
};
