import { classNames } from "@/utils/classNames"
import styles from './styles.module.scss'
import { Roboto_Flex } from '@next/font/google'
const font = Roboto_Flex({
subsets:['latin']
})
const variantMap = {
    small_text: styles.root__small_text,
    p20: styles.root_p20,
    p30: styles.root__p30,
    p24: styles.root__p24,

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
    variant: 'p20'|'p30'|'p24'|'small_text'
}
export const Text = (
    {
        className,
        text,
        color = 'black',
        variant = 'p20',

    }:Tprors
) => {
    return (
        <p className={classNames(variantMap[variant],colorMap[color], font.className) }>
                    {text}
        </p>
    )
}