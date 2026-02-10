import { useState } from 'react';
import ProposalPage from './components/ProposalPage';
import RevealPage from './components/RevealPage';

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      {!accepted ? (
        <ProposalPage onAccept={() => setAccepted(true)} />
      ) : (
        <RevealPage />
      )}
    </>
  );
}

export default App;
