import React, { Suspense } from 'react';
import Loading from './Loading';

interface IWC {
  (page: string): React.FC;
}

const Loader: IWC = (page) => {
  const Page = React.lazy(() => import(`@container/pages${page}.tsx`));
  return () => (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
};

export default Loader;
