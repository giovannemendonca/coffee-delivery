import { ApiViaCep } from '@src/api/api'
import { CartContext } from '@src/contexts/ShoppingCartContext'
import { useContext, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { newAddressSchema } from './schema'

export type newAddressFormData = z.infer<typeof newAddressSchema>

const useCheckout = () => {
  const [dataEddressApi, setDataEddresApi] = useState<any>()
  const { addFormEndress } = useContext(CartContext)
  const [error, setError] = useState(false)

  const endressForm = useForm<newAddressFormData>({
    resolver: zodResolver(newAddressSchema)
  })

  const {
    handleSubmit
  } = endressForm

  const navigate = useNavigate()

  async function handleDataEddress(cep: string): Promise<any> {

    const api = new ApiViaCep()

    const data = await api.getAddressByCep(cep)
    data.error ? setError(true) : setDataEddresApi(data)
  }


  const onSubmit = (data: newAddressFormData) => {
    addFormEndress(data)
    navigate('/sucess')
  }

  return {
    dataEddressApi,
    handleDataEddress,
    endressForm,
    onSubmit,
    FormProvider,
    handleSubmit,
    error
  }
}

export default useCheckout
