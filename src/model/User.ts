import { InvalidParameterException } from "../provider/InvalidParameterException";

/**
 * Classe responsável por representar um usuário
 */

 export class User {
     
    private name: string;
    private email: string;
    private password: string;
    private token: string;

    constructor(name: string, email: string, password: string, token: string){
        if(name == null || name == undefined)
            throw new InvalidParameterException("Parametro user é 'null'");

        this.name = name;

        if(email == null || password == undefined)
            throw new InvalidParameterException("Parametro email é 'null'");
    
        this.email = email;

        if(password == null || password == undefined)
            throw new InvalidParameterException("Parametro password é 'null'");

        this.password = password;

        if(token == null || token == undefined)
            throw new InvalidParameterException("Parametro token é 'null'");

        this.token = token;
    }

    public getName(): string{
        return(this.name);
    }

    public getEmail(): string{
        return(this.email);
    }

    public getPassword(): string{
        return(this.password);
    }

    public getToken(): string{
        return(this.token);
    }
 }