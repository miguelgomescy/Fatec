

public class aula11 {

	public static void main(String[] args) {
		int [] valores = {3,4,2,8,9,1,3,6};
		bubbleSort(valores);
		imprimeVetor(valores);
	}

	private static void imprimeVetor (int [] valores) {
		for (int i : valores) {
			System.out.println(i + "");
		}
	}
	
	private static void bubbleSort(int [] valores) {
		for (int i=0; i<valores.length; i++) {
			if(valores[i + 1]<valores[i]) {
				int temp = valores [i];
			}
		}
	}
	
	
}
