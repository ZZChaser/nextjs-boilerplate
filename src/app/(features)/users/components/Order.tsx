type Order = {
  created: string;
  total: number;
  status: string;
};

export default function Order(props: Order) {
  return (
    <li key={props.created}>
      {props.created} | {props.total / 100} ₽ | {props.status}
    </li>
  );
}
