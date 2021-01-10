import React from 'react';
import { formatPrice } from './helpers';

type Props = {
  amount: number;
  total: number;
  onSubmit: () => void;
};

function OrderSummary({ amount, total, onSubmit }: Props) {
  return (
    <div className="order-summary-container">
      <div className="order-summary-content">
        <div>
          <span className="amount-selected-container">
            <strong className="amount-selected">{amount}</strong>
            PEDIDOS SELECIONADOS
          </span>
          <span className="amount-summary-total">
            <strong className="amount-selected">R$ {formatPrice(total)}</strong>
            VALOR TOTAL
          </span>
        </div>
        <button className="order-summary-make-order" onClick={onSubmit}>
          FAZER PEDIDO
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
