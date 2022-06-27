import java.util.Scanner;

package com.br.aluno;

public class Banco {
    public static void main(String[] args) {

        System.out.println("Banco BayMax");

        System.out.println("1 - Conta corrente");

        System.out.println("2 - Conta poupança");

        System.out.println("3 - Conta estudante");

        System.out.println("Escolha uma opção");

        Scanner input = new Scanner(System.in);

        int menu = input.nextInt();
        String banco = input.nextLine();
        char resp;
        resp =

        switch (menu) {

            case 1:
                System.out.println("Você selecionou a conta Corrente");
                System.out.println("Você está no banco BayMax");
                break;
            case 2:
                System.out.println("Você selecionou a conta Poupança");
                System.out.println("Você está no banco BayMax");
                break;
            case 3:
                System.out.println("Você selecionou a conta Estudante");
                System.out.println("Você está no banco BayMax");
                break;
            default:
                System.out.println("Opção inválida");
        }
        for

        input.close();
        }
}
