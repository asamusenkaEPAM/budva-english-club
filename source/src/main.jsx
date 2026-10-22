import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { localeHref, supportedLocales } from './i18n';

let preferredLocale = null;
try {
  preferredLocale = window.localStorage.getItem('english-club-locale');
} catch {
  // The language links still work when storage is disabled.
}

const hasExplicitLocale = /\/(en|ru|me|tr|de)\/?$/.test(window.location.pathname);
if (!hasExplicitLocale && supportedLocales.includes(preferredLocale) && preferredLocale !== 'en') {
  window.location.replace(localeHref(preferredLocale));
} else {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
