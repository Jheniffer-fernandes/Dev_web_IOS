import java.util.Arrays;
import java.util.Scanner;

public class Vetores {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int[] a = new int[4];
        int[] b = new int[7];
        int[] c = new int[a.length + b.length];

        System.out.println("Digite 4 números:");

        for (int count = 0; count < a.length; count++) {
            a[count] = input.nextInt();
        }

        System.out.println("Digite 7 números:");

        for (int count = 0; count < b.length; count++) {
            b[count] = input.nextInt();
        }

        int count  = 0;

        for (int indice : a) {
            c[count] = indice;
            count++;
        }

        for (int indice : b) {
            c[count] = indice;
            count++;
        }


        for (int countA = 0; countA < a.length; countA++) {
            System.out.println("Valores de A: " + a[countA]);
        }


        for (int countB = 0; countB < b.length; countB++) {
            System.out.println("Valores de B: " +b[countB]);
        }

        System.out.println("Concatenação: ");
        System.out.println(Arrays.toString(c));

        input.close();
    }
}