import { Category, Feature } from "@/app/_types/home/home";
import { HOME_EXTERNAL_URLS_OBJ } from "./externalURLs";

const CATEGORIES_ARRAY: Category[] = [
  {
    title: "Electronics",
    image: HOME_EXTERNAL_URLS_OBJ["firstCategoryImgURL"],
    description: "Latest gadgets and tech accessories",
  },
  {
    title: "Fashion",
    image: HOME_EXTERNAL_URLS_OBJ["secondCategoryImgURL"],
    description: "Trendy clothing and accessories",
  },
  {
    title: "Home & Living",
    image: HOME_EXTERNAL_URLS_OBJ["thirdCategoryImgURL"],
    description: "Beautiful home decor and furnishings",
  },
] as const;

const FEATURES_ARRAY: Feature[] = [
  {
    title: "Premium Quality",
    description: "Carefully selected products that meet our high standards",
  },
  {
    title: "Fast Shipping",
    description: "Quick and reliable delivery to your doorstep worldwide",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is here to help you anytime, anywhere",
  },
] as const;

export { CATEGORIES_ARRAY, FEATURES_ARRAY };
