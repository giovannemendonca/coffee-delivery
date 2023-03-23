import Axios, { AxiosInstance } from 'axios'

export class ApiViaCep {
  axios: AxiosInstance

  constructor() {
    this.axios = Axios.create({
      baseURL: 'https://viacep.com.br/ws/'
    })
  }

  async getAddressByCep(cep: string) {
    try {
      const response = await this.axios.get(`${cep}/json/`)
      return response.data
    } catch (error) {
      return { error: true}
    }
  }
}
