import java.util.Scanner;

public class Nomes {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        String[] nomes = new String[5];

        System.out.println("Escreva 5 nomes: ");

        for (int count = 0; count < nomes.length; count++) {
            nomes[count] = input.nextLine();
        }

        for (int count = 0; count < nomes.length; count++) {
            System.out.println("Normal: " + nomes[count]);
        }

        System.out.println("");

        for (int count = nomes.length - 1; count >= 0; count--) {
            System.out.println("Inverso: " + nomes[count]);
        }

        input.close();
    }
}
