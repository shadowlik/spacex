import { gql, useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, useEffect, useState } from 'react';
import { FilterBar } from '../components/FilterBar';
import { LaunchList } from '../components/Launches'
import styles from '../assets/styles/Home.module.css';
import { Loader } from '../components/Loader';
import { Pagination } from '../components/Pagination';

interface Launch {
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
  }
}

interface GetLaunchesData {
  launches: Launch[];
}

interface GetLaunchesVars {
  limit: number;
  offset: number;
  missionName: string;
}

const GET_MISSIONS = gql`
  query GetMissions($limit: Int!, $offset: Int!, $missionName: String!) {
    launches(limit: $limit, offset: $offset, find: {mission_name: $missionName}) {
      id
      details
      launch_date_utc
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
      mission_name
      links {
        wikipedia
      }
    }
  }
  
`;

const Home: NextPage = () => {
  const limit = 9; // TODO: User can change it

  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);

  const { loading, data } = useQuery<GetLaunchesData, GetLaunchesVars>(
    GET_MISSIONS,
    { variables: { limit: limit, offset: page * limit, missionName: filter } }
  )

  const handleFilterChange = (filterValue: string) => {
    if (filterValue !== '') setPage(0);
    setFilter(filterValue);
  }

  const nextPage = () => {
    setPage((pvPage) => pvPage + 1);
  };

  const previousPage = () => {
    if (page !== 0) setPage((pvPage) => pvPage - 1);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Mission List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mb="3">
        <FilterBar placeholder='Filter by mission name' onFilterChange={handleFilterChange} />
      </Box>
      
      {loading &&<Loader />}
      {!loading &&<LaunchList launches={data!.launches} />}

      <Box mt="3" mb="3">
        <Pagination page={page} onNext={nextPage} onPrevious={previousPage} />
      </Box>
    </div>
  )
}

export default Home