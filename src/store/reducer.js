// 合并 reducer 函数
import { combineReducers } from 'redux-immutable';
// 导入分仓库的 reducer
import { reducer as recommendReducer } from '../application/Recommend/store/index';

// 合并 reducer 函数为一个 obj
export default combineReducers({
    recommend: recommendReducer,
})
