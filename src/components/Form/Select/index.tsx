import { ISelectProps } from "../../../interfaces";
import { StyledSelect } from "./style";

function Select({ value, onChange }: ISelectProps) {
  return (
    <StyledSelect value={value} onChange={onChange} required>
      <option value="">Selecione</option>
      <option value="entrada">Entrada</option>
      <option value="saida">Saída</option>
    </StyledSelect>
  );
}
export default Select;
