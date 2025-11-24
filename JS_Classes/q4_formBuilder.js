"use strict";

class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  generateForm(containerId) {
    const container = document.getElementById(containerId);

    let html = `<form id='dynamicForm'>`;

    this.fields.forEach(f => {
      html += `
        <label>${f.label}</label>
        <input type="${f.type}" name="${f.label}" class="fieldBox" />
        <br><br>
      `;
    });

    html += `<button type="submit">Submit</button></form>`;
    container.innerHTML = html;

    document.getElementById("dynamicForm").addEventListener("submit", e => {
      e.preventDefault();
      console.log(this.getFormData());
    });
  }

  getFormData() {
    const data = {};
    document.querySelectorAll(".fieldBox").forEach(input => {
      data[input.name] = input.value;
    });
    return data;
  }
}

const formObj = new FormBuilder([
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" }
]);

formObj.generateForm("formContainer");
