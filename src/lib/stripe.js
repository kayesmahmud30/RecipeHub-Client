import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PRICE_ID = {
  Recipehub_Premium: "price_1Tn0GFP7vyktp5TOzMpJJ083",
  Recipehub_Random_Recipe: "price_1Tn0OBP7vyktp5TOuR5KuCqn",
};
