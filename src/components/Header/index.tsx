import React from 'react'
import { ButtonCart } from '@components/core/Buttons/Cart'
import { HeaderContainer, Locality, LocalityBadge } from './styles'
import Logo from '@src/assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

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
          <span>Fortaleza,CE</span>
        </LocalityBadge>
        <NavLink to={'/checkout'}>
          <ButtonCart />
        </NavLink>
      </Locality>
    </HeaderContainer>
  )
}
