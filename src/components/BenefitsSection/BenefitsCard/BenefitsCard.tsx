import icon from '@/assets/1.png'
import icon2 from'@/assets/2.png'
import icon3 from '@/assets/3.png'
type BenefitsCard = [
    {id:number,
    src: any,
    h2:string,
    text:string},
    
    {id:number,
    src: any,
    h2:string,
    text:string},
    
    {id:number,
    src: any,
    h2:string,
    text:string},
]
export const BenefitsCard: BenefitsCard = [
    {
        id:1,
        src: icon,
        h2: 'Быстрая доставка',
        text: 'Гарантируем оперативную доставку металлопроката',
    },
   
    {
        id:2,
        src: icon2,
        h2: 'Профессиональная консультация',
        text: 'Мы помогаем в выборе оптимальных решений',
    },
   
    {
        id:3,
        src: icon3,
        h2: 'Высокое качество',
        text: 'Соответствующего всем необходимым стандартам',
    },
   
]