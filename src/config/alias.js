import path from 'path';

const pathNM = path.resolve(__dirname, '../node_modules');

const modules = ['react', 'react-dom', '@testing-library/react', 'recoil'];

const alias = {};

modules.forEach((e) => {
  alias[e] = `${pathNM}/${e}`;
});

export default alias;
