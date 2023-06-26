import Img11 from "../assets/image 11.png";
import Img12 from "../assets/image 12.png";
import Img13 from "../assets/image 13.png";

import Product from "./Product";

export default function Products() {
  return (
    <div className="products__container">
      <div className="products__container__products">
        <Product text="Product Name" img={Img11} />
        <Product text="Product Name" img={Img12} />
        <Product text="Product Name" img={Img13} />
        <Product text="Product Name" img={Img11} />
        <Product text="Product Name" img={Img13} />
        <Product text="Product Name" img={Img12} />
        <Product text="Product Name" img={Img11} />
        <Product text="Product Name" img={Img12} />
        <Product text="Product Name" img={Img11} />
        <Product text="Product Name" img={Img12} />
        <Product text="Product Name" img={Img13} />
        <Product text="Product Name" img={Img12} />
      </div>
    </div>
  );
}
