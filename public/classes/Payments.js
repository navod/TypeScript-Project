export class Payment {
    constructor(recepiant, details, amount) {
        this.recepiant = recepiant;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepiant} owed $${this.amount} for ${this.details}`;
    }
}
