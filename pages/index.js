import Head from 'next/head';
import styled from 'styled-components';
import Categories from '../src/home/Categories';
import Questions from '../src/home/Questions';
import NeedHelp from '../src/home/NeedHelp';
import { mediaMax } from '../shared/styles';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Affiliate One — Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Wrapper>
          <Categories />
          <Questions />
          <NeedHelp />
        </Wrapper>
      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 224px;
  margin-right: 285px;
  padding: 105px 40px 40px 40px;
  ${mediaMax.tablet`
    margin: 0;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 81px;
  `}
`;
