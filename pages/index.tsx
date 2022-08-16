import type { NextPage } from 'next'

import {
  TDataDTO,
  TDataNormalized
} from '@types'
import { generationId } from '@utils'
import { HomeTemplate } from '@templates'

type TProps = {
  data: TDataNormalized
}
const Home: NextPage<TProps> = ({ data }) => <HomeTemplate data={data} />

const normalizeData = (data: TDataDTO): TDataNormalized => {
  return data.slice(0, 5).map(i => ({
    programTitle: i?.title || 'Неизвестная программа',
    id: i?._id || generationId(),
    modules: [
      {
        disciplines: i?.specializedSubjects?.slice(0, Math.floor(i?.specializedSubjects.length / 2)).map(i => i.string)
      },
      {
        disciplines: i?.specializedSubjects?.slice(-(Math.floor(i?.specializedSubjects.length / 2 ))).map(i => i.string)
      }
    ]
  }))
}

export async function getStaticProps() {
  const rs = await fetch(`https://api-moscow-mba.herokuapp.com/products`) 
  const data = await rs.json() as TDataDTO

  const dataNormalized = normalizeData(data)
  
  return { props: { data: dataNormalized } }
}

export default Home