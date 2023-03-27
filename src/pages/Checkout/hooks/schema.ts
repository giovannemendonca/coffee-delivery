import zod from 'zod'

export const newAddressSchema = zod.object({
  cep: zod.string().min(8, { message: 'cep no mínimo 8 digitos' }).max(8),
  rua: zod.string().min(3),
  numero: zod.string().min(1),
  complemento: zod.string().optional(),
  bairro: zod.string().min(3),
  cidade: zod.string().min(3),
  uf: zod.string().min(2).max(2)
})
