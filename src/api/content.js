import { LocalStorage } from "quasar";
import { api } from "src/boot/axios";

export const createContent = async (name, user_id, elements) => {
  const res = await api.post(`/contents`, {
    name: name,
    user_id: user_id,
    elements: elements,
  });
  return res.data;
};

export const findContentByUserId = async (user_id) => {
  const res = await api.get(`/contents`, {
    params: { user_id },
  });
  return res.data;
};

export const updateContent = async (id, name, elements, image) => {
  const res = await api.patch(`/contents/${id}`, {
    name: name,
    elements: elements,
    cover_image_url: image,
  });
  return res.data;
};

export const findOneByID = async (id) => {
  const res = await api.get(`contents/${id}`);
  return res.data;
};
