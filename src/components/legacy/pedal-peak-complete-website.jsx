import React, { useState, useEffect } from "react";

/**
 * PEDAL PEAK COMPLETE WEBSITE COMPONENT
 * Single file to paste into Framer as a Code Component
 * Includes all styles and components
 */

export default function PedalPeakWebsite() {
  return (
    <>
      {/* Global Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* PEDAL PEAK DESIGN SYSTEM */
        
        /* CSS Variables */
        :root {
          --color-primary-50: #f0fdf4;
          --color-primary-100: #dcfce7;
          --color-primary-200: #bbf7d0;
          --color-primary-300: #86efac;
          --color-primary-400: #4ade80;
          --color-primary-500: #22c55e;
          --color-primary-600: #16a34a;
          --color-primary-700: #15803d;
          --color-primary-800: #166534;
          --color-primary-900: #14532d;
          
          --color-gray-50: #f9fafb;
          --color-gray-100: #f3f4f6;
          --color-gray-200: #e5e7eb;
          --color-gray-300: #d1d5db;
          --color-gray-400: #9ca3af;
          --color-gray-500: #6b7280;
          --color-gray-600: #4b5563;
          --color-gray-700: #374151;
          --color-gray-800: #1f2937;
          --color-gray-900: #111827;
          
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --space-1: 0.25rem;
          --space-2: 0.5rem;
          --space-3: 0.75rem;
          --space-4: 1rem;
          --space-5: 1.25rem;
          --space-6: 1.5rem;
          --space-8: 2rem;
          --space-10: 2.5rem;
          --space-12: 3rem;
          --space-16: 4rem;
          --space-20: 5rem;
          --space-24: 6rem;
          
          --radius-sm: 0.125rem;
          --radius-base: 0.25rem;
          --radius-md: 0.375rem;
          --radius-lg: 0.5rem;
          --radius-xl: 0.75rem;
          --radius-2xl: 1rem;
          --radius-3xl: 1.5rem;
          --radius-full: 9999px;
          
          --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          --shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
          --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        
        /* Global Styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: var(--font-sans);
          line-height: 1.5;
          color: var(--color-gray-900);
          background-color: white;
          -webkit-font-smoothing: antialiased;
        }
        
        /* Typography */
        .heading-1 {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--color-gray-900);
        }
        
        .heading-2 {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
          color: var(--color-gray-900);
        }
        
        .heading-3 {
          font-size: 1.875rem;
          font-weight: 600;
          line-height: 1.3;
          color: var(--color-gray-900);
        }
        
        .heading-4 {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          color: var(--color-gray-900);
        }
        
        .body-large {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--color-gray-700);
        }
        
        .body-regular {
          font-size: 1rem;
          line-height: 1.5;
          color: var(--color-gray-700);
        }
        
        .body-small {
          font-size: 0.875rem;
          line-height: 1.4;
          color: var(--color-gray-600);
        }
        
        .caption {
          font-size: 0.75rem;
          font-weight: 500;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-gray-500);
        }
        
        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 250ms ease;
          font-family: inherit;
          white-space: nowrap;
        }
        
        .btn-primary {
          background-color: var(--color-primary-500);
          color: white;
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-6);
          font-size: 0.875rem;
          box-shadow: var(--shadow-sm);
        }
        
        .btn-primary:hover {
          background-color: var(--color-primary-600);
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          background-color: white;
          color: var(--color-gray-700);
          border: 1px solid var(--color-gray-300);
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-6);
          font-size: 0.875rem;
        }
        
        .btn-secondary:hover {
          background-color: var(--color-gray-50);
          border-color: var(--color-gray-400);
        }
        
        .btn-ghost {
          background-color: transparent;
          color: var(--color-gray-600);
          border: none;
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-6);
          font-size: 0.875rem;
        }
        
        .btn-ghost:hover {
          background-color: var(--color-gray-100);
          color: var(--color-gray-900);
        }
        
        .btn-large {
          padding: var(--space-4) var(--space-8);
          font-size: 1rem;
          border-radius: var(--radius-xl);
        }
        
        /* Cards */
        .card {
          background-color: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-base);
          border: 1px solid var(--color-gray-200);
          overflow: hidden;
          transition: all 250ms ease;
        }
        
        .card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }
        
        .card-header {
          padding: var(--space-6);
          border-bottom: 1px solid var(--color-gray-100);
        }
        
        .card-content {
          padding: var(--space-6);
        }
        
        .card-footer {
          padding: var(--space-6);
          border-top: 1px solid var(--color-gray-100);
          background-color: var(--color-gray-50);
        }
        
        /* Badges */
        .badge {
          display: inline-flex;
          align-items: center;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        
        .badge-success {
          background-color: var(--color-primary-100);
          color: var(--color-primary-800);
        }
        
        .badge-warning {
          background-color: #fef3c7;
          color: #92400e;
        }
        
        .badge-error {
          background-color: #fecaca;
          color: #991b1b;
        }
        
        .badge-gray {
          background-color: var(--color-gray-100);
          color: var(--color-gray-700);
        }
        
        /* Layout */
        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--space-4);
        }
        
        @media (min-width: 768px) {
          .container {
            padding: 0 var(--space-6);
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            padding: 0 var(--space-8);
          }
        }
        
        .section {
          padding: var(--space-16) 0;
        }
        
        .section-large {
          padding: var(--space-24) 0;
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        
        @media (min-width: 768px) {
          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .grid-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        
        @media (min-width: 768px) {
          .grid-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }
        
        /* Utilities */
        .space-y-1 > * + * { margin-top: 0.25rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-8 > * + * { margin-top: 2rem; }
        
        .space-x-1 > * + * { margin-left: 0.25rem; }
        .space-x-2 > * + * { margin-left: 0.5rem; }
        .space-x-3 > * + * { margin-left: 0.75rem; }
        .space-x-4 > * + * { margin-left: 1rem; }
        .space-x-6 > * + * { margin-left: 1.5rem; }
        .space-x-8 > * + * { margin-left: 2rem; }
        
        .text-center { text-align: center; }
        .text-white { color: white; }
        .text-green-500 { color: var(--color-primary-500); }
        .text-gray-400 { color: var(--color-gray-400); }
        .text-gray-500 { color: var(--color-gray-500); }
        .text-gray-600 { color: var(--color-gray-600); }
        .text-gray-700 { color: var(--color-gray-700); }
        
        .bg-white { background-color: white; }
        .bg-gray-50 { background-color: var(--color-gray-50); }
        .bg-gray-100 { background-color: var(--color-gray-100); }
        .bg-gray-200 { background-color: var(--color-gray-200); }
        .bg-gray-800 { background-color: var(--color-gray-800); }
        .bg-gray-900 { background-color: var(--color-gray-900); }
        .bg-green-50 { background-color: var(--color-primary-50); }
        .bg-green-100 { background-color: var(--color-primary-100); }
        .bg-green-400 { background-color: var(--color-primary-400); }
        .bg-green-500 { background-color: var(--color-primary-500); }
        .bg-green-600 { background-color: var(--color-primary-600); }
        
        .border { border-width: 1px; }
        .border-gray-100 { border-color: var(--color-gray-100); }
        .border-gray-200 { border-color: var(--color-gray-200); }
        .border-gray-300 { border-color: var(--color-gray-300); }
        .border-gray-700 { border-color: var(--color-gray-700); }
        .border-gray-800 { border-color: var(--color-gray-800); }
        .border-green-200 { border-color: var(--color-primary-200); }
        
        .rounded { border-radius: var(--radius-base); }
        .rounded-lg { border-radius: var(--radius-lg); }
        .rounded-xl { border-radius: var(--radius-xl); }
        .rounded-2xl { border-radius: var(--radius-2xl); }
        .rounded-3xl { border-radius: var(--radius-3xl); }
        .rounded-full { border-radius: var(--radius-full); }
        
        .shadow-sm { box-shadow: var(--shadow-sm); }
        .shadow { box-shadow: var(--shadow-base); }
        .shadow-md { box-shadow: var(--shadow-md); }
        .shadow-lg { box-shadow: var(--shadow-lg); }
        .shadow-xl { box-shadow: var(--shadow-xl); }
        .shadow-2xl { box-shadow: var(--shadow-2xl); }
        
        .flex { display: flex; }
        .inline-flex { display: inline-flex; }
        .grid { display: grid; }
        .hidden { display: none; }
        .block { display: block; }
        
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .max-w-sm { max-width: 24rem; }
        .max-w-md { max-width: 28rem; }
        .max-w-lg { max-width: 32rem; }
        .max-w-xl { max-width: 36rem; }
        .max-w-2xl { max-width: 42rem; }
        .max-w-3xl { max-width: 48rem; }
        
        .mx-auto { margin-left: auto; margin-right: auto; }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mt-1 { margin-top: 0.25rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-3 { margin-top: 0.75rem; }
        .mt-4 { margin-top: 1rem; }
        .ml-2 { margin-left: 0.5rem; }
        .mr-2 { margin-right: 0.5rem; }
        
        .p-1 { padding: 0.25rem; }
        .p-2 { padding: 0.5rem; }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .p-12 { padding: 3rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .pt-2 { padding-top: 0.5rem; }
        .pt-3 { padding-top: 0.75rem; }
        .pt-4 { padding-top: 1rem; }
        
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        .text-6xl { font-size: 3.75rem; line-height: 1; }
        
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }
        
        .leading-tight { line-height: 1.25; }
        .leading-none { line-height: 1; }
        
        .opacity-80 { opacity: 0.8; }
        
        .overflow-hidden { overflow: hidden; }
        
        .transition-all { transition-property: all; }
        .transition-colors { transition-property: background-color, border-color, color, fill, stroke; }
        .transition-shadow { transition-property: box-shadow; }
        .duration-300 { transition-duration: 300ms; }
        
        .hover\\:bg-gray-50:hover { background-color: var(--color-gray-50); }
        .hover\\:bg-gray-100:hover { background-color: var(--color-gray-100); }
        .hover\\:bg-gray-700:hover { background-color: var(--color-gray-700); }
        .hover\\:text-white:hover { color: white; }
        .hover\\:text-gray-900:hover { color: var(--color-gray-900); }
        .hover\\:text-primary:hover { color: var(--color-primary-500); }
        .hover\\:shadow-lg:hover { box-shadow: var(--shadow-lg); }
        
        .focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
        .focus\\:ring-2:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }
        .focus\\:ring-green-500:focus { --tw-ring-color: var(--color-primary-500); }
        .focus\\:border-transparent:focus { border-color: transparent; }
        .focus\\:border-green-500:focus { border-color: var(--color-primary-500); }
        
        .aspect-\\[4\\/3\\] { aspect-ratio: 4 / 3; }
        .aspect-\\[3\\/2\\] { aspect-ratio: 3 / 2; }
        
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .gap-12 { gap: 3rem; }
        
        .sticky { position: sticky; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .fixed { position: fixed; }
        .top-0 { top: 0; }
        .bottom-0 { bottom: 0; }
        .left-0 { left: 0; }
        .right-0 { right: 0; }
        .top-4 { top: 1rem; }
        .right-3 { right: 0.75rem; }
        .right-4 { right: 1rem; }
        .left-4 { left: 1rem; }
        .-top-4 { top: -1rem; }
        .-right-4 { right: -1rem; }
        .-bottom-4 { bottom: -1rem; }
        .-left-4 { left: -1rem; }
        
        .z-10 { z-index: 10; }
        .z-40 { z-index: 40; }
        .z-50 { z-index: 50; }
        
        .flex-1 { flex: 1 1 0%; }
        .flex-shrink-0 { flex-shrink: 0; }
        .flex-wrap { flex-wrap: wrap; }
        .flex-col { flex-direction: column; }
        
        .border-t { border-top-width: 1px; }
        .border-b { border-bottom-width: 1px; }
        
        .w-3 { width: 0.75rem; }
        .w-6 { width: 1.5rem; }
        .w-8 { width: 2rem; }
        .w-10 { width: 2.5rem; }
        .w-12 { width: 3rem; }
        .w-16 { width: 4rem; }
        .w-20 { width: 5rem; }
        .h-2 { height: 0.5rem; }
        .h-3 { height: 0.75rem; }
        .h-6 { height: 1.5rem; }
        .h-8 { height: 2rem; }
        .h-10 { height: 2.5rem; }
        .h-12 { height: 3rem; }
        .h-16 { height: 4rem; }
        
        .min-h-screen { min-height: 100vh; }
        
        .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-green-50 { --tw-gradient-from: var(--color-primary-50); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(240, 253, 244, 0)); }
        .from-green-400 { --tw-gradient-from: var(--color-primary-400); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(74, 222, 128, 0)); }
        .from-blue-400 { --tw-gradient-from: #60a5fa; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 165, 250, 0)); }
        .via-white { --tw-gradient-stops: var(--tw-gradient-from), white, var(--tw-gradient-to, rgba(255, 255, 255, 0)); }
        .via-green-400 { --tw-gradient-stops: var(--tw-gradient-from), var(--color-primary-400), var(--tw-gradient-to, rgba(74, 222, 128, 0)); }
        .to-blue-50 { --tw-gradient-to: #eff6ff; }
        .to-blue-500 { --tw-gradient-to: #3b82f6; }
        .to-green-500 { --tw-gradient-to: var(--color-primary-500); }
        .to-green-600 { --tw-gradient-to: var(--color-primary-600); }
        .to-purple-500 { --tw-gradient-to: #a855f7; }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .col-span-2 { grid-column: span 2 / span 2; }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        
        @media (min-width: 640px) {
          .sm\\:flex-row { flex-direction: row; }
          .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        }
        
        @media (min-width: 768px) {
          .md\\:hidden { display: none; }
          .md\\:flex { display: flex; }
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .md\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
          .md\\:flex-row { flex-direction: row; }
          .md\\:items-center { align-items: center; }
          .md\\:space-x-8 > * + * { margin-left: 2rem; }
          .md\\:space-y-0 > * + * { margin-top: 0; }
          .md\\:p-12 { padding: 3rem; }
        }
        
        .uppercase { text-transform: uppercase; }
        .tracking-wide { letter-spacing: 0.025em; }
        
        .backdrop-blur { backdrop-filter: blur(8px); }
        
        .border-l { border-left-width: 1px; }
        .border-r { border-right-width: 1px; }
        
        .-ml-1 { margin-left: -0.25rem; }
        
        .italic { font-style: italic; }
        
        .text-yellow-400 { color: #fbbf24; }
        .text-green-600 { color: var(--color-primary-600); }
        .text-green-700 { color: var(--color-primary-700); }
        .text-blue-800 { color: #1e40af; }
        
        .col-span-1 { grid-column: span 1 / span 1; }
        
        input[type="text"],
        input[type="email"],
        input[type="date"] {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--color-gray-300);
          border-radius: var(--radius-lg);
          font-size: 1rem;
          font-family: inherit;
          transition: all 250ms ease;
        }
        
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="date"]:focus {
          outline: none;
          border-color: var(--color-primary-500);
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
        }
        
        input[type="text"]::placeholder,
        input[type="email"]::placeholder {
          color: var(--color-gray-400);
        }
        
        .placeholder-gray-400::placeholder { color: var(--color-gray-400); }
        
        @media (max-width: 767px) {
          .heading-1 { font-size: 2rem; }
          .heading-2 { font-size: 1.75rem; }
          .heading-3 { font-size: 1.5rem; }
          .heading-4 { font-size: 1.25rem; }
        }
      `,
        }}
      />

      {/* Main Website */}
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <UpcomingRides />
        <TravelDestinations />
        <CommunityStats />
        <Footer />
      </div>
    </>
  );
}

// Navigation Component
function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Rides", href: "#rides" },
    { name: "Travel", href: "#travel" },
    { name: "Community", href: "#community" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600">
              <span className="text-sm font-bold text-white">🚴</span>
            </div>
            <span className="heading-4" style={{ margin: 0 }}>
              pedal-peak
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="body-regular font-medium text-gray-600 transition-colors hover:text-gray-900"
                style={{ textDecoration: "none" }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-3 md:flex">
            <button className="btn btn-ghost">Sign In</button>
            <button className="btn btn-primary">Join Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="animate-fade-in border-t border-gray-200 py-4 md:hidden">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="body-regular block font-medium text-gray-600 transition-colors hover:text-gray-900"
                  style={{ textDecoration: "none" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <button className="btn btn-ghost w-full">Sign In</button>
                <button className="btn btn-primary w-full">Join Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="section-large bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container">
        <div className="grid-2 items-center gap-12">
          {/* Content Side */}
          <div className="animate-slide-in-left space-y-8">
            <div className="space-y-6">
              <h1 className="heading-1">
                Find Your Next
                <span className="block text-green-500">Adventure</span>
              </h1>
              <p className="body-large max-w-md text-gray-600">
                From chill loops to epic escapes. Join a community of cyclists
                who ride for the love of it. No egos, just good vibes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="btn btn-primary btn-large">
                <span className="mr-2">🔍</span>
                Find Rides
              </button>
              <button className="btn btn-secondary btn-large">
                <span className="mr-2">✈️</span>
                Plan Trip
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="heading-3 text-green-500">1,247</div>
                <div className="caption text-gray-500">Active Riders</div>
              </div>
              <div className="text-center">
                <div className="heading-3 text-green-500">23</div>
                <div className="caption text-gray-500">Cities</div>
              </div>
              <div className="text-center">
                <div className="heading-3 text-green-500">156</div>
                <div className="caption text-gray-500">Routes</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="animate-slide-in-right relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-green-400 to-blue-500 shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="space-y-4 text-center text-white">
                  <div className="text-6xl">🚴‍♀️</div>
                  <div className="body-large font-medium">
                    Scenic cycling adventure
                  </div>
                  <div className="body-small opacity-80">
                    Replace with actual cycling image/video
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div
              className="animate-fade-in absolute -top-4 -right-4 rounded-xl bg-white p-4 shadow-lg"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <span className="body-small font-medium">Live tracking</span>
              </div>
            </div>

            <div
              className="animate-fade-in absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">⭐</span>
                <span className="body-small font-medium">4.9 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ride Card Component
function RideCard({ ride }) {
  const getDifficultyBadge = (difficulty) => {
    const classes = {
      Easy: "badge badge-success",
      Moderate: "badge badge-warning",
      Hard: "badge badge-error",
      Expert: "badge badge-error",
    };
    return classes[difficulty] || "badge badge-gray";
  };

  const getTypeIcon = (type) => {
    const icons = {
      Road: "🚴",
      Gravel: "🚵",
      Mountain: "⛰️",
      Casual: "🚲",
    };
    return icons[type] || "🚴";
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4
              className="heading-4"
              style={{ margin: 0, fontSize: "1.25rem" }}
            >
              {ride.title}
            </h4>
            <p className="body-small text-gray-500">
              {ride.date} • {ride.time}
            </p>
          </div>
          <div className={getDifficultyBadge(ride.difficulty)}>
            {ride.difficulty}
          </div>
        </div>
      </div>

      <div className="card-content space-y-3">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="flex items-center space-x-1">
            <span>{getTypeIcon(ride.rideType)}</span>
            <span>{ride.rideType}</span>
          </span>
          <span>📏 {ride.distance}mi</span>
          <span>⛰️ {ride.elevation}ft</span>
        </div>

        <p className="body-small text-gray-600">📍 {ride.location}</p>

        <div className="flex items-center justify-between">
          <span className="body-small text-gray-500">
            👥 {ride.currentRiders}/{ride.maxRiders} riders
          </span>
          <div className="h-2 w-16 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-green-400 transition-all"
              style={{
                width: `${(ride.currentRiders / ride.maxRiders) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="flex gap-2">
          <button className="btn btn-secondary btn-small flex-1">
            Details
          </button>
          <button className="btn btn-primary btn-small flex-1">
            Join Ride
          </button>
        </div>
      </div>
    </div>
  );
}

// Upcoming Rides Section
function UpcomingRides() {
  const sampleRides = [
    {
      id: 1,
      title: "Marin Headlands Challenge",
      date: "Sat, Jun 22",
      time: "7:00 AM",
      distance: "45",
      difficulty: "Hard",
      elevation: "2,800",
      rideType: "Road",
      location: "Sausalito Ferry",
      pace: "16-18 mph",
      currentRiders: 8,
      maxRiders: 15,
      cost: 0,
      leaderName: "Sarah M.",
      leaderInitials: "SM",
      status: "open",
    },
    {
      id: 2,
      title: "Gravel Explorer",
      date: "Sun, Jun 23",
      time: "8:30 AM",
      distance: "30",
      difficulty: "Moderate",
      elevation: "1,200",
      rideType: "Gravel",
      location: "Golden Gate Park",
      pace: "12-15 mph",
      currentRiders: 12,
      maxRiders: 20,
      cost: 0,
      leaderName: "Mike T.",
      leaderInitials: "MT",
      status: "open",
    },
    {
      id: 3,
      title: "Evening Loop",
      date: "Wed, Jun 26",
      time: "6:00 PM",
      distance: "20",
      difficulty: "Easy",
      elevation: "500",
      rideType: "Casual",
      location: "Crissy Field",
      pace: "10-12 mph",
      currentRiders: 15,
      maxRiders: 25,
      cost: 0,
      leaderName: "Lisa K.",
      leaderInitials: "LK",
      status: "open",
    },
  ];

  return (
    <section className="section bg-white" id="rides">
      <div className="container">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="heading-2">Upcoming Rides</h2>
          <p className="body-large mx-auto max-w-2xl text-gray-600">
            Join riders in your area for your next adventure. All skill levels
            welcome.
          </p>
        </div>

        {/* Rides Grid */}
        <div className="grid-3 mb-8">
          {sampleRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="btn btn-secondary btn-large">
            View All Rides
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// Travel Destinations Section
function TravelDestinations() {
  const [activeTab, setActiveTab] = useState("packages");

  const destinations = [
    {
      id: 1,
      name: "Mallorca",
      country: "Spain",
      description:
        "Mediterranean cycling paradise with stunning coastal roads and challenging climbs.",
      duration: "7 days",
      priceFrom: 1899,
      difficulty: "Moderate",
      highlights: ["Coastal views", "Historic towns", "Perfect weather"],
      image: "🏝️",
      bestFor: "Road cycling",
      featured: true,
    },
    {
      id: 2,
      name: "Alpine Passes",
      country: "Switzerland",
      description:
        "Conquer legendary mountain passes through breathtaking Alpine scenery.",
      duration: "10 days",
      priceFrom: 2499,
      difficulty: "Hard",
      highlights: ["Epic climbs", "Mountain views", "Swiss hospitality"],
      image: "🏔️",
      bestFor: "Climbing enthusiasts",
      featured: true,
    },
    {
      id: 3,
      name: "Tuscany",
      country: "Italy",
      description:
        "Roll through vineyards and hilltop towns in Italy's most beautiful region.",
      duration: "8 days",
      priceFrom: 2199,
      difficulty: "Moderate",
      highlights: ["Wine tastings", "Rolling hills", "Renaissance art"],
      image: "🍷",
      bestFor: "Cultural cycling",
      featured: true,
    },
  ];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: "badge badge-success",
      Moderate: "badge badge-warning",
      Hard: "badge badge-error",
    };
    return colors[difficulty] || "badge badge-gray";
  };

  return (
    <section className="section bg-gray-50" id="travel">
      <div className="container">
        {/* Header */}
        <div className="mb-12 space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="heading-2">Cycling Adventures Worldwide</h2>
            <p className="body-large mx-auto max-w-3xl text-gray-600">
              From Mediterranean coastlines to Alpine peaks, discover the
              world's best cycling destinations with expert guides and carefully
              planned routes.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
              <div className="flex space-x-1">
                <button
                  className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
                    activeTab === "packages"
                      ? "bg-green-500 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("packages")}
                >
                  🌍 Destinations
                </button>
                <button
                  className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
                    activeTab === "shipping"
                      ? "bg-green-500 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("shipping")}
                >
                  📦 Bike Shipping
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        {activeTab === "packages" && (
          <div className="space-y-8">
            <div className="grid-3">
              {destinations.map((destination) => (
                <div key={destination.id} className="card">
                  {/* Image Header */}
                  <div className="relative">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-t-xl bg-gradient-to-br from-blue-400 via-green-400 to-purple-500">
                      <div className="text-center text-white">
                        <div className="mb-2 text-6xl">{destination.image}</div>
                        <div className="body-small opacity-80">
                          Replace with destination photo
                        </div>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {destination.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="badge badge-success">⭐ Featured</div>
                      </div>
                    )}

                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={getDifficultyColor(destination.difficulty)}
                      >
                        {destination.difficulty}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-content space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="heading-4" style={{ margin: 0 }}>
                          {destination.name}
                        </h3>
                        <span className="body-small text-gray-500">
                          {destination.country}
                        </span>
                      </div>
                      <p className="body-small text-gray-600">
                        {destination.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          📅 {destination.duration}
                        </span>
                        <span className="flex items-center">
                          🚴 {destination.bestFor}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <div className="caption">Highlights</div>
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.map((highlight, index) => (
                            <span
                              key={index}
                              className="badge badge-gray text-xs"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                        <div>
                          <div className="body-small text-gray-500">
                            Starting from
                          </div>
                          <div
                            className="heading-4 text-green-600"
                            style={{ margin: 0 }}
                          >
                            ${destination.priceFrom.toLocaleString()}
                          </div>
                        </div>
                        <div className="body-small text-gray-500">
                          per person
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="card-footer">
                    <button className="btn btn-primary w-full">
                      Learn More
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="btn btn-secondary btn-large">
                View All Destinations
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        )}

        {/* Bike Shipping Calculator */}
        {activeTab === "shipping" && (
          <div className="mx-auto max-w-2xl">
            <div className="card">
              <div className="card-header text-center">
                <h3 className="heading-3" style={{ margin: 0 }}>
                  Bike Shipping Calculator
                </h3>
                <p className="body-regular mt-2 text-gray-600">
                  Ship your bike safely and affordably to any destination
                </p>
              </div>

              <div className="card-content space-y-6">
                <div className="grid-2 gap-4">
                  <div className="space-y-2">
                    <label className="body-small font-medium text-gray-700">
                      From
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="San Francisco, CA"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                      />
                      <span className="absolute top-3 right-3 text-gray-400">
                        📍
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="body-small font-medium text-gray-700">
                      To
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Palma, Mallorca"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                      />
                      <span className="absolute top-3 right-3 text-gray-400">
                        📍
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid-2 gap-4">
                  <div className="space-y-2">
                    <label className="body-small font-medium text-gray-700">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="body-small font-medium text-gray-700">
                      Return Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <button className="btn btn-primary btn-large w-full">
                  Calculate Shipping Cost
                </button>

                {/* Sample Results */}
                <div className="space-y-3 rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="body-regular font-medium">
                      Estimated Cost:
                    </span>
                    <span
                      className="heading-4 text-green-600"
                      style={{ margin: 0 }}
                    >
                      $245
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Delivery Time:</span>
                      <span>3-5 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insurance:</span>
                      <span>✓ Included ($2,000)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tracking:</span>
                      <span>✓ Real-time updates</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button className="btn btn-primary w-full">
                  Book Shipping Service
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Community Stats Section
function CommunityStats() {
  const [counters, setCounters] = useState({
    riders: 0,
    cities: 0,
    routes: 0,
    rides: 0,
  });

  useEffect(() => {
    // Animate counters
    const targets = {
      riders: 1247,
      cities: 23,
      routes: 156,
      rides: 3248,
    };

    const duration = 2000;
    const increment = 20;

    const intervals = {};

    Object.keys(targets).forEach((key) => {
      const target = targets[key];
      const step = target / (duration / increment);

      intervals[key] = setInterval(() => {
        setCounters((prev) => {
          const newValue = Math.min(prev[key] + step, target);
          if (newValue >= target) {
            clearInterval(intervals[key]);
          }
          return { ...prev, [key]: Math.floor(newValue) };
        });
      }, increment);
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, []);

  return (
    <section className="section bg-white" id="community">
      <div className="container">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="heading-2">Join Our Growing Community</h2>
          <p className="body-large mx-auto max-w-2xl text-gray-600">
            Thousands of cyclists have found their tribe with Pedal Peak.
            Discover new routes, make friends, and push your limits together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="animate-fade-in space-y-3 text-center">
            <div className="mb-2 text-4xl">🚴</div>
            <div className="heading-2 text-green-500">
              {counters.riders.toLocaleString()}
            </div>
            <div className="caption text-gray-500">Active Riders</div>
          </div>

          <div
            className="animate-fade-in space-y-3 text-center"
            style={{ animationDelay: "200ms" }}
          >
            <div className="mb-2 text-4xl">📍</div>
            <div className="heading-2 text-green-500">{counters.cities}</div>
            <div className="caption text-gray-500">Cities</div>
          </div>

          <div
            className="animate-fade-in space-y-3 text-center"
            style={{ animationDelay: "400ms" }}
          >
            <div className="mb-2 text-4xl">🗺️</div>
            <div className="heading-2 text-green-500">{counters.routes}</div>
            <div className="caption text-gray-500">Routes</div>
          </div>

          <div
            className="animate-fade-in space-y-3 text-center"
            style={{ animationDelay: "600ms" }}
          >
            <div className="mb-2 text-4xl">🏆</div>
            <div className="heading-2 text-green-500">
              {counters.rides.toLocaleString()}
            </div>
            <div className="caption text-gray-500">Rides Completed</div>
          </div>
        </div>

        {/* Community Features */}
        <div className="rounded-3xl bg-gradient-to-r from-green-50 to-blue-50 p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="heading-3">Why Riders Love Pedal Peak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">
                      Inclusive Community
                    </div>
                    <div className="body-small text-gray-600">
                      All skill levels welcome, from beginners to pros
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">Safety First</div>
                    <div className="body-small text-gray-600">
                      Experienced ride leaders and safety protocols
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">
                      Expert Routes
                    </div>
                    <div className="body-small text-gray-600">
                      Carefully curated rides for every preference
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">
                      Global Adventures
                    </div>
                    <div className="body-small text-gray-600">
                      From local rides to international cycling tours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Member Testimonial */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <span className="font-medium text-green-700">SM</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">
                      Sarah Martinez
                    </div>
                    <div className="body-small text-gray-500">
                      Ride Leader • 47 rides
                    </div>
                  </div>
                </div>
                <p className="body-regular text-gray-700 italic">
                  "I've met some of my best friends through Pedal Peak. The
                  community is incredibly welcoming, and there's always a ride
                  that matches my mood and fitness level."
                </p>
                <div className="mt-3 flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>

              {/* Join CTA */}
              <div className="text-center">
                <button className="btn btn-primary btn-large">
                  Join the Community
                  <span className="ml-2">→</span>
                </button>
                <p className="body-small mt-2 text-gray-500">
                  Free to join • Start riding in minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Find Rides", href: "#rides" },
      { name: "Host a Ride", href: "#host" },
      { name: "Join Groups", href: "#groups" },
      { name: "Plan Travel", href: "#travel" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Safety Guidelines", href: "#safety" },
      { name: "Contact Us", href: "#contact" },
      { name: "Report Issue", href: "#report" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
      { name: "Blog", href: "#blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Guidelines", href: "#guidelines" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Signup */}
      <div className="border-b border-gray-800">
        <div className="container py-12">
          <div className="mx-auto max-w-xl space-y-6 text-center">
            <h3 className="heading-3 text-white">Stay in the Loop</h3>
            <p className="body-regular text-gray-300">
              Get weekly ride updates, travel deals, and cycling tips delivered
              to your inbox.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-green-500 focus:outline-none"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
            <p className="body-small text-gray-400">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600">
                <span className="text-sm font-bold text-white">🚴</span>
              </div>
              <span className="heading-4 text-white">pedal-peak</span>
            </div>
            <p className="body-regular max-w-sm text-gray-300">
              Connecting cyclists worldwide through shared adventures,
              expert-led tours, and an inclusive community that celebrates the
              joy of riding.
            </p>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="body-regular font-semibold text-white">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-small text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="body-regular font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-small text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="body-regular font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-small text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="body-regular font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-small text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="body-small text-gray-400">
              © {currentYear} Pedal Peak. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="body-small text-gray-400">
                Made with ❤️ for cyclists
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
