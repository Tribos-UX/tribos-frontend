// Auth Provider
import { AuthProvider } from "../contexts/auth";

// CSS
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
