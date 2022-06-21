import java.util.Scanner; // Import necessário para utilizar a classe

public class ParImpar {
    public static void main(String[] args) {
        // Intância do objeto (buffer) utilizando a classe Scanner
        Scanner input = new Scanner(System.in);
        int numero;
        System.out.println("Digite um número inteiro: ");
        numero = input.nextInt(); // Recebe o número

        // Verifica se o número é par
        if ((numero % 2) == 0) {
            System.out.println("O número " + numero + " é par");
        } else {
            System.out.println("O número " + numero + " é ímpar");
        }
        input.close();
    } // fim do método main
} // fim da classe ParImpar
