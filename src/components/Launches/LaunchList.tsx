import { useQuery, gql } from '@apollo/client';
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { LaunchItemProps } from '.';
import { MissionItem } from "./LaunchItem";

export function LaunchList({ launches = [] }: { launches: LaunchItemProps[]}) {
  return (
    <div>
      <SimpleGrid columns={[1, 2, 3]}  gap={6} autoRows="1fr">
        {launches.map((launch, launchIndex) => (
          <GridItem key={launchIndex} w="100%">
            <MissionItem {...launch} />
          </GridItem>
        ))}
      </SimpleGrid>
    </div>
  );
}
