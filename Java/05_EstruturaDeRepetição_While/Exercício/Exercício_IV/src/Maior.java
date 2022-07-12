import java.util.Scanner;

public class Maior {
    public static void main(String[] args) {

        Scanner n = new Scanner(System.in);
        int a = 0, maior = 0, menor = 0;

        for(int x = 0; x < 10; x++){

            System.out.println("Insira um valor:");
            a = n.nextInt();

            if(x == 0){

                maior = a;
                menor = a;
            }

            if(a > maior){

                maior = a;
            }

            if(a < menor){

                menor = a;
            }
        }

        System.out.print("Maior: "+ maior);

        n.close();
    }
}
