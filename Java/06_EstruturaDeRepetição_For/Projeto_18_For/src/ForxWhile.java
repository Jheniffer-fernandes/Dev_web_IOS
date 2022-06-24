public class ForxWhile {
    public static void main(String[] args) {
        //Loop for


        for (int i=0; i<5; i++) { // int i fica valido só nesse escopo
            System.out.println("O valor do contador é: " + i);
        }

        //Loop no While

        int contador = 0;

        while (contador <5){
            System.out.println("O valor do contador é: " +contador);
            contador++;
        }
    }
}
