export default function isCEPValid(cep) {
  const regex = /^[0-9]{5}-[0-9]{3}$/;
  return regex.test(cep);
}
