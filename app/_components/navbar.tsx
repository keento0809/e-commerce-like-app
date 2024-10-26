"use client";

import { ShoppingCart, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";

import { useCart } from "./cart-provider";
import { useState } from "react";
import Link from "next/link";
import { SearchDialog } from "./search/search-dialog";
import { AuthDialog } from "./auth/auth-dialog";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              ModernStore
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <Link href="/categories" className="hover:text-primary">
              Categories
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <SearchDialog />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <AuthDialog />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    {items.length === 0 ? (
                      <p>Your cart is empty</p>
                    ) : (
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between"
                          >
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Quantity: {item.quantity}
                              </p>
                            </div>
                            <p>${item.price * item.quantity}</p>
                          </div>
                        ))}
                        <div className="border-t pt-4">
                          <div className="flex justify-between font-medium">
                            <span>Total</span>
                            <span>
                              $
                              {items.reduce(
                                (acc, item) => acc + item.price * item.quantity,
                                0
                              )}
                            </span>
                          </div>
                          <Button className="w-full mt-4">Checkout</Button>
                        </div>
                      </div>
                    )}
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/products"
                    className="hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    href="/categories"
                    className="hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Categories
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
