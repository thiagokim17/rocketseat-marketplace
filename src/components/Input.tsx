import {
  Input as InputNativeBase,
  IInputProps,
  Icon as IconNativeBase,
} from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { Eye, EyeSlash } from "phosphor-react-native";

type Props = IInputProps & {
  variant?: "password" | "email" | "phone";
};

export const Input = ({ variant, ...rest }: Props) => {
  const [show, setShow] = useState(false);

  const placeholder = () => {
    switch (variant) {
      case "password":
        return "Senha";
      case "email":
        return "E-mail";
      case "phone":
        return "Telefone";
      default:
        return "Digite um texto";
    }
  };

  return (
    <InputNativeBase
      mb={4}
      fontFamily={"body"}
      fontSize={"md"}
      height={45}
      backgroundColor={"gray.7"}
      focusOutlineColor={"blue.light"}
      placeholderTextColor={"gray.4"}
      type={variant === "password" ? (show ? "text" : "password") : "text"}
      InputRightElement={
        variant === "password" ? (
          <Pressable onPress={() => setShow(!show)}>
            <IconNativeBase
              as={show ? <Eye /> : <EyeSlash />}
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        ) : undefined
      }
      keyboardType={
        variant === "email"
          ? "email-address"
          : variant === "phone"
          ? "number-pad"
          : undefined
      }
      autoCapitalize={variant === "email" ? "none" : undefined}
      placeholder={placeholder()}
      {...rest}
    />
  );
};
