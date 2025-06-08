import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

try {
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to initialize React app:', error);
  const fallback = document.createElement('div');
  fallback.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <h1>Application Error</h1>
      <p>An error occurred while loading the application.</p>
      <p>Please try refreshing the page.</p>
    </div>
  `;
  document.getElementById('root')!.appendChild(fallback);
}
