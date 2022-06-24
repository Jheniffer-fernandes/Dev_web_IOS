import java.util.Scanner;

public class MediaSem {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        float notas;
        float contador;
        float acumulador = 0;


        for (contador = 0; contador <= 8; contador++) {
            System.out.println("Digite a nota:");
            notas = input.nextInt();
            acumulador += notas;
        }
        System.out.println("A média final é " + acumulador / 6);

        input.close();
    }
}
