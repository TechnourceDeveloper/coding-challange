import React, { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import PagesRoutes from '../routes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient();

function App() {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <PagesRoutes />
        <ToastContainer />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
