import '@/styles/globals.css'
import type * as app from "next/app";

import "./index.css";

export default function App({ Component, pageProps }: app.AppProps) {
  return <Component {...pageProps} />;
}
