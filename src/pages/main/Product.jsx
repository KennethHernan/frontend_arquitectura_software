import { useEffect, useState } from 'react';

import Header from '../../components/Header_logeado';
import close from '../../assets/icon-close.svg';
import atras from '../../assets/ATRAS.png';
import { useProduct } from '../../hooks/useProduct';
import styles from '../../styles/Product.module.css';
import { useForm } from 'react-hook-form';

function Product() {
  const [showProductAgregar, setShowProductAgregar] = useState(false);
  const [showProductActualizar, setShowProductActualizar] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [productSelected, setProductSelected] = useState(null);
  const [messageResponse, setMessageResponse] = useState('');
  const [isError, setIsError] = useState(false);
  const { getProducts, getCategories, getSuppliers, updateProduct, addProduct } = useProduct();

  const { handleSubmit, register } = useForm();

  useEffect(() => {
    getAllProducts();
    getAllCategories();
    getAllSuppliers();
  }, [products]);

  const getAllProducts = async () => {
    const productsF = await getProducts();
    setProducts(productsF);
  };

  const getAllCategories = async () => {
    const categoriesF = await getCategories();
    setCategories(categoriesF);
  };

  const getAllSuppliers = async () => {
    const suppliersF = await getSuppliers();
    setSuppliers(suppliersF);
  };

  const onSubmitAddProduct = async (data) => {
    const formData = new URLSearchParams();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('stock', data.stock);
    formData.append('supplier', data.supplier);
    const response = await addProduct(formData);

    const parser = new DOMParser();
    const xml = parser.parseFromString(response, 'application/xml');
    setMessageResponse(xml.getElementsByTagName('message')[0].textContent);
    setIsError(xml.getElementsByTagName('isError')[0].textContent);

    if (isError == 'true') {
      return setMessageResponse(xml.getElementsByTagName('message')[0].textContent);
    }

    setMessageResponse(xml.getElementsByTagName('message')[0].textContent);
  };

  const onSubmitUpdateProduct = async (data) => {
    const productUpdate = {
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
    };
    const productUpdated = await updateProduct(productSelected.id, productUpdate);
    setProducts(products.map((product) => (product.id === productUpdated.id ? productUpdated : product)));
    setShowProductActualizar(false);
  };

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.content_main}>
          <div className={styles.main_form}>
            <div className={styles.form_head}>
              <p className={styles.txtTitleForm}>Gestionar Productos</p>
              <p className={styles.txtSubtitleForm}>
                El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la
                presentación de elementos gráficos en documentos, ...
              </p>
            </div>
            <div className={styles.form_head_input_main}>
              <p className={styles.txtSubtilte}>Id Producto:</p>
              <form action="">
                <div className={styles.form_head_input}>
                  <input type="number" required />
                  <button className={styles.btn_main} type="button">
                    Buscar
                  </button>
                  <button
                    className={styles.btn_main}
                    type="button"
                    onClick={() => {
                      setShowProductActualizar(true);
                      const product = products.find((product) => product.id === 1);
                      setProductSelected(product);
                      console.log(productSelected);
                    }}
                  >
                    Actualizar
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.content_tabla}>
              <table className={styles.tabla_main}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoría</th>
                    <th>Proveedor</th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.category.name}</td>
                        <td>{product.supplier.name}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.content_foot_button}>
            <button
              className={styles.btn_main}
              onClick={() => {
                setShowProductAgregar(true);
              }}
            >
              Agregar Producto
            </button>
          </div>
        </div>
        {/* Modal AGREGAR PRODUCTO*/}
        {showProductAgregar && (
          <div className={styles.content_main}>
            <div className={styles.main_form_agregar}>
              <div className={styles.content_salir}>
                <button
                  className={styles.content_salir_button}
                  onClick={() => {
                    setShowProductAgregar(false);
                  }}
                >
                  <img src={close} alt="" />
                </button>
              </div>
              <div className={styles.form_head}>
                <p className={styles.txtTitleForm}>Agregar Productos</p>
                <p className={styles.txtSubtitleForm}>
                  El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir
                  la presentación de elementos gráficos en documentos, ...
                </p>
              </div>
              <div className={styles.form_head_input_main_agregar}>
                <form action="" onSubmit={handleSubmit(onSubmitAddProduct)}>
                  <div className={styles.form_main_colum}>
                    <div className={styles.form_head_input_columna}>
                      <p className={styles.txtSubtilte}>Nombre Producto:</p>
                      <input type="text" required {...register('name')} />
                      <p className={styles.txtSubtilte}>Precio Producto:</p>
                      <input type="number" required {...register('price')} />
                      <p className={styles.txtSubtilte}>Categoría Producto:</p>
                      <select {...register('category')} defaultValue=""  className={styles.spinner}>
                        <option disabled value={''}>
                          Seleccione Categoria
                        </option>
                        {categories &&
                          categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className={styles.form_head_input_columna}>
                      <p className={styles.txtSubtilte}>Descripción Producto:</p>
                      <input type="text" required {...register('description')} />
                      <p className={styles.txtSubtilte}>Stock Producto:</p>
                      <input type="number" required {...register('stock')} />
                      <p className={styles.txtSubtilte}>Proveedor Producto:</p>
                      <select {...register('supplier')} defaultValue="" className={styles.spinner}>
                        <option disabled value={''}>
                          Seleccione Proveedor
                        </option>
                        {suppliers &&
                          suppliers.map((supplier) => (
                            <option key={supplier.id} value={supplier.id}>
                              {supplier.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <button
                    className={styles.btn_main}
                    type="submit"
                    onClick={() => {
                      setShowProductAgregar(false);
                    }}
                  >
                    Agregar Producto
                  </button>
                </form>
              </div>
            </div>
            <div className={styles.content_foot_button}>
              <button
                className={styles.btn_main}
                onClick={() => {
                  setShowProductAgregar(false);
                }}
              >
                <img src={atras} alt="" />
              </button>
            </div>
          </div>
        )}

        {/* Modal ACTUALIZAR PRODUCTO*/}
        {showProductActualizar && (
          <div className={styles.content_main}>
            <div className={styles.main_form_agregar}>
              <div className={styles.content_salir}>
                <button
                  className={styles.content_salir_button}
                  onClick={() => {
                    setShowProductActualizar(false);
                  }}
                >
                  <img src={close} alt="" />
                </button>
              </div>
              <div className={styles.form_head}>
                <p className={styles.txtTitleForm}>Actualizar Productos</p>
                <p className={styles.txtSubtitleForm}>
                  El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir
                  la presentación de elementos gráficos en documentos, ...
                </p>
              </div>
              <div className={styles.form_head_input_main_agregar}>
                <form onSubmit={handleSubmit(onSubmitUpdateProduct)}>
                  <div className={styles.form_main_colum}>
                    <div className={styles.form_head_input_columna}>
                      <p className={styles.txtSubtilte}>Nombre Producto:</p>
                      <input type="text" required {...register('name')} defaultValue={productSelected.name} />
                      <p className={styles.txtSubtilte}>Precio Producto:</p>
                      <input type="number" required {...register('price')} defaultValue={productSelected.price} />
                      <p className={styles.txtSubtilte}>Categoría Producto:</p>
                      <select {...register('category')} defaultValue={productSelected.category.id}>
                        <option disabled value={''}>
                          Seleccione Categoria
                        </option>
                        {categories &&
                          categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                      </select>
                      {/* <input type="text" required /> */}
                    </div>
                    <div className={styles.form_head_input_columna}>
                      <p className={styles.txtSubtilte}>Descripción Producto:</p>
                      <input
                        type="text"
                        required
                        {...register('description')}
                        defaultValue={productSelected.description}
                      />
                      <p className={styles.txtSubtilte}>Stock Producto:</p>
                      <input type="number" required {...register('stock')} defaultValue={productSelected.stock} />
                      <p className={styles.txtSubtilte}>Proveedor Producto:</p>
                      <select {...register('supplier')} defaultValue={productSelected.supplier.id}>
                        <option disabled value={''}>
                          Seleccione Proveedor
                        </option>
                        {suppliers &&
                          suppliers.map((supplier) => (
                            <option key={supplier.id} value={supplier.id}>
                              {supplier.name}
                            </option>
                          ))}
                      </select>
                      {/* <input type="text" required /> */}
                    </div>
                  </div>
                  <button className={styles.btn_main} type="submit">
                    Actualizar Producto
                  </button>
                </form>
              </div>
            </div>
            <div className={styles.content_foot_button}>
              <button
                className={styles.btn_main}
                onClick={() => {
                  setShowProductActualizar(false);
                }}
              >
                <img src={atras} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>

      {isError && (
        <div
          className={styles.modal}
          onClick={() => {
            setIsError(false);
          }}
        >
          <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
            <h1>{messageResponse}</h1>
          </div>
        </div>
      )}
    </>
  );
}
export default Product;
