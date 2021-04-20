import api from "./apiconfig"

//get all cards
export const getCards = async (data) => {
  const resp = await api.get(`/cardinfo.php`, { cardinfo:data });
  return resp.data;
};
