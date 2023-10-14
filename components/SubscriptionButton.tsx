"use client";
import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Zap } from "lucide-react";
import axios from "axios";

interface Props {
  isPro: boolean;
}

const SubscriptionButton = ({ isPro = false }: Props) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("Billing error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button disabled={loading} variant={isPro ? "default" : "premium"} onClick={onClick}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};

export default SubscriptionButton;
