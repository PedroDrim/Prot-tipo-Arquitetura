import { User } from "../entity/User";
import { InterfaceFactory } from "../entity/interfaces/InterfaceFactory";
import { ExceptionCollector } from "../provider/ExceptionCollector";

/**
 * Classe responsável por autenticar um usuário
 */
 export class UserFactory implements InterfaceFactory {

    public createUser(): User {

        try {
            let user: User = new User("Capivara de Testes", "teste@gmail.com", "senha01", "tk0001");
            return(user);
        } catch(error) {
            let collector: ExceptionCollector = new ExceptionCollector();
            collector.collect(error);
        }
    }
}