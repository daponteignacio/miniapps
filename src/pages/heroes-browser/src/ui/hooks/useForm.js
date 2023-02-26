import { useState } from "react";

export const useForm = (data = {}) => {
  const [formData, setFormData] = useState(data);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormData(data)
  }

  return {
    formData,
    onInputChange,
    onResetForm
  };
};
