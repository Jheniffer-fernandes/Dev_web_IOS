import java.util.Scanner;

public class Média {
    public static void main (String[] args) {

        java.util.Scanner nota = new Scanner(System.in);

        float n1, n2, n3, n4, mf;

        System.out.print('Coloque a primeira nota');
        n1 = nota.nextFloat();

        System.out.print('Coloque a segunda nota');
        n2 = nota.nextFloat();

        System.out.print('Coloque a terceira nota');
        n3 = nota.nextFloat();

        System.out.print('Coloque a quarta nota');
        n4 = nota.nextFloat();

        mf = (n1 + n2 + n3 + n4) / 4;

        System.out.print('A média final é de: '+mf + 'pontos.');
    }notas.close();
}
