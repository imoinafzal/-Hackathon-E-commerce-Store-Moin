export interface NavbarItemType {
  label: string;
  href: string;
  isDropdown: boolean;
  dropdownData?: Array<NavbarItemType>;
}

export const NavbarArray: Array<NavbarItemType> = [
  {
    label: "Female",
    href: "/female",
    isDropdown: true,
    dropdownData: [
      {
        label: "Dress",
        href: "/female/dress",
        isDropdown: false
      },
      {
        label: "T-Shirt",
        href: "/female/t-shirt",
        isDropdown: false
      },
      {
        label: "Sweater",
        href: "/female/sweater",
        isDropdown: false
      },
      {
        label: "Jacket",
        href: "/female/jacket",
        isDropdown: false
      },
    ],
  },
  {
    label: "Male",
    href: "/male",
    isDropdown: true,
    dropdownData: [
      {
        label: "Dress",
        href: "/male/dress",
        isDropdown: false
      },
      {
        label: "T-Shirt",
        href: "/male/t-shirt",
        isDropdown: false
      },
      {
        label: "Sweater",
        href: "/male/sweater",
        isDropdown: false
      },
      {
        label: "Jacket",
        href: "/male/jacket",
        isDropdown: false
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    isDropdown: false,
  },
  {
    label: "All Products",
    href: "/allproducts",
    isDropdown: false,
  },
];
