import { PropsWithChildren } from "react";
import { Navbar } from "../../common/navbar/navbar";
import { CartProvider } from "../../provider/cart-provider";
import { ThemeProvider } from "../../provider/theme-provider";
import { Toaster } from "../../ui/toaster";
import { Footer } from "../../common/footer/footer";

export const RootClient = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
};
