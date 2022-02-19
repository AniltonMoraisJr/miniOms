type CustomerCreateAttributes = {
  name: string;
  cpf?: string;
  cnpj?: string;
  email: string;
  phone: string;
};

type CustomerAttributes = CustomerCreateAttributes & {
  uuid: string;
  createdAt: string;
  updatedAt: string;
};

type CustomerCreationRequest = {
  name: string;
  document: {
    cpf?: string;
    cnpj?: string;
  };
  contact: {
    email: string;
    phone: string;
  };
};
