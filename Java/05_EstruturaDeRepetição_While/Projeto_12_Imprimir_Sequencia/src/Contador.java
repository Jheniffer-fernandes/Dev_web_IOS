public class Contador {
    public static void main(String[] args) {
        int contador; //declarando o contador
        contador = 1; // inicializando o contador

        while (contador <= 100) {
            System.out.println(contador + " ");
            if (contador % 30 == 0)
                System.out.println(" "); //Quebra de linha para ver todos os números
            contador++; // mesma coisa que utilizar contador = contador + 1
        }
    } // fim do método main
} // fim da classe contador

