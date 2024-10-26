import { PropsWithChildren } from "react";
import { ThemeProvider } from "../../providers/themeProvider/themeProvider";
import { Toaster } from "../../ui/toaster";
import { Footer } from "../../common/footer/footer";
import { NavbarContainer } from "../../common/navbar";
import { CartProvider } from "../../providers/cartProvider/cartProvider";

export const RootClient = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <NavbarContainer />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
};
