import java.util.Scanner;

public class ExemploIdade {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int idade, acumuladorIdades = 0; // acumulador
        int contador;

        for (contador = 0; contador < 5; contador++) {
            System.out.println("Digite sua idade ");
            idade = input.nextInt();
            acumuladorIdades += idade; // acumula as idades
        }
        System.out.println("A soma das idades é " + acumuladorIdades);

        input.close();
    }
}
