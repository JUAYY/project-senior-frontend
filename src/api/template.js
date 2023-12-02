import { LocalStorage } from "quasar";
import { api } from "src/boot/axios";

export const getOneTemplate = async (id) => {
  const res = await api.get(`/templates/${id}`);
  return res.data;
};

export const getAllTemplates = async () => {
  const res = await api.get(`templates`);
  return res.data;
};
