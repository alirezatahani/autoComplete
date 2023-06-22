export interface AutoCompleteProps {
  options: Option[] | null | [];
  loading: boolean;
  name: string;
  value: string;
  setSearchValue: (searchValue: string) => void;
  setSelectedOption: (option: Option) => void;
}

export interface Option {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
