import React from 'react';
import CalculatePrice from '../../../components/CalculatePrice';
import PriceTab from '../../../components/PriceTab';
import Banner from '../../../components/Banner';

const Plans = () => {
  return (
    <div className="pt-20">
      <PriceTab />
      <CalculatePrice />
      <Banner />
    </div>
  );
}

export default Plans;
