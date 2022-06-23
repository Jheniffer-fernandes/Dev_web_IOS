import java.util.Scanner;

public class ParImpar {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int par = 0;
        int num = 1;
        int impar = 0;

        while (num >= 0) {
            System.out.println("Digite um numero");
            num = input.nextInt();

            if (num % 2 == 0)
                par = num;
            else {
                if (num % 2 == 1) {
                    impar = num;
                }
            num++;
                System.out.println("Pares: " + par);
                System.out.println("Impares " + impar);
        }
        }
        input.close();
    }
}