import java.util.Scanner;

public class PontoFlutuante {
    public static void main (String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Digite um número:");
        float num1 = input.nextFloat();
        System.out.println("Digite outro número:");
        float num2 = input.nextFloat();

        if (num1 > num2 ) {
            System.out.println("Ordem decrescente: " +num1 + ", " + num2);
        }
        else {
            if (num2 > num1) {
                System.out.println("Ordem decrescente: " +num2 + ", " + num1);
            }
            else {
              if (num1 == num2) {
                  System.out.println("Digite números diferentes!");
              }
            }
        } input.close();
    }
}
