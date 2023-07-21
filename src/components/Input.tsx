import { Input as InputNativeBase, IInputProps } from "native-base";

export const Input = ({ ...rest }: IInputProps) => {
  return (
    <InputNativeBase
      mb={4}
      fontFamily={"body"}
      fontSize={"md"}
      height={45}
      backgroundColor={"gray.7"}
      focusOutlineColor={'blue.light'}
      placeholderTextColor={'gray.4'}
      {...rest}
    />
  );
};
