import styled from 'styled-components';
import { connect } from 'react-redux';
import Question from './Question';
import {
  getCurrentCategory,
  getListOfCategory
} from '../../redux/ducks/categories';
import { mediaMax } from '../../shared/styles';
import { capitalizeWords } from '../../shared/helpers/utils';

class Questions extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <Wrapper>
        <TitleWrapper>
          <Title onClick={this.handleClick}>Questions</Title>
          <SearchBar>
            <Icon src="/static/img/icon_search.svg" />
            <Caption>Search</Caption>
          </SearchBar>
        </TitleWrapper>
        <ContentWrapper>
          <CategoryTitle>
            <CategoryName>
              {capitalizeWords(category)} <QuestionsAmount>16</QuestionsAmount>
            </CategoryName>
          </CategoryTitle>
          {this.props.list.map((item, key) => (
            <Question question={item.question} answer={item.answer} key={key} />
          ))}
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default connect(state => ({
  category: getCurrentCategory(state),
  list: getListOfCategory(state)
}))(Questions);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  max-height: 757px;
  border-radius: 4px;
  border: solid 1px rgba(225, 225, 226, 0.56);
  background-color: #ffffff;

  ${mediaMax.tablet`
    order: 3;
    max-height: 100%;
        max-width: 100%;
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: solid 1px #f1f1f1;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #1d1e23;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 12px;
`;

const Caption = styled.span`
  line-height: 1.71;
  letter-spacing: normal;
  color: #1d1e23;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

const CategoryTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 0;
`;

const CategoryName = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: #8a8c8f;
  margin-right: 8px;
`;

const QuestionsAmount = styled.span`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: 0.6px;
  color: #b1b2b4;
`;
