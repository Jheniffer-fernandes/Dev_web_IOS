public class Multiplos {
    public static void main(String[] args) {

        int contador;

        for (contador = 2; contador < 1000; contador += 2) {
            System.out.print(" " + contador);
            if (contador % 70 == 0)
                System.out.println(" ");
        }
    }
}
