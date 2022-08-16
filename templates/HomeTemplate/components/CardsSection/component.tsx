import cs from 'classnames';
import { Card } from './components'
import style from './style.module.scss'

const CARD = [
    {
        background: "#FF3535",
        corner: true,
        listStyle: false,
        title: 'Практические модули',
        descriptions: [
            'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе'
        ]
    },
    {
        background: "#2D2C2A",
        corner: false,
        listStyle: true,
        title: 'Итоговая аттестация',
        descriptions: [
            'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
            'Защита итоговой аттестационной работы',
        ]
    }
]

type TProps = {
    className?: string;
}
//компонент не нужнается в мемомезации, т.к. пропсы статичны
export const CardsSection: React.FC<TProps> = ({ className = '' }) => (
    <section className={cs(style.container, className)}>
        {
            CARD.map(({ title, descriptions, background, corner, listStyle, }) => (
                <Card
                    title={title}
                    descriptions={descriptions}
                    background={background}
                    corner={corner}
                    listStyle={listStyle}
                    className={style.column}
                    key={title}
                />
            ))
        }
    </section>
)