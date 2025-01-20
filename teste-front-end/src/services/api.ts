import axios from "axios";

export interface ProductResponse {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ApiResponse {
  sucess: boolean;
  products: ProductResponse[];
}

export async function getProducts() {
  try {
    const response = await axios.get<ApiResponse>("api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");
    return response.data.products;
  } catch (error) {
    console.error("Erro ao buscar produtos", error);
    return [];
  }
}
