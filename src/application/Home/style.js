import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  &>span {
    line-height: 1.066667rem;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: .666667rem;
    }
  }
`