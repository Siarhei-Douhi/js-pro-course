import styles from './style.module.css';

interface Props {
    value: string;
}
export const Input = (props: Props) => {
    return (
        <input className={styles.input} value={props.value}></input>
    )
}