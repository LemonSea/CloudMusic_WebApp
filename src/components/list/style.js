import styled from 'styled-components';
import style from '../../assets/global-style';

export const ListWrapper = styled.div`
    position: relative;
    width: 100%;
`
export const ListTitle = styled.div`
    overflow: hidden;
    line-height: 1.066667rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .title {
        font-size: .373333rem;
        font-weight: 700;
        padding-left: .16rem;
    }
    .tag {
        height: .266667rem;
        font-size: .266667rem;
        font-weight: 600;
        padding: .053333rem .16rem;
        margin-right: .16rem;
        line-height: .266667rem;
        color: #444;
        border: .026667rem solid rgb(211, 210, 210);
        border-radius: .213333rem;
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const ListItem = styled.div`
    position: relative;
    width: 32%;
    .img_wrapper{
        .decorate {
            position: absolute;
            top: 0;
            width: 100%;
            height: .933333rem;
            border-radius: .08rem;
            background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
        }
        position: relative;
        height: 0;
        padding-bottom: 100%;
        .play_count {
            position: absolute;
            right: .053333rem;
            top: .053333rem;
            font-size: .32rem;
            line-height: .4rem;
            color: ${style["font-color-light"]};
            .play{
                font-size: .426667rem;
                vertical-align: top;
            }
        }
        img {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: .08rem;
        }
  }
  .desc {
        overflow: hidden;
        margin-top: .053333rem;
        padding: 0 .053333rem;
        height: 1.333333rem;
        text-align: left;
        font-size: .32rem;
        line-height: 1.4;
        color: ${style["font-color-desc"]};
    }
`