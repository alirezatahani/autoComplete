import React from 'react';
import { createRoot } from 'react-dom/client';
import { AutoComplete } from './components/autoComplete';
import { AppWrapper } from './index.style';

const Index: React.FC = () => {
  return (
    <AppWrapper>
      <AutoComplete
        name="autoCompleteProducts"
        url="products"
        onChange={(option) => console.log(option)}
      />
    </AppWrapper>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Index />);
