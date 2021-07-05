import React from 'react';
import { RecoilRoot } from 'recoil';
import Router from './Router';

const Container = () => (
  <RecoilRoot>
    <Router />
  </RecoilRoot>
);

export default Container;
