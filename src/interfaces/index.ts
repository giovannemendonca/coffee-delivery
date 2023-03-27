import { newAddressFormData } from "@src/pages/Checkout/hooks/useCheckout"

export type paymentTypes = 'credit' | 'debit' | 'money'

export type IncDecTypes = 'increment' | 'decrement'

export interface Item {
  id: string
  name: string
  category: string[]
  description: string
  path: string
  price: number
  quantity: number
  payment?: paymentTypes
  valueTotal: number
}

export interface Address {
    cep: string
    rua: string
    bairro: string
    cidade: string
    numero: string
    estado: string
    uf: string
  }
  

export interface CartState {
    itens: Item[]
    address: newAddressFormData | null
    SelectedPayment: paymentTypes
  }