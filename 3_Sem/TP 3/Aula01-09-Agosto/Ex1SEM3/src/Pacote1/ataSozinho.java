package Pacote1;

public class ataSozinho implements EstrategiaStrategy  {

	@Override
	public void atacar(Pais inimigo) {
		// TODO Auto-generated method stub
		System.out.println("\n Plantar evidências falsas \n soltar bombas \n Derrubar Governo");
	}

	@Override
	public void concluir(Pais inimigo) {
		// TODO Auto-generated method stub
		System.out.println("\n Estabelecer governo fantoche");
	}

}
