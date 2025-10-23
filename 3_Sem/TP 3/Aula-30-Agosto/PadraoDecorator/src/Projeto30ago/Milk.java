/**
 * 
 */
package Projeto30ago;

/**
 * 
 */
public class Milk extends AddOn {

	/**
	 * @param args
	 */
	public Milk(Beverage bev) {
		super("Milk", bev);
	}
	
	@Override
	public String getDescription() {
		return beverage.getDescription() + "com Leite";
	}
	
	@Override
	public double cost() {
		return beverage.cost()+100;
	}
}
