module.exports={
    EDIT_PROFILE:"/account/profile/",
    CHANGE_PASSWORD:"/account/change-password/",
    ACCOUNT_APPROVE:"/account/approve/",
    ACCOUNT_BANK_INFO:"/accounting/bankprofile/",
    LIST_PRODUCTS:"/sale/product/",
    ONE_PRODUCT:id=> `/sale/product/${id}/`,
    LIST_PRODUCTS_MATCHED : id=> `/notification/auction-reminders/${id}/matched-products/`,
    LIST_AUCTIONS:"/sale/auctions/",
    JOIN_AUCTION:"/sale/join-auction/",
    ACCOUNT_WALLET:"/accounting/wallet/me/",
    TRANSACTION:"/accounting/transaction/",
    ACCOUNT_BANK_Edit:id=>`/accounting/bankprofile/${id}/`,
    HOME_AUCITONS:"/account/home-auction/",
    CATEGORIE_ACTIVITY:"/sale/category/",
    ADD_AUCTION:"/sale/auctions/",
    DETAIL_AUCTION:id=>`/sale/auctions/${id}/`,
    SEND_REQUEST_HOUMEAUCTION:"/account/request/me/",
    PRE_UPLOAD : "/core/upload/",
    UPLOAD : "/core/media/photos/",
    LIST_REMINDERS : '/notification/auction-reminders/' , 
    DELETE_REMINDER : id => `/notification/auction-reminders/${id}/` , 
    UPLOAD_EXEL_AUCTION:name=>`/sale/upload/${name}/`,
    REFRESH_TOKEN:`/account/token/refresh/`,

}

