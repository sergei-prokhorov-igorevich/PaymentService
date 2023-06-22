import React from 'react';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { loadOrder } from '../../../store/features/orderSlice';
import { orderGuidUrl } from '../../../common/urls';
import { useAppDispatch } from '../../../store/store';
import { EDataRequestStatus } from '../../../enums/dataRequestStatus';
import { GlobalReach } from '../../common/svg/GlobalReach';
import { Gap, GapSize } from '../../common/Gap/Gap';

// Current mongoDB server for demo-project example has only one order.
const orderGuid = 'f4f9d523-47b6-4758-998a-f6a0e47158ac';

function OrderPage() {
  const dispatch = useAppDispatch();

  const [loadOrderStatus, setLoadOrderStatus] = React.useState<EDataRequestStatus>(EDataRequestStatus.NotRequested);

  React.useEffect(() => {
    fetch(orderGuidUrl(orderGuid))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setLoadOrderStatus(EDataRequestStatus.ServerError);
        throw new Error(`Error status code: ${response.status}`);
      })
      .then((response) => {
        dispatch(loadOrder(response));
        setLoadOrderStatus(EDataRequestStatus.Success);
      })
      .catch((error) => {
        setLoadOrderStatus(EDataRequestStatus.ServerError);
        console.error(error);
      });
  }, []);

  function renderContent(): any {
    if (loadOrderStatus === EDataRequestStatus.NotRequested) {
      return 'Order is loading...';
    } if (loadOrderStatus === EDataRequestStatus.ServerError) {
      return (
        <center>
          Something went wrong. Don&apos;t worry, you data is secure.
          <br />
          An error has occurred and the support team has been notified.
          <br />
          Please try again in a few minutes or
          {' '}
          <a href="#">contact us</a>
          {' '}
          for more information.
        </center>
      );
    } if (loadOrderStatus === EDataRequestStatus.Success) {
      return <OrderDetails />;
    }

    throw Error(`Unexpected value ${loadOrderStatus} of enum ${typeof EDataRequestStatus}.`);
  }

  return (
    <>
      <Gap size={GapSize.Large} />
      <GlobalReach />
      <Gap size={GapSize.Medium} />
      <h1>Checkout</h1>
      <Gap size={GapSize.Medium} />
      {renderContent()}
    </>
  );
}
export { OrderPage };
