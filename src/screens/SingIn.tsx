import { Center, Heading, Image, Stack, Text, VStack } from "native-base";
import MktsLogo from "../../assets/mktsLogo.png";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const SingIn = () => {
  return (
    <>
      <VStack bg={"gray.6"} px={10}>
        <Center mt={32} mb={16}>
          <Image source={MktsLogo} alt="logo" />
          <Text fontFamily="body" color={"gray.3"}>
            Seu espaço de compra e venda
          </Text>
        </Center>
        <Center>
          <Heading fontFamily={"body"} size="sm" mb={4} color={"gray.2"}>
            Acesse sua conta
          </Heading>
          <Input variant="email" />
          <Input variant="password" />
          <Button title={"Entrar"} variant={"primary"} />
        </Center>
      </VStack>
      <Stack
        space="xs"
        my="4"
        px="10"
        alignItems={"center"}
        flex={1}
        justifyContent={"center"}
      >
        <Heading fontFamily={"body"} size="sm" color={"gray.2"}>
          Ainda não tem acesso?
        </Heading>
        <Button title={"Entrar"} variant={"muted"} mb={12} />
      </Stack>
    </>
  );
};
