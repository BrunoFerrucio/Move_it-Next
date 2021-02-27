import style from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/BrunoFerrucio.png" alt="" height="300px"/>
            <div>
                <strong>Bruno Ferrucio</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}