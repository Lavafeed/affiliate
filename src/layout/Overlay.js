import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from '../common/Link';
import { toggleBurgerMenu, hasOverlay } from '../../redux/ducks/layout';

class AppOverlay extends React.Component {
  handleOutsideClick = () => this.props.toggleBurgerMenu();

  render() {
    return this.props.visible && <Overlay onClick={this.handleOutsideClick} />;
  }
}

export default connect(
  state => ({
    visible: hasOverlay(state)
  }),
  dispatch => ({
    toggleBurgerMenu: () => dispatch(toggleBurgerMenu())
  })
)(AppOverlay);

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1020;
  background-color: rgba(29, 30, 35, 0.72);
`;
