import java.util.Scanner;

public class Estacao {
    public static void main (String[] args){

        Scanner mes = new Scanner(System.in);

        String m;

        System.out.println("Insira o nome de um mês: ");
        m = mes.nextLine();

        switch (m) {
            case "abril", "maio", "junho":
                System.out.println("Época: Outono - Mês: " + m);
                break;
            case "julho", "agosto", "setembro":
                System.out.println("Época: Inverno - Mês: " + m);
                break;
            case "outubro", "novembro", "dezembro":
                System.out.println("Época: Primavera - Mês: " + m);
                break;
            case "janeiro", "fevereiro", "março":
                System.out.println("Época: Verão - Mês: " + m);
                break;
            default:
                System.out.println("Mês inválido!");
        }
        mes.close();

    }
}
