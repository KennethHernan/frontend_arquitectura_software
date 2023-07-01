import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import photo from "../assets/usuario.png";

function Header() {

    return (
        <div className={styles.content_main}>
            <div className={styles.content_title_sucursal}>
                <p>Administrador:</p>
                <p className={styles.name_sucursal}>Gestión de inventarios</p>
            </div>
            <div className={styles.content_menu}>
                <div className={styles.content_menu_menu}>
                    <Link to="/">
                        <p className={styles.init}>Inicio</p>
                    </Link>
                    <Link to="/">
                        <p className={styles.products}>Productos</p>
                    </Link>
                    <Link to="/">
                    <p className={styles.about}>Proveedor</p>
                    </Link>
                    <Link to="/">
                        <p className={styles.orders}>Categoría</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
