import styled from 'styled-components';

export default ({ title, isNew, ...props }) => (
  <Wrapper>
    <Title isNew={isNew}>{title}</Title>
    {isNew && (
      <SettingsButton>
        <Icon src="/static/img/icon_3_dots.svg" />
      </SettingsButton>
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 21px 12px 16px;
`;

const Title = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #8a8c8f;

  ${props =>
    props.isNew &&
    `
  color: #1d1e23;

  `}
`;

const SettingsButton = styled.button`
  display: flex;
`;

const Icon = styled.img.attrs(({ src }) => ({
  src,
  alt: 'link icon',
  title: 'link icon'
}))`
  object-fit: contain;
`;
