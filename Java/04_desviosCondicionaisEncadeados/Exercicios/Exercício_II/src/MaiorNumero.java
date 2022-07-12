import java.util.Scanner;

public class MaiorNumero {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int num1, num2, num3;
        int local;

        System.out.println("Digite o primeiro número:");
        num1 = input.nextInt();

        System.out.println("Digite o segundo número:");
        num2 = input.nextInt();

        System.out.println("Digite o terceiro número:");
        num3 = input.nextInt();

        if (num1 > num2)
            local = num1;
        else
            local = num2;

        if (local > num3)
            System.out.println("O número maior é:" + local);
        else
            System.out.println("O número maior é:" + num3);

        input.close();
    }
}

