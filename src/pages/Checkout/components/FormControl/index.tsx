import { useFormContext } from 'react-hook-form'
import useCheckout from '../../hooks/useCheckout'
import * as S from './styles'

const FormControl = () => {
  const { handleDataEddress, dataEddressApi } = useCheckout()

  const { register } = useFormContext()

  return (
    <S.FormContent>
      <S.InputContainer>
        <S.Input
          placeholder='CEP'
          sizeWidth='sm'
          {...register('cep')}
          onBlur={({ target }) => handleDataEddress(target.value)}
          required
          maxLength={8}
          minLength={8}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.Input
          sizeWidth='xg'
          placeholder='Rua'
          {...register('rua')}
          defaultValue={dataEddressApi && dataEddressApi.logradouro}
          required
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.Input
          sizeWidth='xg'
          placeholder='Número'
          {...register('numero')}
          required
        />
        <S.Input
          sizeWidth='xg'
          {...register('complemento')}
          placeholder='Complemento'
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.Input
          sizeWidth='xg'
          placeholder='Bairro'
          {...register('bairro')}
          defaultValue={dataEddressApi && dataEddressApi.bairro}
          required
        />
        <S.Input
          sizeWidth='xg'
          placeholder='Cidade'
          {...register('cidade')}
          defaultValue={dataEddressApi && dataEddressApi.localidade}
          required
        />
        <S.Input
          sizeWidth='xs'
          placeholder='UF'
          {...register('uf')}
          defaultValue={dataEddressApi && dataEddressApi.uf}
          required
        />
      </S.InputContainer>
    </S.FormContent>
    
  )
}

export default FormControl
