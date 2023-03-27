import * as S from './styles'
interface InputTextPros {
  placeholder: string
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xg'
  isOptional?: boolean
  defaultValue?: string
  handleDataEddress?: (cep: string) => void
}

const InputText = ({
  placeholder,
  size,
  isOptional,
  handleDataEddress,
  defaultValue
}: InputTextPros) => {
  return (
    <>
      <S.Input
        sizeWidth={size}
        isOptional={isOptional}
        placeholder={placeholder}
        type='text'
        defaultValue={defaultValue}
        onBlur={(e) => {
          if (handleDataEddress) {
            handleDataEddress(e.target.value)
          }
        }}
      />
    </>
  )
}

export default InputText
