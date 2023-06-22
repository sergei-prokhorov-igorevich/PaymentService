import React from 'react';
import { orderGuidUrl } from '../../../../../common/urls';
import { EDataRequestStatus } from '../../../../../enums/dataRequestStatus';
import { useAppSelector } from '../../../../../store/store';
import { GeneralButton } from '../../../../common/buttons/GeneralButton/GeneralButton';
import { Gap, GapSize } from '../../../../common/Gap/Gap';
import { Field } from '../../../../common/Field/Field';
import { MasterCard } from '../../../../common/svg/MasterCard';
import './orderDetails.css';

function OrderDetails() {
  const order = useAppSelector((state) => state.orderState.order);
  if (!order) {
    return null;
  }

  const [password, setPassword] = React.useState<string>('');
  const [payStatus, setPayStatus] = React.useState<EDataRequestStatus>(EDataRequestStatus.NotRequested);

  function handlePayClick(): void {
    if (password) {
      fetch(orderGuidUrl(order!.orderGuid), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      }).then((response) => setPayStatus(response.status === 200 ? EDataRequestStatus.Success : EDataRequestStatus.ServerError))
        .catch((error) => {
          setPayStatus(EDataRequestStatus.ServerError);
          console.error(error);
        });
      return;
    }

    setPayStatus(EDataRequestStatus.InvalidData);
  }

  const amount = order.currency + order.amount;
  const passwordInput = (
    <input
      type="text"
      value={password}
      onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
    />
  );

  return (
    <div className="orderDetails">
      <Field label="Order number:">{order.orderId}</Field>
      <Field label="Payer's ID:">{order.payerId}</Field>
      <Field label="Amount:">{amount}</Field>
      <Field label="Payment method:">
        <MasterCard />
        {order.paymentMethod}
      </Field>

      {payStatus !== EDataRequestStatus.Success && <Field label="Text message password:">{passwordInput}</Field>}
      {payStatus === EDataRequestStatus.InvalidData && <div className="validationError">Required field</div>}
      {payStatus === EDataRequestStatus.ServerError && <div className="validationError">Payment validation error!</div>}
      <Gap size={GapSize.Large} />
      {payStatus !== EDataRequestStatus.Success && <GeneralButton onClick={handlePayClick} children={`Pay ${amount}`} />}
      {payStatus === EDataRequestStatus.Success && <div className="success">Payment successfull!</div>}
    </div>
  );
}

export { OrderDetails };
