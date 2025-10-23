package Pacote1;

public class aliancaVizinho implements EstrategiaStrategy {

	@Override
	public void atacar(Pais inimigo) {
		// TODO Auto-generated method stub
		System.out.println("\n Vizinho atacar pelo Norte \n Ataque pelo Sul");
		
	}

	@Override
	public void concluir(Pais inimigo) {
		// TODO Auto-generated method stub
		System.out.println("\n Dividir espólios ");
		
	}

}
