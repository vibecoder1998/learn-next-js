import { ProductItem } from "@/app/interfaces/product";

interface Props {
  product: ProductItem
}

const  ProductRow = ({ product }:Props) =>{
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;