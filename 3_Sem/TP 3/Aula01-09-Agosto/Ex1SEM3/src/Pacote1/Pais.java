package Pacote1;

	public class Pais{
		public static void main(String[] args) {

		}
		private String nome;
		private int quantSoldado;
		private int quantTanque;
		private int quantCaca;
		private int quantBombardeiro;
		private int quantNavio;
		private boolean nuclearW;		
		private EstrategiaStrategy estrategia;
		
		public Pais(String nome, int quantSoldado, int quantTanque, int quantCaca, int quantBombardeiro, int quantNavio,
				boolean nuclearW) {
			//EstrategiaStrategy estrategia
			this.nome = nome;
			this.quantSoldado = quantSoldado;
			this.quantTanque = quantTanque;
			this.quantCaca = quantCaca;
			this.quantBombardeiro = quantBombardeiro;
			this.quantNavio = quantNavio;
			this.nuclearW = nuclearW;
//			this.estrategia = estrategia;
		}
		
		
		
		public String getNome() {
			return nome;
		}



		public void setNome(String nome) {
			this.nome = nome;
		}



		public int getQuantSoldado() {
			return quantSoldado;
		}



		public void setQuantSoldado(int quantSoldado) {
			this.quantSoldado = quantSoldado;
		}



		public int getQuantTanque() {
			return quantTanque;
		}



		public void setQuantTanque(int quantTanque) {
			this.quantTanque = quantTanque;
		}



		public int getQuantCaca() {
			return quantCaca;
		}



		public void setQuantCaca(int quantCaca) {
			this.quantCaca = quantCaca;
		}



		public int getQuantBombardeiro() {
			return quantBombardeiro;
		}



		public void setQuantBombardeiro(int quantBombardeiro) {
			this.quantBombardeiro = quantBombardeiro;
		}


		public int getQuantNavio() {
			return quantNavio;
		}



		public void setQuantNavio(int quantNavio) {
			this.quantNavio = quantNavio;
		}



		public boolean isNuclearW() {
			return nuclearW;
		}



		public void setNuclearW(boolean nuclearW) {
			this.nuclearW = nuclearW;
		}



		public EstrategiaStrategy getEstrategia() {
			return estrategia;
		}

		public void setEstrategia(EstrategiaStrategy estrategia) {
			this.estrategia = estrategia;
		}
		
		public void declararGuerra(Pais inimigo) {
			this.estrategia.atacar(inimigo);
			this.estrategia.concluir(inimigo);
		}
		
	}

// ataque terrestre, naval e aereo