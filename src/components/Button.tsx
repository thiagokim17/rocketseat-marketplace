import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  variant: "primary" | "secondary" | "muted";
  title: string;
};

export const Button = ({ title, variant, ...rest }: Props) => {
  const bgColor = () => {
    switch (variant) {
      case "primary":
        return "blue.light";
      case "secondary":
        return "gray.1";
      default:
        return "gray.5";
    }
  };

  return (
    <ButtonNativeBase
      height={45}
      bg={bgColor()}
      w={"full"}
      mt={4}
      mb={4}
      {...rest}
    >
      <Text
        color={variant === "muted" ? "gray.2" : "gray.7"}
        fontFamily={"body"}
        fontSize={"md"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
