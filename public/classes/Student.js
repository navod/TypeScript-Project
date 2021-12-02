export class Student {
    constructor(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    format() {
        return `name : ${this.name} email : $${this.email} contact : ${this.contact}`;
    }
}
