import style from './style.module.scss'

type TProps = {
    children: React.ReactNode
}
export const Layout: React.FC<TProps> = ({ children }) => (
    <div className={style.page}>
        <div className={style.pageWrapper}>
            {children}
        </div>
    </div>
)