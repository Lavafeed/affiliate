import styled from 'styled-components';

export default props => <Wrapper>{props.children}</Wrapper>;

const Wrapper = styled.main`
  position: relative;
`;
