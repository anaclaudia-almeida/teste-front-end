import axios from 'axios';

const API_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.products;
  } catch (error) {
    console.error('Erro ao buscar produtos', error);
    return [];
  }
};