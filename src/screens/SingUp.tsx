import {
  Avatar,
  Badge,
  Center,
  Heading,
  Image,
  Text,
  VStack,
} from "native-base";
import Logo from "../../assets/logo.png";
import PerfilDefault from "../../assets/perfilDefault.png";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { PencilSimpleLine } from "phosphor-react-native";

export const SingUp = () => {
  return (
    <VStack bg={"gray.6"} px={10} flex={1}>
      <Center mt={16} mb={6}>
        <Image source={Logo} alt="logo" />
        <Text fontFamily="heading" color={"gray.1"} fontSize={"lg"} bold>
          Boas vindas!
        </Text>
        <Text
          fontFamily="body"
          color={"gray.2"}
          fontSize={"sm"}
          textAlign={"center"}
        >
          Crie sua conta e use o espaço para comprar itens variados e vender
          seus produtos
        </Text>
      </Center>
      <Center>
        <Center mb={4}>
          <Avatar source={PerfilDefault} h={24} w={24} mb={4} />
          <Avatar
            h={10}
            w={10}
            mt={-12}
            ml={16}
            position={"fixed"}
            background={"blue.light"}
          >
            <PencilSimpleLine color="white" />
          </Avatar>
        </Center>

        <Input placeholder="Nome" />
        <Input variant="email" />
        <Input variant="phone" />
        <Input variant="password" />
        <Input placeholder="Confirmar senha" variant="password" />
        <Button variant="secondary" title="Criar" mt={0} mb={8} />
      </Center>

      <Center>
        <Heading fontFamily={"body"} size="sm" color={"gray.2"}>
          Já tem uma conta?
        </Heading>
        <Button title={"Ir para o login"} variant={"muted"} />
      </Center>
    </VStack>
  );
};
