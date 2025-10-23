package Package1;



public abstract class CoberturaDecorator implements Item {
    protected Item item;
 
    public CoberturaDecorator(Item item) {
        this.item = item;
    }
}
 

public class CoberturaChocolate extends CoberturaDecorator {
    public CoberturaChocolate(Item item) {
        super(item);
    }
 
    @Override
    public double custo() {
        return item.custo() + 2.00;
    }
}
 

public class CoberturaMorango extends CoberturaDecorator {
    public CoberturaMorango(Item item) {
        super(item);
    }
 
    @Override
    public double custo() {
        return item.custo() + 1.50;
    }
}
 

public class Granulado extends CoberturaDecorator {
    public Granulado(Item item) {
        super(item);
    }
 
    @Override
    public double custo() {
        return item.custo() + 1.00;
    }
}



