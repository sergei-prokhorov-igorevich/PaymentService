import React from 'react';
import { createPost } from '../../../../utils/fetchUtils';
import { payOrderUrl } from '../../../../urls';
import { EDataRequestStatus } from '../../../../enums/dataRequestStatus';
import { useAppSelector } from '../../../../store/store';
import { GeneralButton } from '../../../buttons/GeneralButton/GeneralButton';
import './styles/orderDetails.css';
import { Gap, GapSize } from '../../../Gap/Gap';

function OrderDetails() {
  const order = useAppSelector((state) => state.orderState.order);
  if (!order) {
    return null;
  }

  const [password, setPassword] = React.useState<string>('');
  const [payStatus, setPayStatus] = React.useState<EDataRequestStatus>(EDataRequestStatus.NotRequested);

  const renderField = (label: string, node: React.ReactNode) => (
    <div className="field">
      <div className="fieldLabel">{label}</div>
      <div>{node}</div>
    </div>
  );

  function handlePayClick(): void {
    if (password) {
      createPost(payOrderUrl(order!.orderGuid), { password })
        .then((response) => setPayStatus(response.status === 200 ? EDataRequestStatus.Success : EDataRequestStatus.ServerError))
        .catch((error) => {
          setPayStatus(EDataRequestStatus.ServerError);
          console.error(error);
        });
      return;
    }

    setPayStatus(EDataRequestStatus.InvalidData);
  }

  const passwordInput = (
    <input
      type="text"
      value={password}
      onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
    />
  );

  return (
    <div className="orderDetails">
      {renderField('Order number:', order.orderId)}
      {renderField('Payer\'s ID:', order.payerId)}
      {renderField('Amount:', `${order.amount} ${order.currency}`)}
      {renderField('Payment method:', order.paymentMethod)}
      {payStatus !== EDataRequestStatus.Success && renderField('Text message password:', passwordInput)}
      {payStatus === EDataRequestStatus.InvalidData && <div className="validationError">Required field</div>}
      {payStatus === EDataRequestStatus.ServerError && <div className="validationError">Payment validation error!</div>}
      <Gap size={GapSize.Large} />
      {payStatus !== EDataRequestStatus.Success && <GeneralButton onClick={handlePayClick} children="Pay by Moment" />}
      {payStatus === EDataRequestStatus.Success && <div className="success">Payment successfull!</div>}
    </div>
  );
}

export default OrderDetails;
