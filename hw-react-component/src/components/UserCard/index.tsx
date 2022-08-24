import style from './style.module.css'

interface Props {
    userName: string;

}

export const UserCard = (props: Props) => {

    const arrayFullName = props.userName.split(' ');
    const  firstLastName = arrayFullName[0][0].concat(arrayFullName[1][0]);

    return ( 
        <div className={style.conteiner}>
            <div className={style.userInicial}>{firstLastName}</div>
            <div className={style.user}>{props.userName}</div>
        </div>
    )
}