import styles from './styles.module.css' 

export default function Profile(props) {
    return(
        <div className={styles.container}>
            <img src={props.img}></img>
            <h2>{props.name} </h2>
            <p> {props.bio} </p>
            <p>{props.phone} </p>
            <p>{props.email}</p>
            <button><a href={props.githubUrl}>Github</a></button>
            <button><a href={props.instagramUrl}>Instagram</a></button>
            <button><a href={props.twitterUrl}>Twitter</a></button>
        </div>
    )
}