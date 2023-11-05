import {
  Avatar,
  Box,
  Button,
  Divider,
  Input,
  Slider,
  Text,
  TextField,
} from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { usePersistState } from "../hooks/usePersistState";
import auth from "@react-native-firebase/auth";

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  const [initializing, setInitializing] = useState(true);
  const [goal2, setGoal2] = usePersistState(2, "@goal2");
  const {
    goal,
    user,
    setGoal,
    createAccountOnFirebase,
    forgotPassword,
    login,
    logout,
  } = useContext(UserContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <SafeAreaView>
      <TextField
        onChangeText={(value) => {
          setEmail(value);
        }}
        placeholder="Email"
      />

      <TextField
        onChangeText={(value) => {
          setPassword(value);
        }}
        type="password"
        placeholder="Senha"
      />

      <Button
        onPress={() => {
          createAccountOnFirebase({
            email,
            password,
          });
        }}
      >
        Criar conta
      </Button>

      <Button
        onPress={() => {
          login({
            email,
            password,
          });
        }}
      >
        login
      </Button>

      <Button
        onPress={() => {
          forgotPassword({
            email,
          });
        }}
      >
        recuperar senha
      </Button>

      <Button onPress={logout}>logout</Button>

      <Avatar
        bg="purple.500"
        alignSelf="center"
        size="2xl"
        source={{
          uri: user?.photoURL || undefined,
        }}
      >
        {user?.displayName?.substring(0, 1)}
      </Avatar>
      <Text fontSize="2xl" textAlign="center" mt={4}>
        {user?.displayName || user?.email}
      </Text>

      <Divider my={10} />

      <Box mx={20}>
        <Text fontSize="xl" textAlign="center" mt={4}>
          Goal de água
        </Text>
        <Text fontSize="xl" textAlign="center" mt={4}>
          {goal}ml
        </Text>
        <Text fontSize="xl" textAlign="center" mt={4}>
          Goal2: {goal2}ml
        </Text>
        <Button
          onPress={() => {
            setGoal2(Number(goal2) + 1);
          }}
        >
          Set Goal2
        </Button>
        <Slider
          defaultValue={goal}
          value={goal}
          minValue={0}
          maxValue={4000}
          onChange={(value) => setGoal(value)}
          step={100}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </SafeAreaView>
  );
};
