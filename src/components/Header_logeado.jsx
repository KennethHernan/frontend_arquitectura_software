import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import photo from "../assets/usuario.png";

function Header_Main() {

    return (
        <div className={styles.content_main}>
            <div className={styles.content_title_sucursal}>
            <p>Administrador:</p>
                <p className={styles.name_sucursal}>Gestión de inventarios</p>
            </div>
            <div className={styles.content_menu}>
                <div className={styles.content_menu_menu}>
                    <Link to="/home">
                        <p className={styles.init}>Inicio</p>
                    </Link>
                    <Link to="/product">
                        <p className={styles.products}>Productos</p>
                    </Link>
                    <Link to="/proveedor">
                    <p className={styles.about}>Proveedor</p>
                    </Link>
                    <Link to="/category">
                        <p className={styles.orders}>Categoría</p>
                    </Link>
                </div>
                <Link to="/profile">
                    <div className={styles.content_userlogeado}>
                        <div className={styles.user_name}>
                            <p className={styles.nameHeader}>Kenenth De La Cruz</p>
                            <p className={styles.phoneHeader}>+51 982630170</p>
                        </div>
                        <div className={styles.user_photo}>
                            <img src={photo} alt="" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header_Main;
