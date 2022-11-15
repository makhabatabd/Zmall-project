import React from 'react';
import Statistics from '@/components/StatisticModal/Statistics';

const Home = ({result}) => {

  return <Statistics result={result} />;

};


export async function getServerSideProps(){
  const resp = await fetch(`http://188.225.83.42:8001/api/v1/advertisement/statistic/60/`)
  const result = await resp.json()

  return {
    props: { result },
  }
}

export default Home;
