export class InvalidParameterException extends Error {
    
    constructor(m: string) {
        super(m);
    }
}