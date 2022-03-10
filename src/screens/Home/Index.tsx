import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import {
  Container,
  Date,
  Top,
  ViewPhoto,
  Photo,
  Greenbar,
  Viewbalance,
  IconEyes,
} from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Historico from "../../components/Historico/index";

const Home: React.FC = ({ route }: any) => {
  const [add, setAdd] = React.useState<number>(0);
  const [saldo, setSaldo] = React.useState<number>(0);
  const [res, setRes] = React.useState<number>(saldo);
  const [load, setLoad] = React.useState<boolean>(false);
  const [icon, setIcon] = useState(<Feather name={"eye"} size={30} />);
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    setAdd(route.params?.saldo);
    soma();
    setLoad(true);
  });

  function soma() {
    setSaldo(add + res);
  }

  function ChangeVision() {
    if (charge == 1) {
      setIcon(<Feather name={"eye-off"} size={30} />);
      setCharge(0);
    } else if (charge == 0) {
      setIcon(<Feather name={"eye"} size={30} />);
      setCharge(1);
    }
  }

  if (load === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="#ff0000" size={24} />
      </View>
    );
  } else {
    return (
      <Container>
        <StatusBar backgroundColor="#2E8B57" />
        <Top>
          <ViewPhoto>
            <Photo>
              <Text>
                {/* here will be the profile picture */}
                <Entypo name={"user"} size={60} color="black" />
              </Text>
            </Photo>
          </ViewPhoto>
          {/* PErsonalizar Dps FOto de perfil e Texto */}
          <View style={{ marginRight: 50 }}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Bem Vindo Usuario
            </Text>
          </View>
        </Top>
        <Date>
          <View style={{ flexDirection: "row" }}>
            <Greenbar />
            <Viewbalance>
              <View>
                <Text style={{ fontSize: 15, color: "gray" }}>Saldo Geral</Text>
                <Text style={{ fontSize: 20 }}> 100,0 </Text>
              </View>
              <IconEyes>
                <TouchableOpacity onPress={() => ChangeVision()}>
                  {icon}
                </TouchableOpacity>
              </IconEyes>
              {/* aqui usar o hooks para o valor */}
              {/* Hooks */}
            </Viewbalance>
          </View>
        </Date>
        <Historico />
      </Container>
    );
  }
};

export default Home;
