import Text from '@src/components/core/Text'
import { useTheme } from 'styled-components'
import { Banner } from './components/Banner'
import CardProduct from './components/CardProduct'
import * as S from './styles'

import menu from '@src/data/menu.json'

const Home = () => {
  const theme = useTheme()

  return (
    <>
      <Banner />
      <S.ContainerCatalog>
        <Text
          $bold
          $scale={32}
          style={{ fontFamily: `${theme.typography.fontFamily.header}` }}
        >
          Nossos cafés
        </Text>
        <S.ContentCatalog>
          {menu.map((item) => {
            return (
              <CardProduct key={item.id}
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
