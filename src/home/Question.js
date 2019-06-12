import styled from 'styled-components';
import useCollapse from 'react-collapsed';
import { mediaMax } from '../../shared/styles';

export default ({
  question,
  answer = 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
  key
}) => {
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse();

  return (
    <Wrapper key={key}>
      <Question {...getToggleProps()} isOpen={isOpen}>
        {question}
      </Question>
      <AnswerWrapper {...getCollapseProps()}>
        <Answer>{answer}</Answer>
        <DownloadFile>
          <Icon src="/static/img/Notification_icon_1.svg" />
          <FileName>Name of doc.pdf</FileName>
        </DownloadFile>
      </AnswerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 512px;
  padding: 12px 16px;
  border-radius: 4px;
  border: solid 1px rgba(225, 225, 226, 0.64);
  background-color: #ffffff;
  margin: 0 24px;
  -webkit-appearance: none;

  ${mediaMax.tablet`
      margin-bottom: 8px;
      max-width: 100%;
    `}
`;

const Question = styled.div`
  position: relative;
  -webkit-appearance: none;
  cursor: pointer;
  transition: 75ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: url(/static/img/icon_down.svg) no-repeat center center;
    display: block;
    width: 16px;
    height: 16px;
    outline: 0;

    ${props => props.isOpen && `transform: translateY(-50%) rotate(180deg);`}
  }

  &:hover {
    color: #0c79f8;
    &:after {
      background: url(/static/img/icon_down_blue.svg) no-repeat center center;
    }
  }
`;

const AnswerWrapper = styled.div``;

const Answer = styled.p`
  font-size: 13px;
  line-height: 1.69;
  color: #3f4044;
  margin-top: 16px;
`;

const DownloadFile = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

const FileName = styled.span`
  font-size: 12px;
  line-height: 1.67;
  color: #ff8f00;
`;
