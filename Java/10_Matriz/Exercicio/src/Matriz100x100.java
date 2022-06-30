import java.util.Random;

public class Matriz100x100 {
    public static void main(String[] args) {
        Random r = new Random();
        int[][] matriz = new int[100][100];
        for (int i = 0; i < 100; i++) {
            for (int j = 0; j < 100; j++) {
                matriz[i][j] = r.nextInt(100);
                System.out.print(matriz[i][j] + "\t");
            }

            System.out.print(" ");
        }

        for (int i = 0; i < matriz.length; i++) {

            for (int j = 0; j < matriz.length; j++) {

                if (matriz[i][j] % 2 == 0) {

                    matriz[i][j] = 1;

                } else {

                    matriz[i][j] = -1;
                }
            }
        }
        System.out.print("\n\n");
        System.out.println("Matriz:");

        for (int i = 0; i < matriz.length; i++) {

            for (int j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] == -1)
                    System.out.print(matriz[i][j] + "\t");
               else
                   System.out.print(" "+matriz[i][j] + "\t");
           }
           System.out.println("");
            }
        }
    }
