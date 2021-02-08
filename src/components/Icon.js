import React from 'react';
import {
  MdInfo,
  MdInsertInvitation,
  MdLocalShipping,
  MdSupervisorAccount,
  MdDashboard,
  MdPayment,
  MdDateRange,
  MdAirportShuttle,
  MdPages,
  MdFlight,
  MdArrowBack,
  MdArrowForward,
  MdSearch,
  MdSend,
  MdCheckCircle,
  MdClose,
  MdReorder,
  MdRemoveShoppingCart,
  MdAdd,
  MdRemove,
  MdDelete,
  MdShoppingCart,
} from 'react-icons/md';

export default function Cart({ icon, additionalClassName }) {
  switch (icon) {
    case 'info':
      return <MdInfo className={`icon ${additionalClassName}`} />;
    case 'insert_invitation':
      return <MdInsertInvitation className={`icon ${additionalClassName}`} />;
    case 'local_shipping':
      return <MdLocalShipping className={`icon ${additionalClassName}`} />;
    case 'supervisor_account':
      return <MdSupervisorAccount className={`icon ${additionalClassName}`} />;
    case 'dashboard':
      return <MdDashboard className={`icon ${additionalClassName}`} />;
    case 'payment':
      return <MdPayment className={`icon ${additionalClassName}`} />;
    case 'data_range':
      return <MdDateRange className={`icon ${additionalClassName}`} />;
    case 'airport_shutle':
      return <MdAirportShuttle className={`icon ${additionalClassName}`} />;
    case 'pages':
      return <MdPages className={`icon ${additionalClassName}`} />;
    case 'flight':
      return <MdFlight className={`icon ${additionalClassName}`} />;
    case 'arrow_back':
      return <MdArrowBack className={`icon ${additionalClassName}`} />;
    case 'arrow_forward':
      return <MdArrowForward className={`icon ${additionalClassName}`} />;
    case 'search':
      return <MdSearch className={`icon ${additionalClassName}`} />;
    case 'send':
      return <MdSend className={`icon ${additionalClassName}`} />;
    case 'send_circle':
      return <MdCheckCircle className={`icon ${additionalClassName}`} />;
    case 'close':
      return <MdClose className={`icon ${additionalClassName}`} />;
    case 'reorder':
      return <MdReorder className={`icon ${additionalClassName}`} />;
    case 'remove_shopping_cart':
      return <MdRemoveShoppingCart className={`icon ${additionalClassName}`} />;
    case 'add':
      return <MdAdd className={`icon ${additionalClassName}`} />;
    case 'remove':
      return <MdRemove className={`icon ${additionalClassName}`} />;
    case 'delete':
      return <MdDelete className={`icon ${additionalClassName}`} />;
    case 'shopping_card':
      return <MdShoppingCart className={`icon ${additionalClassName}`} />;
    default:
      return <MdInfo className={`icon ${additionalClassName}`} />;
  }
}
