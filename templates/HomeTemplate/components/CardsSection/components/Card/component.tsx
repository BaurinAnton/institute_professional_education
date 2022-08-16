import style from './style.module.scss'
import cs from 'classnames';

type TProps = {
    title: string,
    descriptions: string[],
    background: string,
    corner: boolean,
    listStyle: boolean,
    className?: string,
}
export const Card: React.FC<TProps> = ({ title, descriptions, background, corner, listStyle, className = "" }) => (
    <div className={cs(style.card, className)} style={{ backgroundColor: background }}>
        <h3 className={style.title}>{title}</h3>
        <ul>
            {
                descriptions.map(item => <li className={listStyle ? style.before : ''} key={item}>{item}</li>)
            }
        </ul>
        {corner == true ? <span className={style.corner}></span> : ''}
    </div>
)