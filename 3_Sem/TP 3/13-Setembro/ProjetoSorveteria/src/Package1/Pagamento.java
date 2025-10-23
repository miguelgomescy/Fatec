package Package1;


interface Pagamento{
 void pay(double amount);
}

class CreditCardPayment implements Pagamento {
 @Override
 public void pay(double amount) {
 System.out.println("Pagamento de R$" + amount + " realizado com cartão de crédito.");
 }
}

class PixPayment implements Pagamento {
 @Override
 public void pay(double amount) {
 System.out.println("Pagamento de R$" + amount + " realizado via Pix.");
 }
}

class CashPayment implements Pagamento {
 @Override
 public void pay(double amount) {
 System.out.println("Pagamento de R$" + amount + " realizado em dinheiro.");
 }
}
