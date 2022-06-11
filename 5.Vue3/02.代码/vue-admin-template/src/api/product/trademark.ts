import request from '/@/utils/request';
import {TrademarkPageListModel, TrademarkModel} from './model/trademarkModel';

enum Api{
	GetTrademarkList = "/admin/product/baseTrademark",
	SaveTrademark = "/admin/product/baseTrademark/save"
}

export function getTrademarkListApi(page:number,limit:number) {
	return request.get<any,TrademarkPageListModel>(Api.GetTrademarkList + `/${page}/${limit}`);
}

export function saveTrademarkApi(trademark:TrademarkModel) {
	return request.post<any,null>(Api.SaveTrademark,trademark);
}
