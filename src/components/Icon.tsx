import { Icon as IconNativeBase, IIconProps } from "native-base";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";

type Props = IIconProps & {
  name: "eye-outline" | "eye-off-outline" | 'pencil-outline' | 'plus' | 'home-outline' | 'tag-outline';
};

export const Input = ({ name, ...rest }: Props) => {
  <IconNativeBase
    as={<Icon name={name} />}
    size={5}
    mr="2"
    color="muted.400"
    {...rest}
  />;
};
