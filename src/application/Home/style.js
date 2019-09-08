import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style['theme-color']};
  &>span {
    line-height: 1.066667rem;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: .666667rem;
    }
  }
`;

export const Tab = styled.div`
  height: 1.066667rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${style['theme-color']};
  a {
    flex: 1;
    padding: .053333rem 0;
    font-size: .373333rem;
    color: #e4e4e4;
    &.selected {
      span {
        padding: .08rem 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: .053333rem solid #f1f1f1;
      }
    }
  }
`;

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`