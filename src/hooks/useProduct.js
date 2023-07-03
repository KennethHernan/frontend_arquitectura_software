import ArqRest from '../api/ArqRest';
import ArqWS from '../api/ArqWS';

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

  const addProduct = async (formData) => {
    const response = await ArqWS.post('/AddProduct', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  };

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

  return { addProduct, getProducts, getCategories, addCategory, getSuppliers, addSupplier, updateProduct };
};
