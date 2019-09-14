import React from 'react';
import {
    ListWrapper,
    List,
    ListTitle,
    ListItem,
} from './style';
import { getCount } from "../../api/utils";
import LazyLoad from "react-lazyload";

function RecommendList(props) {
    const { recommendList } = props
    return (
        <ListWrapper>
            <ListTitle>
                <div className='title'>推荐歌单</div>
                <div className='tag'>歌单广场</div>
            </ListTitle>
            <List>
                {
                    recommendList.map((item, index) => {
                        return (
                            <ListItem key={item.id}>
                                <div className="img_wrapper">
                                    <div className="decorate"></div>
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music" />}>
                                        {/* 加此参数可以减小请求的图片资源大小 */}
                                        <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
                                    </LazyLoad>

                                    <div className="play_count">
                                        <i className="iconfont play">&#xe885;</i>
                                        <span className="count">{getCount(item.playCount)}</span>
                                    </div>
                                </div>
                                <div className="desc">{item.name}</div>
                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWrapper>
    )
}

export default React.memo(RecommendList)