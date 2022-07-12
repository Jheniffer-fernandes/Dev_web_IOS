import java.util.Scanner;

public class Area {
    public static void main (String[] args) {

        Scanner area = new Scanner(System.in);

        double b,h, r;

        System.out.println("Coloque o valor da base:");
        b = area.nextDouble();

        System.out.println("Coloque a altura");
        h = area.nextDouble();

        r = (b * h) / 2;

        System.out.println("Calculando a Area de um triangulo retangulo");
        System.out.println("Resultado da área do triângulo retangulo é: " + r);

        area.close();
    }
}
