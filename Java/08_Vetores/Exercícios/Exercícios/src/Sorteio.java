import java.util.Random;

public class Sorteio {
    public static void main(String[] args) {
        Random g = new Random();

        int [] sorteio = new int[10];

        for (int count = 0; count < sorteio.length; count++) {
            sorteio[count] = g.nextInt(10) + 1;
        }

        int menor = sorteio[0];

        for (int count = 0; count < sorteio.length; count++) {
            if (sorteio[count] < menor) {
                menor = sorteio[count];
            }
        }

        for (int count = 0; count < sorteio.length; count++) {
            System.out.println("Números gerados: " + sorteio[count]);
        }

        System.out.println("O menor número gerado é: " + menor);
    }
}