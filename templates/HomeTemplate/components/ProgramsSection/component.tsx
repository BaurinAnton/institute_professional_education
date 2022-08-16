
import cs from 'classnames';
import { TDataNormalized } from '@types'
import { Title } from '@components'
import { AccordionItem } from './components'
import style from './style.module.scss'

type TProps = {
    data: TDataNormalized,
    className?: string,
}
//компонент не нужнается в мемомезации, т.к. пропсы статичны
export const ProgramsSection: React.FC<TProps> = ({ data, className = '' }) => (
    <section className={cs(style.container, className)}>
        {
            data.map(({ id, programTitle, modules }) => (
                <div className={style.row} key={id}>
                    <Title.H2 className={style.title}>{programTitle}</Title.H2>
                    <div className={style.column}>
                        {
                            modules.map(({ disciplines }, id) => (
                                // У модуля нет ID, но т.к. массив с колличесвтом модулей мы не мутируем, то тут допускаю индекс как key
                                <AccordionItem title={`${id + 1} модуль`} disciplines={disciplines} key={`${id + 1} модуль`} />
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </section>
)