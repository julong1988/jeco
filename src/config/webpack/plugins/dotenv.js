import Dotenv from 'dotenv-webpack';
import path from 'path';

export default new Dotenv({
  path: path.resolve(`./.env.${process.env.DOT_ENV}`),
});
