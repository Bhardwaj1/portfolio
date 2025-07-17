'use client';
export default function Footer() {
    return (
      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 mt-10">
        © {new Date().getFullYear()} Gaurav Bhardwaj. All rights reserved.
      </footer>
    );
  }
  