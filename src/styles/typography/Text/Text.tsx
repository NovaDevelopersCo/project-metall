import { classNames } from "@/utils/classNames"
import styles from './styles.module.scss'

const sizeMap = {
    small_text: styles.root__small_text,
    '20': styles.root_20,
    '30': styles.root__30,
    '24': styles.root__24,

}
const colorMap = {
    white: styles.root__white,
    black: styles.root__black,
    yellow: styles.root__yellow,
} 
type Tprors = {
    className:string,
    text:string,
    color: 'white'|'black'|'yellow',
    size: '20'|'30'|'24'|'small_text'
}
export const Text = (
    {
        className,
        text,
        color,
        size,

    }:Tprors
) => {
    return (
        <p className={classNames(sizeMap[size],colorMap[color], className ?? '')}>
                    {text}
        </p>
    )
}