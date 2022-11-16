import Image from 'next/image';
import Link from 'next/link';

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} className="relative">
        <Image
          src={product.image}
          alt={product.name}
          className="rounded shadow"
          width={500}
          height={500}
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-xl font-bold">{product.name}</h2>
        </Link>
        <p className="font-semibold">{product.brand}</p>
        <p className="font-semibold">${product.price}</p>
        <button className="primary-button" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
