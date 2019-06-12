import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyle from '../shared/styles/global.js';
import { theme } from '../shared/styles';
import withReduxStore from '../hocs/with-redux';
import { hasOverlay, setWindowSize } from '../redux/ducks/layout';
import Wrapper from '../src/layout/Wrapper';
import Header from '../src/layout/Header';
import SideNavigation from '../src/layout/SideNavigation';
import NotificationBar from '../src/layout/NotificationBar';
import Overlay from '../src/layout/Overlay';

class MyApp extends App {
  static async getInitialProps({ Component, ctx, ...props }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.props.reduxStore.dispatch(setWindowSize(window.innerWidth));
  };

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Provider store={reduxStore}>
            <Wrapper>
              <Overlay />
              <SideNavigation />
              <NotificationBar />
              <Head>
                <title>Affiliate One</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
              </Head>
              <Header pathname={this.props.router.pathname} />
              <Component {...pageProps} />
            </Wrapper>
          </Provider>
        </ThemeProvider>
        <GlobalStyle />
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
