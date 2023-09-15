import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function test() {

    return(
        <main>

            <div className={styles.main}>
                <h1>Goteem</h1>
                <Image className='rounded-circle' src="/images/Goteem.jpg" width={500} height={300} alt="Goteeem"></Image>
                <Link href='./'>GO BACK GO BACK</Link> 
            </div>
        </main>
    )
    
}