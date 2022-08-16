import cs from 'classnames';
import React from 'react';

import style from './style.module.scss'

type TProps = {
    children: React.ReactNode,
    className?: string,
}

const TitleH1: React.FC<TProps> = React.memo(({ children, className = '' }) => (
    <h1 className={cs(style.h1, className)}>{children}</h1>
))

const TitleH2: React.FC<TProps> = React.memo(({ children, className = '' }) => (
    <h2 className={cs(style.h2, className)}>{children}</h2>
))

export const Title = Object.assign(TitleH1, {
    H1: TitleH1,
    H2: TitleH2,
})