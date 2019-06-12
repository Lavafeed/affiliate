import styled from 'styled-components';
import { connect } from 'react-redux';
import Link from '../common/Link';
import SubLinks from './SubLinks';
import { mediaMax } from '../../shared/styles';
import { toggleBurgerMenu, hasOverlay } from '../../redux/ducks/layout';

class SideNavigation extends React.Component {
  handleClose = () => {
    this.props.toggleBurgerMenu();
  };
  render() {
    return (
      <Navigation visible={!this.props.visible}>
        <Container>
          <LogoWrapper>
            <Logo src="/static/img/Logo.svg" />
            <CloseButton onClick={this.handleClose}>
              <CloseIcon src="/static/img/icon_close.svg" />
            </CloseButton>
          </LogoWrapper>
          <Item to="#">
            <Icon src="/static/img/icon_home.svg" icon="home" />
            <Label>Dashboard</Label>
          </Item>
          <SubLinks linkName="Promotion" subItems={['Promote']} />
          <Item to="#">
            <Icon src="/static/img/icon_payouts.svg" icon="payouts" />
            <Label>Payouts</Label>
          </Item>
          <SubLinks linkName="Statistics" subItems={['Search', 'Stats']} />
          <Item to="#">
            <Icon src="/static/img/icon_cup.svg" icon="info" />
            <Label>Information</Label>
          </Item>
          <SubLinks linkName="Referals" subItems={['About']} />
          <SubLinks
            linkName="Help center"
            subItems={['FAQ', 'Support', 'Tutorial']}
          />
        </Container>
      </Navigation>
    );
  }
}

export default connect(
  state => ({
    visible: hasOverlay(state)
  }),
  dispatch => ({
    toggleBurgerMenu: () => dispatch(toggleBurgerMenu())
  })
)(SideNavigation);

const Navigation = styled.nav`
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 224px;
  background-color: #4c4c4c;
  padding-top: 24px;
  z-index: 2020;
  border: solid 1px rgba(225, 225, 226, 0.56);
  background-color: #ffffff;
  overflow-y: scroll;

  ${mediaMax.tablet`
    ${props => (!props.visible ? 'display: block;' : 'display: none;')}
    z-index: 2021;
    top: 0;
    border-radius: 4px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.04);
    border: solid 1px rgba(225, 225, 226, 0.56);
    background-color: #ffffff;
    height: 479px;
    margin: 4px 4px 0 4px;
    width: calc(100% - 8px);
    padding: 22px 14px 34px;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  display: none;

  ${mediaMax.tablet`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px 35px 24px;
  `}
`;

const Logo = styled.img``;

const CloseButton = styled.button``;

const CloseIcon = styled.img``;

const Item = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: normal;
  color: #1d1e23;
  letter-spacing: 0.5;
  z-index: 99999;
  padding: 16px 28px;
`;

const InnerLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img.attrs(({ src }) => ({
  src,
  alt: 'link icon',
  title: 'link icon'
}))`
  width: 22px;
  object-fit: contain;
  margin-right: 21px;
`;

const Label = styled.div``;

const SubItem = styled(Link)`
  padding: 16px 0 16px 82px;
  font-weight: normal;
  color: #1d1e23;
  letter-spacing: 0.5;

  ${props =>
    props.isActive &&
    `
      font-weight: bold;
    background-color: rgba(206, 228, 254, 0.24);
    color: #0c79f8;
  `}
`;
