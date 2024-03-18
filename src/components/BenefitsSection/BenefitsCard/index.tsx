import styles from './styles.module.scss'
import Image from 'next/image';
import { BenefitsCard } from './BenefitsCard';
const Components = () => {
    return (
      <>
        <div className={styles.w}>
            {BenefitsCard.map((r)=> 
                <div key={r.id} className={styles.card}>
                    <div className={styles.content_card}>
                     <Image src={r.src} alt='icon_card'/>
                     <h2 className={styles.h2}>{r.h2}</h2>
                     <p className={styles.p}>{r.text}</p>
                    </div>
                </div>
        )}
          </div>
     </>
    )
}
export default Components;