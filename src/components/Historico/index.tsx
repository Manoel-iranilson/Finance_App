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

        <Dados style={{ backgroundColor: "#3CB371" }}>
          <FontAwesome name="money" size={35} color="#3b5998" />
          <View>
            <Texto>Categoria:Investimentos</Texto>
            <Texto>Valor: 200,0</Texto>
          </View>
        </Dados>
        <Dados style={{ backgroundColor: "#FA8072" }}>
          <AntDesign name="shoppingcart" size={35} color="#3b5998" />
          <View style={{ paddingLeft: 5 }}>
            <Texto>Categoria:Alimentação</Texto>
            <Texto>Valor: 100,0</Texto>
          </View>
        </Dados>
      </Historico>
    </Container>
  );
};

export default index;
