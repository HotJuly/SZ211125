import request from '/@/utils/request';
import {TrademarkPageListModel} from './model/trademarkModel';

enum Api{
	GetTrademarkList = "/admin/product/baseTrademark"
}

export function getTrademarkListApi(page:number,limit:number) {
	return request.get<any,TrademarkPageListModel>(Api.GetTrademarkList + `/${page}/${limit}`);
}
