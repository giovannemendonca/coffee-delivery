import { Header } from '@src/components/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
  margin-top: 8rem;
`

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}

export default DefaultLayout
