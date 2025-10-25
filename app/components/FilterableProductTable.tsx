import { ProductType } from '@/app/interfaces/product';
import SearchBar from '../sub-components/SearchBar';
import ProductTable from './ProductTable';

interface FilterableProductTableProps {
    products: ProductType
}
function FilterableProductTable({ products }: FilterableProductTableProps) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;