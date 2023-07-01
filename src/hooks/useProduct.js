import ArqRest from '../api/ArqRest';

export const useProduct = () => {
  const getProducts = async () => {
    try {
      const response = await ArqRest.get('/products');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async (idProduct, body) => {
    try {
      const response = await ArqRest.put(`/products/${idProduct}`, body);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Agregar productos es WS
  // Login es WS

  const getCategories = async () => {
    try {
      const response = await ArqRest.get('/categories');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const addCategory = async (body) => {
    try {
      const response = await ArqRest.post('/categories', body);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getSuppliers = async () => {
    try {
      const response = await ArqRest.get('/providers');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const addSupplier = async (body) => {
    try {
      const response = await ArqRest.post('/providers', body);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getProducts, getCategories, addCategory, getSuppliers, addSupplier, updateProduct };
};
