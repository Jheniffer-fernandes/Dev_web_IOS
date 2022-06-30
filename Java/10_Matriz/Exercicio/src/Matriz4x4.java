public class Matriz4x4 {
    public static void main(String[] args) {
        int matriz[][] = {{15, 22, 8, 11}, {50, 25, 7, 18}, {90, 55, 32, 1}, {4, 2, 3, 1}};
        int i, j;
        int maior = 0;

        for (i = 0; i < matriz.length; i++) {

            for (j = 0; j < matriz.length; j++) {

                if (matriz[i][j] > 10) {

                    maior += 1;

                }

            }

        }


        System.out.println("Matriz:");

        for (i = 0; i < matriz.length; i++) {

            for (j = 0; j < matriz[i].length; j++) {

                System.out.print(matriz[i][j] + " ");

            }

            System.out.println("");

        }


        System.out.println("A matriz possui " + maior + " valores maiores do que DEZ.");


        for (i = 0; i < matriz.length; i++) {
            for (j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] > 10) {
                    System.out.print(matriz[i][j] + "\t");

                }

            }
            System.out.println("");
        }

    }
}
