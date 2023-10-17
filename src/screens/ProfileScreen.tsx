import { Avatar, Box, Button, Divider, Input, Slider, Text } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { usePersistState } from "../hooks/usePersistState";

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  const [goal2, setGoal2] = usePersistState(2, "@goal2");
  const { goal, user, setGoal, setUser } = useContext(UserContext);

  return (
    <SafeAreaView>
      <Avatar
        bg="purple.500"
        alignSelf="center"
        size="2xl"
        source={{
          uri: user?.photo || undefined,
        }}
      >
        {user?.name.substring(0, 1)}
      </Avatar>
      <Text fontSize="2xl" textAlign="center" mt={4}>
        {user?.name}
      </Text>

      <Input
        defaultValue={user?.name}
        onChangeText={(value) => {
          setUser({
            name: value,
            photo: String(user?.photo),
          });
        }}
        placeholder="Default Input"
      />

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
