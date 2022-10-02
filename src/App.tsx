import './App.css';
import { useEffect, useState } from 'react';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { animeApi, RootState } from './store';
import Cards from './components/card/Cards';
import { Grid, Pagination } from '@mui/material';
import { Container } from '@mui/system';

const App: React.FC = () => {
  const [page, setPage] = useState('1');
  const { data: data } = animeApi.useGetAllAnimeQuery({
    page: page,
    size: '12',
  });
  console.log(import.meta.env.VITE_RAPID_API_HOST);
  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value.toString());
  };

  return (
    <ApiProvider api={animeApi}>
      <Container maxWidth='lg' sx={{ margin: '10px 0' }}>
        <Grid alignItems='center' direction='column' container rowSpacing={4}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {data &&
              data?.data.map((items: any) => (
                <Grid key={items.id} item xs={4}>
                  <Cards title={items.title} imgUrl={items.image} />
                </Grid>
              ))}
          </Grid>
          <Grid mt={3}>
            <Pagination
              sx={{ color: '#fff' }}
              count={10}
              page={parseInt(page)}
              onChange={onPageChange}
            />
          </Grid>
        </Grid>
      </Container>
    </ApiProvider>
  );
};

export default App;
