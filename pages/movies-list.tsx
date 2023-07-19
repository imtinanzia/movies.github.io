'use client';
import React from 'react';
import { Table } from '@app/components';
import { Container } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import { Grid, GridItem, Heading, Box } from '@chakra-ui/react';

type UnitConversion = {
  name: string;
  playing: boolean;
  rating: number;
  views: number;
};

const MovieList = () => {
  const data: UnitConversion[] = [
    {
      name: 'Avengers',
      playing: false,
      rating: 4.7,
      views: 100,
    },
    {
      name: 'John Wick',
      playing: true,
      rating: 9.9,
      views: 200,
    },
    {
      name: 'Dead Reckoning',
      playing: true,
      rating: 8.6,
      views: 150,
    },
  ];

  const columnHelper = createColumnHelper<UnitConversion>();

  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      header: 'Name',
    }),
    columnHelper.accessor('playing', {
      cell: (info) => (info.getValue() === true ? 'Playing' : 'Not Playing'),
      header: 'Now Playing',
    }),
    columnHelper.accessor('views', {
      cell: (info) => info.getValue(),
      header: 'Views',
    }),
    columnHelper.accessor('rating', {
      cell: (info) => info.getValue(),
      header: 'Rating',
      meta: {
        isNumeric: true,
      },
    }),
  ];

  return (
    <Container maxW="container.xl">
      <Box
        sx={{ height: '100vh' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          w="100%"
          templateColumns="repeat(1, 1fr)"
          gap={6}
          textAlign="center"
        >
          <GridItem>
            <Heading as="h1" size="lg">
              Ultimate Moviegoers Guide
            </Heading>
          </GridItem>
          <GridItem>
            <Table columns={columns} data={data} />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default MovieList;
