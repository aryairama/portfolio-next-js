import { wrapper } from '../redux/store';
import '../styles/globals.css';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'devicon/devicon.min.css';
import { Meta } from '../components/base';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
