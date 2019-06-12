import styled from 'styled-components';
import { connect } from 'react-redux';
import Tippy from '@tippy.js/react';
import {
  hasOverlay,
  toggleNotifications,
  toggleBurgerMenu
} from '../../redux/ducks/layout';
import { container, mediaMax } from '../../shared/styles';

import Link from '../common/Link';

class Header extends React.Component {
  refLink = React.createRef();

  handleOpenBurgerMenu = () => {
    this.props.toggleBurgerMenu();
  };

  copyToClipboard = e => {
    const node = this.refLink.current;

    e.preventDefault();
    node.select();
    document.execCommand('copy');
  };

  render() {
    return (
      <Wrapper visible={!this.props.visible}>
        <Container>
          <BurgerMenu onClick={this.handleOpenBurgerMenu}>
            <Icon src="/static/img/icon_burger_menu.svg" />
          </BurgerMenu>
          <Logo src="/static/img/Logo.svg" />
          <Caption>Ref:</Caption>
          <RefLink>docs/patterns/alerts.html</RefLink>
          <HiddenInput
            type="text"
            defaultValue="docs/patterns/alerts.html"
            ref={this.refLink}
          />
          <CopyLink onClick={this.copyToClipboard} to="#">
            <Tippy content="Copied to Clipboard!" trigger="click">
              <Icon src="/static/img/icon_copy.svg" />
            </Tippy>
          </CopyLink>
          <DepositWrapper>
            <Icon src="/static/img/icon_balance.svg" wallet />
            <Balance>30 000 348.12 ₽</Balance>
            <Deposit to="#">Deposit</Deposit>
          </DepositWrapper>
          <NotificationButton onClick={this.props.toggleNotifications}>
            <Icon src="/static/img/icon_notification.svg" />
          </NotificationButton>
          <Avatar src="/static/img/avatar.jpg" />
        </Container>
      </Wrapper>
    );
  }
}

export default connect(
  state => ({
    visible: hasOverlay(state)
  }),
  dispatch => ({
    toggleNotifications: () => dispatch(toggleNotifications()),
    toggleBurgerMenu: () => dispatch(toggleBurgerMenu())
  })
)(Header);

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  padding: 15px 0 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.04);
  border: solid 1px #e1e1e2;
  background-color: #ffffff;
  z-index: 2020;

  ${props =>
    !props.visible &&
    `
    display: none;
  `}
`;

const Container = styled.div`
  ${container};
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const BurgerMenu = styled.button`
  display: none;
  margin-right: auto;
  ${mediaMax.tablet`
    display: block;
  `}
`;

const Logo = styled.img.attrs(({ src }) => ({
  src,
  alt: 'logotype picture',
  title: 'logotype picture'
}))`
  margin-right: 132px;
  ${mediaMax.tablet`
    display: none;
  `}
`;

const Caption = styled.span`
  font-size: 12px;
  line-height: 1.33;
  color: #1d1e23;
  margin-right: 4px;
  ${mediaMax.tablet`
    display: none;
  `}
`;
const RefLink = styled.span`
  font-size: 12px;
  line-height: 1.33;
  color: #8a8c8f;
  margin-right: 55px;
  ${mediaMax.tablet`
    display: none;
  `}
`;

const HiddenInput = styled.input`
  position: absolute;
  z-index: -9999;
  opacity: 0;
  ${mediaMax.tablet`
    display: none;
  `}
`;

const CopyLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: solid 1px #f1f1f1;
  width: 32px;
  height: 32px;
  margin-right: auto;
  outline: 0;
  ${mediaMax.tablet`
    display: none;
  `}
`;

const Icon = styled.img.attrs(({ src }) => ({
  src,
  alt: `${src} icon`,
  title: `${src} icon`
}))`
  height: 16px;
  width: 16px;

  ${props =>
    props.wallet &&
    `
  margin-right: 8px`}
`;

const DepositWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 16px;
  border: solid 1px #f1f1f1;
  margin-right: 8px;
`;

const Balance = styled.span`
  font-size: 16px;
  color: #1d1e23;
  margin-right: 61px;
  ${mediaMax.tablet`
      margin-right: 0;
  `}
`;

const Deposit = styled(Link)`
  font-size: 14px;
  text-align: center;
  color: #0c79f8;
  ${mediaMax.tablet`
    display: none;
  `}
`;

const NotificationButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: solid 1px #f1f1f1;
  width: 32px;
  height: 32px;
  margin-right: 8px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: solid 1px #ffffff;
    background-color: #ff4c87;
  }
`;

const Avatar = styled.img.attrs(({ src }) => ({
  src,
  alt: 'profile picture',
  title: 'profile picture'
}))`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
