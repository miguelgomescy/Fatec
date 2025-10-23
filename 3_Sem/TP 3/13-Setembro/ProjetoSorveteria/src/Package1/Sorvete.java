package Package1;


public abstract class Sorvete implements Item {
 @Override
 public abstract double custo();
}


public class SorveteChocolate extends Sorvete {
 @Override
 public double custo() {
     return 10.00;
 }
}


public class SorveteMorango extends Sorvete {
 @Override
 public double custo() {
     return 8.00;
 }
}


public class SorveteBaunilha extends Sorvete {
 @Override
 public double custo() {
     return 7.00;
 }
} 