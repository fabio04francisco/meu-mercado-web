import { useState } from 'react';

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (event) => {
      console.log(event.target.value);
      setValues({
        ...fields,
        [event.target.name]: event.target.value,
      });
    },
  ];
}
