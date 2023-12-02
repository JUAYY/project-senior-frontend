import { api } from "src/boot/axios";
import fs from "fs";

export const findFile = async (query) => {
  const res = await api.get(`/files`, { params: query });
  return res.data;
};

export const upload = async (data) => {
  const res = await api.post(`/files`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
