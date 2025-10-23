package Pacote1;

public class ExemploSimulador {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Pais pais1 = new Pais("Russia", 200000, 500, 35, 5, 10, true);
		Pais pais2 = new Pais("Ucrânia", 50000,  100, 10, 0, 5, false);
		
		if(pais1.getQuantSoldado()>pais2.getQuantSoldado()) {
			//setar a estratégia
			pais1.setEstrategia(new ataSozinho());
			pais1.declararGuerra(pais2);
		}
		
		else {
			pais1.setEstrategia(new diplomacia());
			pais1.declararGuerra(pais2);
		}
	}

}
