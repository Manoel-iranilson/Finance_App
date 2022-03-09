import React from "react";
import { Text, View } from "react-native";

import { Container, Dados, Historico, Texto, Title } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
const index: React.FC = (route) => {
  return (
    <Container>
      <Historico>
        <Title>
          <Text>Historico</Text>
        </Title>

        <Dados>
          <FontAwesome name="money" size={35} color="#3b5998" />
          <View style={{ paddingLeft: 5 }}>
            <Texto>Categoria:Investimentos</Texto>
            <Texto>Valor: 200</Texto>
          </View>
        </Dados>
      </Historico>
    </Container>
  );
};

export default index;
