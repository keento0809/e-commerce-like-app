import { Button } from "@/app/_components/ui/button";
import { CATEGORIES_ARRAY, FEATURES_ARRAY } from "@/app/_constants/home/home";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { HOME_TEXT_OBJ } from "@/app/_constants/home/texts";
import heroImgURL from "@/public/images/home/hero_img_size_reduced.jpeg";

type HomePresentationProps = PropsWithChildren;

export const HomePresentation: FC<HomePresentationProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImgURL.src}
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {HOME_TEXT_OBJ["title"]}
          </h1>
          <p className="mt-6 w-[80%] md:w-full text-md sm:text-xl max-w-3xl mx-auto">
            {HOME_TEXT_OBJ["description"]}
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {HOME_TEXT_OBJ["featuredCategories"]}
          </h2>
          <div className="flex flex-col md:flex-row md:justify-around gap-8">
            {CATEGORIES_ARRAY.map((category) => (
              <div
                key={category.title}
                className="w-[90%] mx-auto md:w-1/3 group relative overflow-hidden rounded-lg shadow-lg cursor-pointer min-h-[200px]"
              >
                <div>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover z-10 transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="inset-0 bg-gradient-to-t from-black/60 to-transparent h-full" />
                <div className="p-6 text-white relative z-20 flex flex-col justify-end h-full">
                  <h3 className="text-xl font-semibold drop-shadow-sm">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200 drop-shadow-sm">
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
          <h2 className="text-3xl font-bold mb-8">{HOME_TEXT_OBJ["reason"]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES_ARRAY.map((feature) => (
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
      {children}
    </div>
  );
};
