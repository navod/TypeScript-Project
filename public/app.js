import { Student } from "./classes/Student.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Teacher } from "./classes/Teacher.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const address = document.querySelector("#contact");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [name.value, email.value, address.valueAsNumber];
    let doc;
    if (type.value === "student") {
        doc = new Student(...values);
    }
    else {
        doc = new Teacher(...values);
    }
    list.render(doc, type.value, "end");
});
