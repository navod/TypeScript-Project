import { HashFormat } from "../interfaces/HashFormat.js";

export class Student implements HashFormat {
  constructor(
    readonly name: string,
    private email: string,
    public contact: number
  ) {}

  format() {
    return `name : ${this.name} email : $${this.email} contact : ${this.contact}`;
  }
}
