import { User } from "../entity/User";
import { InterfaceFactory } from "../entity/interfaces/InterfaceFactory";
import { UserFactory } from "../extractor/UserFactory";
import { InterfaceAuthentication } from "../entity/interfaces/InterfaceAuthentication";
import { InvalidParameterException } from "../provider/exceptions/InvalidParameterException";

/**
 * Classe responsável por autenticar um usuário
 */
 export class Authentication implements InterfaceAuthentication {
     
    private id: string;
    private interfaceFactory: InterfaceFactory;

    constructor(){
        this.interfaceFactory = new UserFactory();
        this.id = null;
    }

    public authenticateByEmail(email: string, password: string): boolean {
        if(email == null || email == undefined)
            throw new InvalidParameterException("Parametro email é 'null'");

        if(password == null || password == undefined)
            throw new InvalidParameterException("Parametro password é 'null'");
        
        let usuario: User = this.interfaceFactory.createUser();

        let validationEmail: boolean = (email == usuario.getEmail())
        let validationPassword: boolean = (password == usuario.getPassword())
        
        if(validationPassword && validationEmail)
            this.id = usuario.getName();    
        
        return(validationPassword && validationEmail);
    }

    public authenticateByToken(token: string): boolean {
        if(token == null || token == undefined)
            throw new InvalidParameterException("Parametro token é 'null'");

        let usuario: User = this.interfaceFactory.createUser();

        let validationToken: boolean = (token == usuario.getToken())
        
        if(validationToken)
            this.id = usuario.getName();    
        
        return(validationToken);
    }

    public isConnected(): boolean {
        return(this.id != null);
    }

    public getId(): string {
        return(this.id);
    }
}