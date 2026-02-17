require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "USD",
          product_data: {
            name: "Demo Product",
            description: "Simple Stripe Demonstration",
          },
          unit_amount: 4999,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({ url: session.url });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
