import React from 'react'
import { ButtonCart } from '@components/core/Buttons/Cart'
import { HeaderContainer, Locality, LocalityBadge } from './styles'
import Logo from '@src/assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Text from '@components/core/Text'

const IconMapPin = ({ size = 22 }) => (
  <MapPin
    size={size}
    weight='fill'
  />
)

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img
          src={Logo}
          alt='Logo da empresa'
        />
      </NavLink>
      <Locality>
        <LocalityBadge>
          <IconMapPin />
          <Text $scale={16}>Fortaleza,CE</Text>
        </LocalityBadge>
        <NavLink to={'/checkout'}>
          <ButtonCart />
        </NavLink>
      </Locality>
    </HeaderContainer>
  )
}
