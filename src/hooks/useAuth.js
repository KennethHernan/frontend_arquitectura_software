import ArqRest from '../api/ArqRest';
import ArqWS from '../api/ArqWS';

export const useAuth = () => {
  const getUserById = async (id) => {
    const response = await ArqRest.get(`/clients/${id}`);
    return response.data;
  };

  const updateUser = async (id, data) => {
    const response = await ArqRest.put(`/clients/${id}`, data);
    return response.data;
  };

  const login = async (formData) => {
    const response = await ArqWS.post('/Login', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  };

  return { getUserById, updateUser, login };
};
