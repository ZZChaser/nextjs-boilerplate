import { Order } from '..';

export default function Order(props: Order) {
  return (
    <li key={props.created}>
      {props.created} | {props.total / 100} ₽ | {props.status}
    </li>
  );
}
