import { InvalidParameterException } from "../provider/exceptions/InvalidParameterException";

/**
 * Classe responsável por tratar exceptions
 */
 export class ExceptionCollector {
     
    public collect(error: Error): void {
        if(error == null || error == undefined)
            throw new InvalidParameterException("Parametro error é 'null'");

        console.log(error.message);
    }
}