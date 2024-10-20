import React from 'react';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <div className="App bg-cyan-950 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-center mt-8 font-mono mb-5 hover:font-serif text-amber-500 underline">
        Resume Builder
      </h1>
      <ResumeForm />
    </div>
  );
}

export default App;
