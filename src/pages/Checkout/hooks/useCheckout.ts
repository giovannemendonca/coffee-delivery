import { ApiViaCep } from '@src/api/api'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

const useCheckout = () => {
  const [dataEddressApi, setDataEddresApi] = useState<any>()

  const endressForm = useForm()
  const { handleSubmit } = endressForm

  async function handleDataEddress(cep: string): Promise<any> {
    const api = new ApiViaCep()

    const data = await api.getAddressByCep(cep)
    data.error ? alert('CEP não encontrado') : setDataEddresApi(data)
  }
  
  const onSubmit = (data: any) => console.log(data)

  return {
    dataEddressApi,
    handleDataEddress,
    endressForm,
    onSubmit,
    FormProvider,
    handleSubmit
  }
}

export default useCheckout
