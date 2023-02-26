import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import Input from "./Input";
import Balance from "./Balance.js";

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;

  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }

  return Math.round(total);
};

const formated = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const InteresCompuesto = () => {
  const [balance, setBalance] = useState("");
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );
    setBalance(formated.format(val));
  };
  return (
    <div className="main__content">
      <div className="comp__section">
        <h1 style={{ margin: "0 0 45px 0" }}>
          Calculadora de interés compuesto
        </h1>
        <Formik
          initialValues={{
            deposit: "",
            contribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number()
              .required("Obligatorio")
              .typeError("Debe ser un número"),
            contribution: Yup.number()
              .required("Obligatorio")
              .typeError("Debe ser un número"),
            years: Yup.number()
              .required("Obligatorio")
              .typeError("Debe ser un número"),
            rate: Yup.number()
              .required("Obligatorio")
              .typeError("Debe ser un número")
              .min(0, "El valor mínimo es 0")
              .max(1, "El valor máximo es 1"),
          })}
        >
          <Form>
            <Input name="deposit" label="Deposito Inicial" />
            <Input name="contribution" label="Deposito Anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interes estimado" />

            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        {balance !== "" ? <Balance>Balance final: {balance}</Balance> : null}
      </div>
    </div>
  );
};
