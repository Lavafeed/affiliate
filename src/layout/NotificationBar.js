import styled from 'styled-components';
import { connect } from 'react-redux';
import { getNotifications } from '../../redux/ducks/layout.js';
import NotificationTitle from './NotificationTitle';
import Notification from './Notification';
import Link from '../common/Link';

class NotificationBar extends React.Component {
  render() {
    return (
      <Navigation open={this.props.open}>
        <Container>
          <NotificationTitle title="New notifications" isNew={true} />
          <Notification
            type="helpCenter"
            title="Help center"
            message="A message has arrived from your manager at ticket123"
            isNew={true}
          />
          <Notification
            type="payouts"
            title="Payouts"
            message="You have been charged $1,000 for the current period"
            isNew={true}
          />
          <NotificationTitle title="Watched" isNew={false} />
          <Notification
            type="congratulations"
            title="Congratulations!"
            message="You have successfully added billing information"
            isNew={false}
          />
          <Notification
            type="statistics"
            title="Statistics"
            message="The data in the statistics section has been updated"
            isNew={false}
          />
          <Notification
            type="helpCenter"
            title="Help center"
            message="A message has arrived from your manager at ticket123"
            isNew={false}
          />
          <Notification
            type="payouts"
            title="Payouts"
            message="You have been charged $1,000 for the current period"
            isNew={false}
          />
          <Button>Show All</Button>
        </Container>
      </Navigation>
    );
  }
}

export default connect(state => ({
  open: getNotifications(state)
}))(NotificationBar);

const Navigation = styled.nav`
  position: fixed;
  top: 64px;
  right: 0;
  bottom: 0;
  width: 287px;
  background-color: #4c4c4c;
  z-index: 2020;
  border: solid 1px rgba(225, 225, 226, 0.56);
  background-color: #ffffff;
  transform: translate3d(100%, 0, 0);
  will-change: transform;
  transition: transform 0.25s ease-in-out;
  overflow-y: scroll;
  backface-visibility: hidden;
  ${props => props.open && 'transform: translate3d(0, 0, 0);'};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Button = styled.button`
  line-height: 1.14;
  text-align: center;
  color: #0c79f8;
  padding: 16px 0;
  border-top: solid 1px #f1f1f1;
  margin-top: auto;
`;
