import data from '../utils/data';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';

export default function Home() {
  return (
    <div>
      <Layout>
        <section className="grid-pattern">
          {
            data.products.map(product => (
              <ProductItem product={product} key={product.slug}/>
            ))
          }
        </section>
      </Layout>
    </div>
  );
}
