export const GetProdutosAllServices = (data: any) => {
  let request: any;
  if (data) {
    request = data;
  } else {
    request = "Erro ao buscar produtos";
  }

  return request;
};

export const GetProdutosIdServices = () => {};

export const UpdateProdutosIdServices = () => {};
export const CreateProdutoServices = () => {};

export const DeleteProdutoIdServices = () => {};
