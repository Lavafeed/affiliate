import styled from 'styled-components';
import useCollapse from 'react-collapsed';
import Link from '../common/Link';

export default ({ linkName, subItems }) => {
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse();

  return (
    <Wrapper>
      <Item to="#" {...getToggleProps()} isOpen={isOpen}>
        <Icon src="/static/img/icon_statistic.svg" icon="stats" />
        <Label>{linkName}</Label>
      </Item>
      <Collapse {...getCollapseProps()}>
        <InnerLinks>
          {subItems.map((item, key) => (
            <SubItem to="#" isActive={false} key={key}>
              {item}
            </SubItem>
          ))}
        </InnerLinks>
      </Collapse>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Item = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: normal;
  color: #1d1e23;
  letter-spacing: 0.5;
  z-index: 99999;
  padding: 16px 28px;

  &:after {
    content: '';
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    background: url(/static/img/icon_down.svg) no-repeat center center;
    display: block;
    width: 16px;
    height: 16px;

    ${props => props.isOpen && `transform: translateY(-50%) rotate(180deg);`}
  }
`;

const Collapse = styled.div``;

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

  &:hover {
    font-weight: bold;
    background-color: rgba(206, 228, 254, 0.24);
    color: #0c79f8;
  }
`;
