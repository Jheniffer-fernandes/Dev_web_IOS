import java.util.Scanner;

public class Tabuada {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int contador = 1;
        int tabuada;

        System.out.println("digite o valor da tabuada:");
        tabuada = input.nextInt();

        while (contador <= 10) {
            System.out.println(tabuada + " X " + contador + " = " + contador * tabuada);
            contador++;
        }

    }
}

