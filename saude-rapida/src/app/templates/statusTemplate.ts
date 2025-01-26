export const statusTemplate = (rowData: { status: boolean }) => {
    return rowData.status ? "Ativo" : "Inativo";
  };