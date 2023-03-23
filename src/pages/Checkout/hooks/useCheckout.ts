import { ApiViaCep } from '@src/api/api'
import { CartContext } from '@src/contexts/ShoppingCartContext'
import { CartState } from '@src/reducers/Cart/reducer'
import { useContext, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const useCheckout = () => {
  const [dataEddressApi, setDataEddresApi] = useState<any>()
  const { addFormEndress } = useContext(CartContext)
  const endressForm = useForm()
  const { handleSubmit } = endressForm

  const navigate = useNavigate()

  async function handleDataEddress(cep: string): Promise<any> {
    const api = new ApiViaCep()

    const data = await api.getAddressByCep(cep)
    data.error ? alert('CEP não encontrado') : setDataEddresApi(data)
  }

  const onSubmit = (data: any) => {
    const order = data

    addFormEndress(order)
    navigate('/sucess')
  }

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
