import { ChangeEvent } from 'react';

import { Input, InputContainer, HelpText } from './styles';

type TextInputProps = {
  label?: string | null;
  value?: string | number | undefined;
  valid?: boolean;
  helpText?: string | undefined | null;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
};

const InputText = ({
  label,
  value,
  onChange,
  valid = true,
  helpText,
  id,
  name,
}: TextInputProps) => {


  return (
    <InputContainer>
       <Input  
          valid={valid ?? true}
          id={id}
          name={name}
          placeholder={label ?? ''}
          value={value}
          onChange={onChange}
        />
      {helpText && <HelpText valid={valid}>{helpText}</HelpText>}
    </InputContainer>
  );
};

export default InputText