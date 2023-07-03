import { useEffect, useState } from 'react';
import Header from '../../components/Header_logeado';
import styles from '../../styles/Home.module.css';
import { useProduct } from '../../hooks/useProduct';

function Home() {
  const [products, setProducts] = useState([]);
  const { getProducts } = useProduct();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.content_main}>
          <div className={styles.main_form}>
            <div className={styles.form_head}>
              <p className={styles.txtTitleForm}>Productos</p>
              <p className={styles.txtSubtitleForm}>
                El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la
                presentación de elementos gráficos en documentos, ...
              </p>
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
                        <td>{product.price}</td>
                        <td>{product.category.name}</td>
                        <td>{product.supplier.name}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
