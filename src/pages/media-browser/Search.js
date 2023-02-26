import { useFormik } from "formik";
import {
  Button,
  Form,
  FormControl
} from "react-bootstrap";
import { fetchGif, fetchImg } from "../../helpers/fetch";

export const Search = ({ setResults }) => {
  const handleSubmit = (values) => {
    if (values.tipo === "gif") {
      fetchGif(values.termino).then((gifs) =>
        setResults({
          data: gifs,
          loading: false,
        })
      );
    }

    if (values.tipo === "imagen") {
      fetchImg(values.termino).then((imgs) =>
        setResults({
          data: imgs,
          loading: false,
        })
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      termino: "",
      tipo: "",
    },
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <Form className="d-flex align-items-center" onSubmit={formik.handleSubmit}>
      <FormControl
        name="termino"
        type="text"
        placeholder="Buscar"
        className="me-2"
        aria-label="Buscar"
        onChange={formik.handleChange}
        value={formik.values.termino}
      />
      <div key="inline-radio" className="d-flex">
        <Form.Check
          className="text-dark"
          inline
          label="Imagen"
          name="tipo"
          type="radio"
          id="inline-radio-1"
          onChange={formik.handleChange}
          value="imagen"
        />
        <Form.Check
          className="text-dark"
          inline
          label="Gif"
          name="tipo"
          type="radio"
          id="inline-radio-2"
          onChange={formik.handleChange}
          value="gif"
        />
      </div>

      <Button variant="outline-success" type="submit">
        Buscar
      </Button>
    </Form>
  );
};
