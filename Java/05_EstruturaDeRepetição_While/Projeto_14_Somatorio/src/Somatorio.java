public class Somatorio {
    public static void main(String[] args) {
        int contador = 1;
        int acumulador = 0; // Declara e inicializa o acumulador

        while (contador <= 100) {
            if (contador % 2 == 0)
                acumulador = acumulador + contador; // adiciona o contador par ao acumulador
            contador++;
        }
        System.out.println("A soma dos números pares de 1 a 100 é " + acumulador);
    }
}
