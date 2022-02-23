/* eslint-disable */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Normalize.css';
import Product from './components/Product/Product';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ProductList } from './components/Product';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
          <BrowserRouter>
            <Main />
          </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
