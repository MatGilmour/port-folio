import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function test() {

    return(
        <main>

            <div className={styles.main}>
                <h1>Projects</h1>
                <Link href='./'>GO BACK GO BACK</Link> 
            </div>
        </main>
    )
    
}