import { SimpleGrid, Skeleton, Text, list } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={5}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={Skeleton} />
            </GameCardContainer>
          ))}
        {data.map((data) => (
          <GameCardContainer>
            <GameCard key={data.id} game={data} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
