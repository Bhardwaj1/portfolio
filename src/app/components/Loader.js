// components/Loader.jsx
'use client';
export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}
