export class MethodNotImplementedException extends Error {
    
    constructor(m: string) {
        super(m);
    }
}