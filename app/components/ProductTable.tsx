import { ProductType } from '@/app/interfaces/product';
import { JSX } from 'react';
import ProductCategoryRow from '../sub-components/ProductCategoryRow';
import ProductRow from '../sub-components/ProductRow';

interface Props {
products: ProductType
}

function ProductTable({ products }: Props) {
  const rows = [] as Array<JSX.Element>;
  let lastCategory = null as unknown as string;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;