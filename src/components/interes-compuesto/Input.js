import styled from "styled-components";
import { useField } from "formik";
import { FormControl, FormLabel } from "react-bootstrap";

const ErrorMessage = styled.div`
  color: #f00;
`;

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <FormLabel> {label} </FormLabel>

      <FormControl {...field} {...props} />

      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default Input;
