import { Center, Heading, Image, Text, VStack } from "native-base";
import MktsLogo from "../../assets/mktsLogo.png";

export const SingIn = () => {
  return (
    <VStack flex={1} bg={"gray.6"}>
      <Center my={32}>
        <Image source={MktsLogo} alt="logo" />
        <Text fontFamily="body">Seu espaço de compra e venda</Text>
      </Center>
    </VStack>
  );
};
