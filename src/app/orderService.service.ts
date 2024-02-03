// order.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderData: any[] = [];

  getOrderData(): any[] {
    return this.orderData;
  }

  setOrderData(data: any[]): void {
    this.orderData = data;
  }
}
