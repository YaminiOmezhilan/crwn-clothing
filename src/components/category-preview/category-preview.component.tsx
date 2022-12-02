import ProductCard from '../../components/product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.styles';
import { CategoryItem } from '../../store/categories/category.types';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
