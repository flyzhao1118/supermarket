import {request} from "./request";

export function getDetail(id) {
  return request({
    url: '/detail',
    params: {
      id
    }
  })
}

export class goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.loeNoePrice
  }
}