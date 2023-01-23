import { Avatar, Box, Divider, Slider, Text } from 'native-base';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { UserContext } from '../contexts/UserContext';

interface ProfileScreenProps {
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
}) => {
  const { goal, setGoal, user } = useContext(UserContext);

  return (
    <SafeAreaView>
      <Avatar bg="purple.500" alignSelf="center" size="2xl" source={{
        uri: user?.photo || undefined,
      }}>
        {user?.name.substring(0, 1)}
      </Avatar>
      <Text fontSize="2xl" textAlign="center" mt={4}>
        {user?.name}
      </Text>

      <Divider my={10} />

      <Box mx={20}>
        <Text fontSize="xl" textAlign="center" mt={4}>
          Goal de água
        </Text>
        <Text fontSize="xl" textAlign="center" mt={4}>
          {goal}ml
        </Text>
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