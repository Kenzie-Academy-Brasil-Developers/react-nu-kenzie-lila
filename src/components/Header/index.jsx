import Logo from "../../assets/logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div >
                <img src={Logo} alt="logo" />
            </div>
        </header>
    );
}