import PageHome from "../../components/PageHome";
import { ProductItemProps } from "../../modules/types";

const Main: React.FC<{ products: ProductItemProps[] }> = ({ products }) => {
  return (
    <div className="page-main">
      <PageHome products={products} />
    </div>
  );
};

export default Main;
