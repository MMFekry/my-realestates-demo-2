export interface GetFeesResultModel {
    
        RequestID: number,
        Requests_RequestsID: number,
        data: Fees,
        ResponseCode: number,
        ResponseMessage: string
      
}

export interface Fees{
    totalFees: number,
    feesOnRequest: FeesOnRequest[],
    //adminTax: null
  }

  export interface FeesOnRequest{
    feeName: string,
    feeprice: number,
    feesReason: string
  }
