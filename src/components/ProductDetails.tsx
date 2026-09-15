"use client";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import {
  DocumentTextIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import type { Product } from "@/data/product.types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "yet-another-react-lightbox/styles.css";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxSlides = product.images.map((image) => ({
    src: image,
    alt: product.name,
  }));

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-6 pb-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Left half - image carousel */}
        <div className="flex-1 md:max-w-1/2">
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#457B9D",
                "--swiper-pagination-color": "#457B9D",
              } as React.CSSProperties
            }
            className="w-full mb-3 rounded-lg"
            spaceBetween={10}
            navigation
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Navigation, Pagination, Thumbs]}
            pagination={{ clickable: true }}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={image}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`${product.name} - image ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                  className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain rounded-lg cursor-pointer transition-opacity hover:opacity-90"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Thumbs]}
            className="w-full"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={image} className="cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                  className="w-full h-[60px] sm:h-[80px] object-cover rounded opacity-60 transition-opacity hover:opacity-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right half - product info */}
        <div className="flex-1 md:max-w-1/2 pt-1 flex flex-col gap-5">
          <h1 className="text-3xl sm:text-4xl font-medium leading-none text-navy">
            {product.name}
          </h1>

          {product.isAvailable ? (
            <p className="text-4xl sm:text-5xl font-semibold text-ocean-blue">
              {new Intl.NumberFormat("fi-FI", {
                style: "currency",
                currency: product.currency,
                maximumFractionDigits: 0,
              }).format(product.price)}
            </p>
          ) : (
            <p className="text-2xl sm:text-3xl font-medium text-ocean-blue">
              Out of stock
            </p>
          )}

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-full bg-coral-red text-white py-3 text-base font-semibold"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            Add to cart
          </button>

          <div className="flex items-center gap-2 mt-1">
            <DocumentTextIcon className="w-7 h-7 text-navy" />
            <h2 className="text-xl text-navy">Description</h2>
          </div>
          <p className="text-navy -mt-3">{product.description}</p>

          {product.components && (
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <Cog6ToothIcon className="w-7 h-7 text-navy" />
                <h2 className="text-xl text-navy">
                  {product.components.title}
                </h2>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {product.components.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:gap-2"
                  >
                    <span className="font-semibold min-w-[140px] text-navy text-sm">
                      {item.label}:
                    </span>
                    <span className="text-navy text-sm">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center gap-2 mt-1">
            <ShieldCheckIcon className="w-7 h-7 text-navy" />
            <h2 className="text-xl text-navy">Warranty</h2>
          </div>
          <p className="text-navy -mt-3">
            Every PC comes with a 24-month warranty covering parts and labor,
            so you can game with peace of mind.
          </p>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        carousel={{ preload: 2 }}
        animation={{ fade: 250 }}
        styles={{
          container: { backgroundColor: "rgba(255, 255, 255, 1)" },
          button: { filter: "none", color: "#457B9D" },
        }}
      />
    </div>
  );
}
