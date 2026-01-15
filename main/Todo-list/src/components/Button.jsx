import styles from "../css/Button.module.css"

function Button({text, color}){

    return (
        <button className={styles.button}>{text}</button>
    )
}

export default Button;