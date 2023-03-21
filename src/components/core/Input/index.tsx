import * as S from './styles'
interface InputTextPros {
  placeholder: string
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xg'
  isOptional?: boolean
}

const InputText = ({ placeholder, size, isOptional }: InputTextPros) => {
  return (
    <>
      <S.Input
        sizeWidth={size}
        isOptional={isOptional}
      >
        <input
          type='text'
          placeholder={placeholder}
        />
        <span>Opicional</span>
      </S.Input>
    </>
  )
}

export default InputText
