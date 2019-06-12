import styled from 'styled-components';
import { connect } from 'react-redux';
import { mediaMax } from '../../shared/styles';
import { getWindowSize } from '../../redux/ducks/layout';

class NeedHelp extends React.Component {
  render() {
    const { windowSize } = this.props;
    return (
      <React.Fragment>
        {windowSize > 768 ? (
          <Wrapper version="desktop">
            <TitleWrapper>
              <Icon src="/static/img/icon_need_help_48px.svg" />
              <Title>Need Help?</Title>
            </TitleWrapper>
            <Helpers>
              Do you have unanswered questions?
              <br />
              Do you have any suggestions?
            </Helpers>
            <Button>Ask a Question</Button>
          </Wrapper>
        ) : (
          <Wrapper version="mobile">
            <TitleWrapper>
              <Icon src="/static/img/icon_need_help_48px.svg" />
              <TextWrapper>
                <Title>Need Help?</Title>
                <Helpers>
                  Do you have unan swered questions?
                  <br />
                  Do you have any suggestions?
                </Helpers>
              </TextWrapper>
            </TitleWrapper>
            <Button>Ask a Question</Button>
          </Wrapper>
        )}
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  windowSize: getWindowSize(state)
}))(NeedHelp);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 272px;
  max-height: 256px;
  padding: 40px 24px 24px;
  border-radius: 4px;
  border: solid 1px rgba(225, 225, 226, 0.56);
  background-color: #ffffff;
  margin-top: 16px;

  ${mediaMax.tablet`
    width: 100%;
    max-width: 100%;
    margin: 0 0 16px;
    order: 2;
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  ${mediaMax.tablet`
    margin-bottom: 16px;
    `}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  margin-right: 16px;
`;

const Title = styled.div`
  line-height: 1.14;
  color: #2a2b30;
`;

const Helpers = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.4px;
  text-align: center;
  color: #b1b2b4;
  margin-bottom: 32px;

  ${mediaMax.tablet`
    text-align: left;
    margin-bottom: 0;
    `}
`;

const Button = styled.button`
  line-height: 1.71;
  letter-spacing: 0.6px;
  text-align: center;
  color: #ffffff;
  border-radius: 4px;
  background-color: #0c79f8;
  padding: 8px 60px 8px 59px;

  ${mediaMax.tablet`
  width: 100%;
    `}
`;
