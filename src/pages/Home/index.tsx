import Text from '@src/components/core/Text'
import { Banner } from './components/Banner'
import CardProduct from './components/CardProduct'
import * as S from './styles'

import menu from '@src/data/menu.json'

const Home = () => {
  return (
    <>
      <Banner />
      <S.ContainerCatalog>
        <S.ContainerTitle $scale={32}>Nossos cafés</S.ContainerTitle>
        <S.ContentCatalog>
          {menu.map((item) => {
            return (
              <CardProduct
                key={item.id}
                {...item}
              />
            )
          })}
        </S.ContentCatalog>
      </S.ContainerCatalog>
    </>
  )
}

export default Home
