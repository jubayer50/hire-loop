import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const plan_price_id = {
  seeker_pro: "price_1TgcvoFP5Ht70T0dB88GpNoZ",
  seeker_premium: "price_1TgzbvFP5Ht70T0ddhfY9xqN",
  recruiter_growth: "price_1TgzdYFP5Ht70T0dhvxLmLzz",
  recruiter_enterprise: "price_1Tgze9FP5Ht70T0dumN7iGdJ",
};
