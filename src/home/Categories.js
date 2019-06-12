import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCurrentCategory, setCategory } from '../../redux/ducks/categories';
import { mediaMax } from '../../shared/styles';

class Categories extends React.Component {
  handleClick = e => {
    const { id } = e.target;

    this.props.setCategory(id);
  };

  render() {
    const { selectedCategory } = this.props;
    return (
      <Wrapper>
        <HeadingWrapper>
          <Title>Categories</Title>
          <SettingsButton>
            <Icon src="/static/img/icon_3_dots.svg" />
          </SettingsButton>
        </HeadingWrapper>
        <ContentWrapper>
          <Tag
            id="all"
            onClick={this.handleClick}
            active={selectedCategory === 'all'}
          >
            All <Amount>48</Amount>
          </Tag>
          <Tag
            id="popular"
            onClick={this.handleClick}
            active={selectedCategory === 'popular'}
          >
            Popular <Amount>16</Amount>
          </Tag>
          <Tag
            id="statistics"
            onClick={this.handleClick}
            active={selectedCategory === 'statistics'}
          >
            Statistics <Amount>4</Amount>
          </Tag>
          <Tag
            id="payouts"
            onClick={this.handleClick}
            active={selectedCategory === 'payouts'}
          >
            Payouts <Amount>24</Amount>
          </Tag>
          <Tag
            id="promotions"
            onClick={this.handleClick}
            active={selectedCategory === 'promotions'}
          >
            Promotions, SEO <Amount>16</Amount>
          </Tag>
          <Tag
            id="other"
            onClick={this.handleClick}
            active={selectedCategory === 'other'}
          >
            Other <Amount>12</Amount>
          </Tag>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default connect(
  state => ({
    selectedCategory: getCurrentCategory(state)
  }),
  dispatch => ({
    setCategory: category => dispatch(setCategory(category))
  })
)(Categories);

const Wrapper = styled.div`
  max-width: 272px;
  border-radius: 4px;
  border: solid 1px rgba(225, 225, 226, 0.56);
  background-color: #ffffff;
  padding-bottom: 32px;
  margin-bottom: 16px;
  margin-right: 16px;

  ${mediaMax.tablet`
    max-width: 100%;
        max-height: 144px;
    margin: 0;
    margin-bottom: 16px;
    order: 1;
  `}
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 22px 16px 26px;
  border-bottom: solid 1px #f1f1f1;
`;

const Title = styled.div``;

const SettingsButton = styled.button``;

const Icon = styled.img``;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;

  ${mediaMax.tablet`
  flex-wrap: nowrap;
  overflow-x: scroll;
  `}
`;

const Tag = styled.button`
  border-radius: 20px;
  border: solid 1px #e1e1e2;
  padding: 9px 16px;
  margin-right: 8px;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.17;
  color: #8a8c8f;
  white-space: nowrap;

  ${props =>
    props.active &&
    `
   border: solid 1px #0c79f8;
  background-color: rgba(206, 228, 254, 0.48);
  color: #0c79f8;
  `}

  ${mediaMax.tablet`
      display: flex;
    max-height: 32px;
    margin: 0 10px 0 0;
  `}
`;

const Amount = styled.span`
  margin-left: 20px;
`;
