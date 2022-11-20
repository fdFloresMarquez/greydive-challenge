import { Routes, Route } from 'react-router-dom';

import { Home, TestScreen } from '@/app/screens';

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/*" />
        <Route element={<TestScreen />} path="/test/:id" />
      </Routes>
    </>
  );
};

export default AppRouter;
