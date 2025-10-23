package Package1;

public class Main {
    public static void main(String[] args) {
        
        Item sorvete = new SorveteChocolate();  
 
       
        sorvete = new CoberturaChocolate(sorvete);
        sorvete = new Granulado(sorvete);
 
      
        Pagamento pagamento = new PixPayment();  
 
       
        Pedido pedido = new Pedido(sorvete, pagamento);
 
        
        System.out.println(pedido.processarPedido());
    }
}
