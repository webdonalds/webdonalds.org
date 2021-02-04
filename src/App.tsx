import React from 'react';

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center font-sans bg-gray-900 text-gray-000">
      <div className="text-center">
        <img src="/logo512.png" className="h-48 w-48 mx-auto rounded-full" alt="Webdonalds' logo" />
        <p className="py-8 text-5xl font-bold">WebDonalds</p>
        <a href="https://github.com/webdonalds" target="_blank" rel="noreferrer">
          <span className="text-gray-500 hover:text-gray-600 underline cursor-pointer transition-colors">
            GitHub
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
