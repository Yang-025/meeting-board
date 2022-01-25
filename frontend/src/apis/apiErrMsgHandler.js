const errorMsg = {
  networkError: {
    en: 'NETWORK ERROR',
    zh_tw: '網路異常！',
  },
  pageNotFound: {
    en: 'Page Not Found!',
    zh_tw: '查無此頁',
  },
  unexpectedError: {
    en: 'Unexpected Error!',
    zh_tw: '意外錯誤！',
  },
  unauthorizationError: {
    en: 'unauthorization Error!',
    zh_tw: '授權錯誤！',
  },
};

export function ApiErrorMsgHandler(error) {
  let msg;
  if (!error.response) {
    msg = errorMsg.networkError.zh_tw;
  } else {
    switch (error.response.status) {
      case 404:
        // msg = `${errorMsg.pageNotFound.zh_tw}: ${error.response.request.responseURL}`;  //test
        msg = errorMsg.pageNotFound.zh_tw;
        break;
      case 401:
        msg = errorMsg.unauthorizationError.zh_tw;
        break;
      default:
        msg = errorMsg.unexpectedError.zh_tw;
    }
  }
  return msg;
}


export default {};
