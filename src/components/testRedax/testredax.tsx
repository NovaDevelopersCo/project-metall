import styles from './styles.module.css'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import {addToBasket,removeFromBasket} from '@/store/todoSlice'



export const TestRedax = () => {
    const selector = useAppSelector(store => store.todo)
    const dispatch = useAppDispatch()
    return (

        <div className={styles.wrapper}>
            <div className={styles.first}>
                {selector.products.map(item => <div key={item.id} className={styles.wrap}>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                    <button className={styles.button} onClick={() => dispatch( addToBasket(item) )}>add to basket</button>
                </div>)}
            </div>
            <div className={styles.wrap_two}>
                {selector.basket.map(item => (
                <div className={styles.two}>
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                    <h1>{item.id}</h1>
                    <span className={styles.del} onClick={()=> dispatch(removeFromBasket(item.id))}>&times;</span>
                </div>)
                )}
              

            </div>
        </div>
    )
}
