import React from 'react'
import style from './style.module.scss'

type TProps = {
    children: string,
    onClick: () => void,
    isOpen: boolean
}
export const Title: React.FC<TProps> = React.memo(({ onClick, isOpen, children }) => (
    <div onClick={onClick}>
        {/* Мобильная версия заголовка */}
        <div className={isOpen ? style.titleActive: style.titleNotActive}>
            <div className={style.icon}>
                <span /> 
                <span />
            </div>
            <p>{children}</p>
        </div>

        {/* Десктопная версия заголовка */}
        <div className={style.title}>
            <p>{children}</p>
        </div>
    </div>
))