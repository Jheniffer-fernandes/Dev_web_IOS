import java.util.Scanner; // Import necessário para utilizar a classe Scanner

public class Menu {
    public static void main(String[] args) {
        System.out.println("======= Menu de Opcoes ========");
        System.out.println(" 1 - Cadastrar Produtos ");
        System.out.println(" 2 - Listas de Produtos ");
        System.out.println(" 3 - Sair do Sistema");
        System.out.println("======= Escolha uma opção ========");

        Scanner entrada = new Scanner(System.in);
        int menu = entrada.nextInt(); // Lê a opção digitada

        switch (menu) {
            case 1:
                System.out.println("Você escolheu o menu 1");
                System.out.println("Que é a opção de Cadastrar Produtos");
                break;
            case 2:
                System.out.println("Você escolheu o menu 2");
                System.out.println("Que é a opção de Listar Produtos");
                break;
            case 3:
                System.out.println("Você escolheu o menu 3");
                System.out.println("Que é a opção de Sair do Sistema");
                break;
            default:
                System.out.println("Item de menu inválido");
        }
        entrada.close();
    } //fim do metodo main
} //fim da classe Menu
