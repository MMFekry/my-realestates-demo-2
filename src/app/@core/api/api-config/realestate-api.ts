export const REALESTATE_API = {
    favorite:{
        get:'RealEstate/GetFavouriteEstate?NationalID=',
        post: 'RealEstate/AddFavouriteEstate'
    },
    registered:{
        get:'RealEstate/GetRegisteredEstate?NationalID=',
    }
};

export const REQUEST_API = {
    create: 'CreateEstateRequest/CreateEstateRequest'
}

export const TRANS_API = {
    create: 'Transaction/AddTransactions'
}

export const FEES_API = {
    get: 'Request_Fees/GetFeesPerRequest',
    post: 'Request_Fees/SavePaymentNumber'
}

export const LOOKUP_API ={
    get: 'Configurations_Lookups/GetRERNLookup'
}

