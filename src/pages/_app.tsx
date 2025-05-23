// pages/_app.tsx
import { AppProps } from "next/app"; // Import AppProps from next/app
import "../app/globals.css"; // Correct path to src/app/globals.css
import "@syncfusion/ej2-base/styles/material.css"; // Syncfusion base styles
import "@syncfusion/ej2-react-schedule/styles/material.css"; // Syncfusion Schedule styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
