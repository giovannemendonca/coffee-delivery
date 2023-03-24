import styled from 'styled-components'
import Text from '@components/core/Text'
export const ContainerCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2rem;

`

export const ContainerTitle = styled(Text).attrs({
  $bold: true,
})`
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  padding: 1rem;
`

export const ContentCatalog = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 3rem;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
    gap: 4rem;

    padding: 0 1rem;
  }
`
