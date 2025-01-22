import React from 'react';

import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <div className='flex justify-center content-center'>
    <InfinitySpin color="grey" />
  </div>
);

export default Loader;