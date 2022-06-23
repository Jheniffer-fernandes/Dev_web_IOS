import java.util.Scanner;

public class Controle {
    public static void main (String[] args) {

        Scanner input = new Scanner(System.in);

        char resp; // declara variavel de controle
        String nome;
        int idade;
        resp = 's'; // inicializa a variavel de controle

        while (resp == 's') {
            System.out.println("Digite o seu nome:");
            nome = input.next();
            System.out.println("Digite sua idade:");
            idade = input.nextInt();

            if (idade >= 18) {
                System.out.println("Seu nome é: " + nome);
            }

            System.out.println("Deseja continuar ? (s/n):");
            resp = input.next().charAt(0);
        }
        input.close();
    }
    }
