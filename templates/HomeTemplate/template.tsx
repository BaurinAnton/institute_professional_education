import { TDataNormalized } from '@types'
import { Title } from '@components'

import style from './style.module.scss'
import { ProgramsSection, CardsSection } from './components'

//т.к. пропс статичен (SSG), то компонент не нуждается в мемомизации
type TProps = {
  data: TDataNormalized
}
export const HomeTemplate: React.FC<TProps> = ({ data }) => (
  <main className={style.main}>
    {/* Для разнообразия сделал компонент Title переиспользуемым */}
    {/* В часном случае исчерповающе, но просто чтобы показать, что могу =) */}
    <Title className={style.title}>Специализированные дисциплины</Title>

    {/* Для удобства вёрски и читаемости кода вынес секции по отдельным компонентам */}
    <ProgramsSection data={data}  className={style.programsSection}/>
    <CardsSection />
  </main>
)