import { wrapper } from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
MyApp.getInitialProps = wrapper.getInitialAppProps();

export default wrapper.withRedux(MyApp);
