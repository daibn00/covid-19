import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Loader
    type="ThreeDots"
    color="#00BFFF"
    height={30}
    width={30} />
  );
}

export default Spinner;
