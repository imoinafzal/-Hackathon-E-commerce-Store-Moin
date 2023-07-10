export interface NavbarItemType {
  label: string;
  href: string;
  isDropdown: boolean;
  dropdownData?: Array<NavbarItemType>;
}

export const NavbarArray: Array<NavbarItemType> = [
  {
    label: "Female",
    href: "/female/Female",
    isDropdown: true,
    dropdownData: [
      {
        label: "Dress",
        href: "/female/Dress",
        isDropdown: false
      },
      {
        label: "T-Shirt",
        href: "/female/T-shirt",
        isDropdown: false
      },
      {
        label: "Sweater",
        href: "/female/Sweater",
        isDropdown: false
      },
      {
        label: "Jacket",
        href: "/female/Jacket",
        isDropdown: false
      },
    ],
  },
  {
    label: "Male",
    href: "/male/Male",
    isDropdown: true,
    dropdownData: [
      {
        label: "Dress",
        href: "/male/Dress",
        isDropdown: false
      },
      {
        label: "T-Shirt",
        href: "/male/T-shirt",
        isDropdown: false
      },
      {
        label: "Sweater",
        href: "/male/Sweater",
        isDropdown: false
      },
      {
        label: "Jacket",
        href: "/male/Jacket",
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
    href: "/products",
    isDropdown: false,
  },
];
