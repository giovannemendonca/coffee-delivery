import styled from 'styled-components'

export const ContainerCheckout = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 3rem;
  p {
    line-height: ${({ theme }) => theme.typography.lineHeight.large};
  }
  padding: 4px;

  @media (max-width: 850px) {
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
  }

  @media (max-width: 550px) {
    padding: 1rem;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: start;
  gap: 8px;
`

export const SectionAddress = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.baseCard};

  @media (max-width: 1080px) {
    padding: 20px;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 1rem;

  margin-top: 1.8rem;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`

export const BottonsPayment = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 850px) {
    justify-content: space-between;
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
`

export const ShopingCardContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: ${({ theme }) => theme.colors.baseSubtitle};
    line-height: ${({ theme }) => theme.typography.lineHeight.large};
  }
`

export const ContentCart = styled(Content)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.baseButton};

  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`
export const PriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
