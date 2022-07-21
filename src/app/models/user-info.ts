import { Order } from "./order";

export class UserInfo {
  fullName!: string;
  address!: string;
  creditCardNumber!: number;

  constructor(public order: Order) {

  }
}
