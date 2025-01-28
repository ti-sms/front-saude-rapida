import axios from "axios";

export interface AddressData {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

const cepService = {
  async fetchAddress(cep: string): Promise<AddressData> {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        throw new Error("CEP não encontrado.");
      }
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar CEP.");
    }
  },
};

export default cepService;
