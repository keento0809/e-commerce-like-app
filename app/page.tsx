import Link from "next/link";
import Image from "next/image";
import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Welcome to ModernStore
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
            Discover our curated collection of premium products designed to
            enhance your lifestyle
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Electronics",
                image:
                  "https://images.unsplash.com/photo-1498049794561-7780e7231661",
                description: "Latest gadgets and tech accessories",
              },
              {
                title: "Fashion",
                image:
                  "https://images.unsplash.com/photo-1445205170230-053b83016050",
                description: "Trendy clothing and accessories",
              },
              {
                title: "Home & Living",
                image:
                  "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
                description: "Beautiful home decor and furnishings",
              },
            ].map((category) => (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description:
                  "Carefully selected products that meet our high standards",
              },
              {
                title: "Fast Shipping",
                description:
                  "Quick and reliable delivery to your doorstep worldwide",
              },
              {
                title: "24/7 Support",
                description:
                  "Our dedicated team is here to help you anytime, anywhere",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-card shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
