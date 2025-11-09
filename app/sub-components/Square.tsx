
interface Props {
    value: Array<number>;
    onSquareClick: (i: number) => void
}

function Square({ value, onSquareClick }: Props) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default Square;