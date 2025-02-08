export interface IVendaModel {
  total: number;
  quantidade: number;
  pagamento: "pix"|"dinheiro"|"cartao_credito"|"cartao_debito";
}
