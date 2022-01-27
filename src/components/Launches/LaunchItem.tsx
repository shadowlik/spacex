import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Badge } from '@chakra-ui/react'
import styles from './LaunchItem.module.scss';

export interface LaunchItemProps {
  id: string;
  details: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  }
  launch_site: {
    site_name: string;
  }
  mission_name: string;
  links: {
    wikipedia: string;
    mission_patch: string;
  }
}

const localDate = (date: string) => new Date(date).toLocaleDateString();

export function MissionItem(props: LaunchItemProps) {
  return (
    <Box sx={{background: "#FFF", height: '100%'}} px={1} py={2} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          src={props.links.mission_patch || 'https://via.placeholder.com/150'}
          alt={props.mission_name}
          layout="responsive"
          width={3}
          height={3}
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
            <Badge colorScheme='purple' mr='3'>{props.rocket.rocket_name}</Badge> @ {props.launch_site.site_name}
          </Box>

          <a target='_blank' rel="noreferrer" href={props.links.wikipedia}>Wiki</a>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.mission_name}
        </Box>

        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="sm"
          mt="1"
          mb="2"
          textTransform="uppercase"
        >
          Launch date: {localDate(props.launch_date_utc)}
        </Box>

        <Box className={styles['mission-item-description']}>{props.details}</Box>
      </Box>
    </Box>
  );
}
