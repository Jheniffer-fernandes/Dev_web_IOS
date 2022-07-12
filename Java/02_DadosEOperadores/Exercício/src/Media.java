import java.util.Scanner;

public class Media {
    public static void main (String[] args) {

        Scanner nota = new Scanner(System.in);

        int n1, n2, n3, n4, mf;

        System.out.println("Coloque a primeira nota:");
        n1 = nota.nextInt();

        System.out.println("Coloque a segunda nota");
        n2 = nota.nextInt();

        System.out.println("Coloque a terceira nota");
        n3 = nota.nextInt();

        System.out.println("Coloque a quarta nota");
        n4 = nota.nextInt();

        mf = (n1 + n2 + n3 + n4) / 4;

        System.out.println("A média final é: " + mf);
        nota.close();
    }
}
