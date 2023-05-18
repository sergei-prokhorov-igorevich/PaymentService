import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';

interface IOrder {
  orderGuid: string;
  orderId: string;
  payerId: string;
  amount: number;
  currency: string;
  paymentMethod: string;
}

interface IOrderState {
  order: IOrder | null;
}

const initialState: IOrderState = {
  order: null,
};

const OrderSlice:Slice<IOrderState> = createSlice({
  name: 'order',
  initialState,
  reducers: {
    loadOrder: (state: IOrderState, action: PayloadAction<IOrder>) => {
      state.order = action.payload;
    },
    payByOrder: () => {},
  },
});

export default OrderSlice.reducer;
export { IOrder, OrderSlice };
export const { loadOrder, payByOrder } = OrderSlice.actions;
