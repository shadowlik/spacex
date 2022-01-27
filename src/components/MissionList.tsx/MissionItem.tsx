import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Badge } from '@chakra-ui/react'
import styles from './MissionItem.module.scss';

export interface MissionItemProps {
  description: string;
  id: string;
  manufacturers: string[];
  twitter: string;
  website: string;
  wikipedia: string;
  name: string;
}

export function MissionItem(props: MissionItemProps) {
  return (
    <Box style={{background: "#FFF"}} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          src="https://via.placeholder.com/150x100"
          alt={props.name}
          layout="responsive"
          width={3}
          height={2}
        />

      <Box p="6">
        <Box display="flex" alignItems="baseline" justifyContent="space-between">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {props.manufacturers.map(
              (manufacture, manufactureIndex) => 
              <Badge colorScheme='purple' mr='3' mb='2' key={manufactureIndex}>{manufacture}</Badge>
              )}
          </Box>

          <a target='_blank' rel="noreferrer" href={props.wikipedia}>Wiki</a>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.name}
        </Box>

        <Box className={styles['mission-item-description']}>{props.description}</Box>
      </Box>
    </Box>
  );
}
