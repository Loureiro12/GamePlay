import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { View, ImageBackground, Text, FlatList } from "react-native";

import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListHeaders } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { ListDivider } from "../../components/ListDivider";

import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";

import { styles } from "./styles";
import { Member } from "../../components/Member";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "André",
      avatar_url: "https://avatars.githubusercontent.com/u/65689062?v=4",
      status: "online",
    },
    {
      id: "2",
      username: "André",
      avatar_url: "https://avatars.githubusercontent.com/u/65689062?v=4",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendário</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem preder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeaders title="Jogadores" subtitle="Total 3" />

      <FlatList
        style={styles.members}
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
