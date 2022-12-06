type Products = Product[];

type Product = {
  productId: String;
  productImage: String;
  productName: String;
  productSubTitle: String;
  productDiscription: String;
  productSKU: SKU[];
  quantity: Number;
  popular: Boolean;
};

type SKU = {
  skuId: String;
  sku: "KG" | "GRAM";
  skuSize: Number;
  skuPrice: Number;
  skuActive: Boolean;
};

// CUSTOMER
type Customer = {
  customerId: String;
  customerName: String;
  joinDate: String;
  phoneNumber: Number;
  familyMembers: Number;
  address: Address[];
  favProducts: Products;
  wishProducts: UserWish[];
  purchasedProducts: PurchProduct[];
  totalTransactions: Number;
  rank: Number;
  stars: Number;
  totalReward: PurchProduct[];
  totalReturn: PurchProduct[];
};

type UserWish = { productId: String };
type Address = {
  city: String;
  area: String;
  road: String;
  buldingName: String;
  coords: Coordinates;
};
type Coordinates = { latitude: String; longitude: String };

type PurchProduct = {
  productId: String;
  productImage: String;
  productName: String;
  quantity: Number;
  productPrice: Number;
  SKU: Number;
  purchDate: String;
  returnDate: String;
};

// RECIPE SECTION
type Recipes = Recipe[];
type Recipe = {
  recipeId: String;
  recipeImage: String;
  recipeName: String;
  recipeDiscription: String;
  recipeIngrediant: [];
};

// QUESTION SECTION
type Questions = Question[];
type Question = {
  questionId: String;
  questionName: String;
  questionDiscription: String;
};
