import { useState } from 'react'

import { useWindowSize } from '@hook'
import { TModule } from '@types'

import { Title } from './components'
import style from './style.module.scss'

type TProps = {
    title: string;
    disciplines: TModule['disciplines'];
}
export const AccordionItem: React.FC<TProps> = ({ title = 'Модуль', disciplines = [] }) => {
    const [isOpen, setIsOpen] = useState(false)
    const windowSize = useWindowSize()

    const changeIsOpenHandler = () => {
        if (windowSize.width <= 768)
            setIsOpen((isOpen) => !isOpen)
    }

    return (
        <div className={style.module}>
            <div className={style.column}>
                <Title onClick={changeIsOpenHandler} isOpen={isOpen}>{title}</Title>
            </div>
            {
                ((windowSize.width >= 769) || isOpen) && (
                    <div className={style.column}>
                        <ul>
                            {
                                disciplines.map(item => (
                                    // Предпологаю, что item уникальный
                                    <li className={style.item} key={item}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}