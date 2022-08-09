import React, { useRef } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import emailjs from "emailjs-com";

export default function FormsComponent() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4r296gi",
        "template_49uo73b",
        form.current,
        "wzheNrgXhwPzh_tGw"
      )
      .then(
        (result) => {
          alert(result.text, "msg sucessfull");
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <FormGroup>
          <Label for='name' hidden>
            Nome
          </Label>
          <Input id='name' name='name' placeholder='Name' type='text' />
        </FormGroup>{" "}
        <FormGroup>
          <Label for='email' hidden>
            Email
          </Label>
          <Input id='email' name='email' placeholder='Email' type='email' />
        </FormGroup>{" "}
        <FormGroup>
          <Label for='telefone' hidden>
            Telefone
          </Label>
          <Input
            id='contact'
            name='contact'
            placeholder='Telefone'
            type='phone'
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for='exampleText'>Mensagem</Label>
          <Input id='exampleText' name='message' type='textarea' />
        </FormGroup>
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
}
