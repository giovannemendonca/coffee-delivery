import styled from 'styled-components'

export const ContainerCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2rem;
`

export const ContentCatalog = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`
