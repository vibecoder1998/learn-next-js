import FilterableProductTable from './components/FilterableProductTable';
import { getProducts } from './utilities/productHelper';

export default function Home() {
  const products = getProducts();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <FilterableProductTable products={products}/>
      </main>
    </div>
  );
}
