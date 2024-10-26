import { useCart } from "@/app/_components/provider/cart-provider";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

export const useNavbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => setMounted(true), []);

  return {
    theme,
    mounted,
    isMenuOpen,
    setIsMenuOpen,
    items,
    totalItems,
    toggleTheme,
  };
};
