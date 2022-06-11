
export interface TrademarkModel{
    id?: number;
    tmName: string;
    logoUrl: string;
}

export type TrademarkListModel = TrademarkModel[];

export interface TrademarkPageListModel{
    total:number;
    records:TrademarkListModel;
}