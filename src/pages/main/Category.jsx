import Header from '../../components/Header_logeado';
import styles from '../../styles/Category.module.css';
import { useState, useEffect } from 'react';

import close from '../../assets/icon-close.svg';
import atras from '../../assets/ATRAS.png';
import { useForm } from 'react-hook-form';
import { useProduct } from '../../hooks/useProduct';

function Category() {
  const [showProductAgregar, setShowProductAgregar] = useState(false);
  const [categories, setCategories] = useState([]);
  const { getCategories, addCategory } = useProduct();
  const [searchName, setSearchName] = useState("");

  const {
    handleSubmit,
    register,
    reset,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllCategories();
  }, [categories]);

  useEffect(() => {
    getAllCategories();
  }, [searchName]);

  //Buscador por name
  const getAllCategories = async () => {
    const response = await getCategories();
    if (searchName === "") {
      setCategories(response);
    } else {
      const filteredCategory = response.filter((category) =>
        category.name.toLowerCase().includes(searchName.toLowerCase())
      );
      setCategories(filteredCategory);
    }
  };

  const onSubmitAddCategory = async (data) => {
    const { category } = await addCategory(data);
    setCategories([...categories, category]);
    setShowProductAgregar(false);
    reset();
  };

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.content_main}>
          <div className={styles.main_form}>
            <div className={styles.form_head}>
              <p className={styles.txtTitleForm}>Gestionar Categoría</p>
              <p className={styles.txtSubtitleForm}>
                El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la
                presentación de elementos gráficos en documentos, ...
              </p>
            </div>
            <div className={styles.form_head_input_main}>
              <p className={styles.txtSubtilte}>Nombre Categoría:</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                getAllCategories();
              }}>
                <div className={styles.form_head_input}>
                  <input
                    type="text"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                  <button className={styles.btn_main} type="submit">
                    Buscar
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
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <td>{category.id}</td>
                      <td>{category.name}</td>
                      <td>{category.description}</td>
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
              Agregar Categoría
            </button>
          </div>
        </div>
        {/* Modal AGREGAR CATEGORÍA*/}
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
                <p className={styles.txtTitleForm}>Agregar Categoría</p>
                <p className={styles.txtSubtitleForm}>
                  El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir
                  la presentación de elementos gráficos en documentos, ...
                </p>
              </div>
              <div className={styles.form_head_input_main_agregar}>
                <form onSubmit={handleSubmit(onSubmitAddCategory)}>
                  <div className={styles.form_main_colum}>
                    <div className={styles.form_head_input_columna}>
                      <p className={styles.txtSubtilte}>Nombre Categoría:</p>
                      <input type="text" required {...register('name')} />
                    </div>
                    <div className={styles.form_head_input_columna}>
                      <p className={styles.txtSubtilte}>Descripción Categoría:</p>
                      <input type="text" required {...register('description')} />
                    </div>
                  </div>
                  <button
                    className={styles.btn_main}
                    type="submit"
                  // onClick={() => {
                  //   setShowProductAgregar(false);
                  // }}
                  >
                    Agregar Categoría
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
      </div>
    </>
  );
}
export default Category;
