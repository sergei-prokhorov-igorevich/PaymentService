import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { OrderSlice } from './features/orderSlice';

const store = configureStore({
  reducer: {
    orderState: OrderSlice.reducer,
  },
});

const useAppDispatch:()=> typeof store.dispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export { store, useAppDispatch, useAppSelector };
