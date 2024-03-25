import styles from './styles.module.scss'
import Image from  'next/image'
import img from '@/assets/квадрат.png'
import imgremuve from '@/assets/imgremuve.png'
import {Text} from '@/components/typography/Text'
import { Title } from '@/components/typography/Title'
export const BasketCard = () => {
    return <div className={styles.wrap}>
                <div className={styles.card}>
                    <div className={styles.first}>
                        <Image className={styles.img} src={img} alt='foto basket card'/>
                        <div className={styles.first_cont}>
                            <Title className={styles.title} color='black' variant='title' >Квадрат 10х10</Title>
                            <div className={styles.under_first_cont}>
                                 <Text className={styles.text} color='black' variant='small_text'><span className={styles.grey}>Цена:</span><br/>165₽</Text>
                                 <Text className={styles.text} color='black' variant='small_text'><span className={styles.grey}>Вес:</span><br/>2,1 кг</Text>
                                 <Text className={styles.text} color='black' variant='small_text'><span className={styles.grey}>Размер:</span><br/>6 - 10,5 м</Text>
                            </div>
                        </div>
                  </div>  
                      <div   className={styles.seccond}>
                            <div className={styles.add_quantity}>
                                    <button className={styles.button_one}>-</button>
                                    <Text className={styles.btwin_but} variant='small_text' color='black' >das123</Text>
                                    <button className={styles.button_two}>+</button> 
                            </div>
                            <div className={styles.result}>
                                <Text className={styles.rub} color='black' variant='p24'>123p</Text>
                                <Image src={imgremuve} alt='remuve'/>
                                
                            </div>
                 </div>
        </div>
        
    </div>
}