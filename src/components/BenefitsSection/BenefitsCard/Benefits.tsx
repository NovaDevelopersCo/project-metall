import styles from './styles.module.scss'
import Image from 'next/image';
import { BenefitsCard } from './BenefitsCard';
import { Text } from '@/components/typography/Text';
export const Benefits = () => {
    return (
      <>
        <div className={styles.w}>
            {BenefitsCard.map((r)=> 
                <div key={r.id} className={styles.card}>
                    <div className={styles.content_card}>
                     <Image src={r.src} alt='icon_card'/>
                     <Text className={styles.h2} color='yellow' variant='p18' children={r.h2}/>
                     <Text className={styles.p} color='black' variant='p18' children={r.text}/>
                    </div>
                </div>
        )}
          </div>
     </>
    )
}