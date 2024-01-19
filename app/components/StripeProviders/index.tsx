"use client";

import { CartProvider } from "use-shopping-cart";

export default function StripeProviders({ children }: React.PropsWithChildren) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      // successUrl="https://commerce-next-yt.vercel.app/stripe/success"
      successUrl={process.env.NEXT_PUBLIC_STRIPE_URL_SUCCESS as string}
      // cancelUrl="https://commerce-next-yt.vercel.app/stripe/error"
      cancelUrl={process.env.NEXT_PUBLIC_STRIPE_URL_CANCEL as string}
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}
