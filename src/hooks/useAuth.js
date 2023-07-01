import ArqRest from '../api/ArqRest';

export const useAuth = () => {
  const getUserById = async (id) => {
    const response = await ArqRest.get(`/clients/${id}`);
    return response.data;
  };

  const updateUser = async (id, data) => {
    const response = await ArqRest.put(`/clients/${id}`, data);
    return response.data;
  };

  return { getUserById, updateUser };
};
