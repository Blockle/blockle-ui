import { FieldProps, useField } from '@blockle/form';
import React, { useState } from 'react';
import { Box } from '../Box';
import { cx } from '../cx';
import './text-field.css';

type Props = FieldProps<string> & {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'password' | 'email';
} & ValidationOptions;

type ValidationOptions = {
  required?: boolean;
  pattern?: RegExp;
};

const validate = ({ required, pattern }: ValidationOptions) => (value: string) => {
  if (required && !value) {
    return 'required';
  }

  if (pattern && !pattern.test(value)) {
    return 'pattern_mismatch';
  }

  return null;
};

const TextField = ({
  label,
  name,
  placeholder,
  value = '',
  required,
  pattern,
  type = 'text',
}: Props) => {
  const [focus, setFocus] = useState(false);
  const field = useField(name, {
    value,
    validate: validate({ required, pattern }),
  });

  return (
    <Box position="relative" color={focus ? 'primary' : 'light'}>
      <Box
        component="label"
        display="block"
        htmlFor={`Input-${name}`}
        color={focus ? 'primary' : 'light'}
        className={cx('TextField-Label', field.value && 'is-floating')}
      >
        {label}
      </Box>
      <input
        autoComplete="off"
        className="TextField-Input"
        id={`Input-${name}`}
        name={name}
        onBlur={() => setFocus(false)}
        onChange={event => field.setValue(event.target.value)}
        onFocus={() => setFocus(true)}
        placeholder={placeholder || label}
        type={type}
        value={field.value}
      />
      <div className="TextField-Bar" />

      {field.invalid && (
        <Box color="warning" className="TextField-Bottom">
          * {field.validationMessage}
        </Box>
      )}
    </Box>
  );
};

export default TextField;