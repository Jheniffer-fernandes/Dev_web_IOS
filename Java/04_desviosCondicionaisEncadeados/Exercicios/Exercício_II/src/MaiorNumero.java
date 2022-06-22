import java.util.Scanner;

public class MaiorNumero {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Digite o primeiro número:");
        System.out.println("Digite o segundo número:");
        System.out.println("Digite o terceiro número:");
        int num1, num2, num3;
        num1 = input.nextInt();
        num2 = input.nextInt();
        num3 = input.nextInt();
        int local;


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

