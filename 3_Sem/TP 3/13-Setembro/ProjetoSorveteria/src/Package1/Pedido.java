package Package1;

public class Pedido {
    private Item item;
    private Pagamento pagamento;
 
    public Pedido(Item item, Pagamento pagamento) {
        this.item = item;
        this.pagamento = pagamento;
    }
 
    public void adicionarCobertura(CoberturaDecorator cobertura) {
        this.item = cobertura;
    }
 
    public double calcularCustoTotal() {
        return item.custo();
    }
 
    public String processarPedido() {
        double custoTotal = calcularCustoTotal();
        return pagamento.processarPagamento(custoTotal);
    }
}

