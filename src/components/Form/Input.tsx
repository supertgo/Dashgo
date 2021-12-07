import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  FormErrorMessage,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';

type InputProps = {
  name: string;
  error?: FieldError;
  label?: string;
} & ChakraInputProps;

const InputBase: ForwardRefRenderFunction<HTMLIFrameElement, InputProps> = ({
  name,
  label,
  error = null,
  ...rest
}) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900'
        }}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
