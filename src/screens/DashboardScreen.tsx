import { Box, Button, HStack, Text, VStack } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { useToast } from 'native-base';
import { UserContext } from '../contexts/UserContext';

interface IDashboardProps {

}

export const DashboardScreen: React.FC<IDashboardProps> = () => {
  const { goal } = useContext(UserContext);
  const [cupSize, setCupSize] = useState<number>(300);
  const [water, setWater] = useState<number>(0);

  const toast = useToast();

  const handleWater = () => {
    setWater(water + cupSize);
    toast.show({
      description: `Você bebeu ${cupSize}ml de água`,
    })
  };

  const handleChangeCupSize = (size: number) => {
    setCupSize(size);
  };

  useEffect(() => {
    if (water >= goal) {
      toast.show({
        description: "Você atingiu sua meta de água",
        placement: "top",
        colorScheme: "success",
      })
    }
  }, [water]);

  return (
    <VStack
      flex={1}
      width='100%'
      justifyContent='space-between'
      alignItems='center'
      p={4}
      my={30}
    >
      <Text fontSize="sm">
        {'  '} copo de {cupSize}ml
      </Text>


      <VStack>
        <HStack alignItems="center" justifyContent="center">
          <Text fontSize="6xl">
            {water}
          </Text>
          <Text fontSize="xl">
            {'  '}/ {goal} ml
          </Text>
        </HStack>



        <Button
          mt={5}
          colorScheme="primary"
          onPress={handleWater}
        >
          Beber água
        </Button>
      </VStack>

      <Box mt={10}>
        <Button.Group >
          <Button onPress={() => handleChangeCupSize(200)} colorScheme="teal">
            Copo americano
          </Button>
          <Button onPress={() => handleChangeCupSize(350)} colorScheme="teal">
            Xicára
          </Button>
          <Button onPress={() => handleChangeCupSize(500)} colorScheme="teal">
            Garrafa
          </Button>
        </Button.Group>
      </Box>

    </VStack>
  );
};