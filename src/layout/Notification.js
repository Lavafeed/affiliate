import styled from 'styled-components';

const IconTypes = {
  helpCenter: '/static/img/avatar.jpg',
  payouts: '/static/img/Notification_icon_1.svg',
  congratulations: '/static/img/Notification_icon_2.svg',
  statistics: '/static/img/Notification_icon_3.svg'
};

export default ({ type, title, message, isNew }) => (
  <Wrapper isNew={isNew}>
    <Icon src={IconTypes[type]} />
    <Info>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Info>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 16px 21px 16px 16px;
  border-bottom: solid 1px #f1f1f1;
  ${props =>
    props.isNew &&
    `
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
        display: block;
          width: 8px;
        height: 8px;
        border-radius: 50%;
        border: solid 1px #ffffff;
        background-color: #ff4c87;  
      }
  `}
`;

const Icon = styled.img.attrs(({ src }) => ({
  src,
  alt: 'icon',
  title: 'icon'
}))`
  min-width: 32px;
  max-width: 32px;
  min-height: 32px;
  max-height: 32px;
  object-fit: contain;
  margin-right: 16px;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 500;
  line-height: 1.14;
  color: #1d1e23;
  margin-bottom: 4px;
`;

const Message = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.4px;
  color: #3f4044;
`;
