import { useQuery, gql } from '@apollo/client';
import { Grid, GridItem } from "@chakra-ui/react";
import { MissionItemProps } from '.';
import { MissionItem } from "./MissionItem";

export function MissionList({ missionList = [] }: { missionList: MissionItemProps[]}) {
  return (
    <div>
      <Grid templateColumns="1fr 1fr 1fr" gap={6}>
        {missionList.map((mission, missionIndex) => (
          <GridItem key={missionIndex} w="100%">
            <MissionItem {...mission} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
