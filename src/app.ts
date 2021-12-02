import { Student } from "./classes/Student.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Teacher } from "./classes/Teacher.js";
import { HashFormat } from "./interfaces/HashFormat.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const name = document.querySelector("#name") as HTMLInputElement;
const email = document.querySelector("#email") as HTMLInputElement;
const address = document.querySelector("#contact") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];

  values = [name.value, email.value, address.valueAsNumber];

  let doc: HashFormat;

  if (type.value === "student") {
    doc = new Student(...values);
  } else {
    doc = new Teacher(...values);
  }

  list.render(doc, type.value, "end");
});
