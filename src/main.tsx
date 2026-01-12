import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faf9f6'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #e5e5e5',
      borderTopColor: '#d4a574',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </StrictMode>
  );
}
