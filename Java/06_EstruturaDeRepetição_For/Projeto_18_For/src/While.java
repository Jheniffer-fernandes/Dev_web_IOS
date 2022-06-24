import java.util.Scanner;

//Exercicio da idade com While

public class While {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        int idade, acumuladorIdades = 0; // acumulador
        int contador =0;


        while (contador <=5){
            System.out.println("Digite sua idade ");
            idade = input.nextInt();
            acumuladorIdades += idade; // acumula as idades
            contador++;

        }
        System.out.println("A soma das idades é " + acumuladorIdades);

        input.close();

        //Exercício dos multiplos com While

        int i= 2;

        while (i < 1000) {
            System.out.print(" " + i);
            i+=2;
            if (i % 70 == 0) {
                System.out.println(" ");
            }
        }
    }
}





