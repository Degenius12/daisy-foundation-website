"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

// Animation variants for common use cases
export const animationVariants = {
  fadeIn: "opacity-0 transition-opacity duration-700 ease-out",
  fadeInVisible: "opacity-100",

  slideUp: "opacity-0 translate-y-8 transition-all duration-700 ease-out",
  slideUpVisible: "opacity-100 translate-y-0",

  slideDown: "opacity-0 -translate-y-8 transition-all duration-700 ease-out",
  slideDownVisible: "opacity-100 translate-y-0",

  slideLeft: "opacity-0 translate-x-8 transition-all duration-700 ease-out",
  slideLeftVisible: "opacity-100 translate-x-0",

  slideRight: "opacity-0 -translate-x-8 transition-all duration-700 ease-out",
  slideRightVisible: "opacity-100 translate-x-0",

  scaleUp: "opacity-0 scale-95 transition-all duration-500 ease-out",
  scaleUpVisible: "opacity-100 scale-100",

  blur: "opacity-0 blur-sm transition-all duration-700 ease-out",
  blurVisible: "opacity-100 blur-0",
};

// Helper function to combine animation classes
export function getAnimationClasses(
  variant: keyof typeof animationVariants,
  isVisible: boolean
): string {
  const baseVariant = variant.replace("Visible", "") as keyof typeof animationVariants;
  const visibleVariant = `${baseVariant}Visible` as keyof typeof animationVariants;

  if (isVisible && animationVariants[visibleVariant]) {
    return `${animationVariants[baseVariant]} ${animationVariants[visibleVariant]}`;
  }
  return animationVariants[baseVariant];
}
