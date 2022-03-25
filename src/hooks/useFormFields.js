import { useState } from 'react';

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (inputData) => {
      setValues({
        ...fields,
        [inputData.name]: inputData.value,
      });
    },
  ];
}
