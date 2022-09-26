import React from 'react';
import ContextProvider from './ContextProvider';
import TextItems from './text context/TextItems';

function App() {

  return (
    <>
      <TextItems>
        <ContextProvider />
      </TextItems>
    </>
  );
  
}

export default App;