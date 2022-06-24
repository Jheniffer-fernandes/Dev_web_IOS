import java.util.Scanner;

import static java.lang.Math.sqrt;

public class Calculo {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int contador;
        int i;

        System.out.println("Digite um número:");
        i = input.nextInt();

        for (contador = 1; contador <= 10; contador++) {

            System.out.println(i + " X " + contador + " = " + contador * i);

        }
        if (i % 2 == 0) {
            System.out.println("O número é par!");
        } else {

            System.out.println("O número é ímpar!");
        }
        System.out.println(Math.round(Math.sqrt(i)));

        input.close();
    }
}
