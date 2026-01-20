"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils/formatting";
import { calculateAllocation } from "@/lib/utils/allocation";

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tiers = [
    {
      amount: 25,
      name: "Seed",
      description: "School supplies for 1 child",
    },
    {
      amount: 50,
      name: "Sprout",
      description: "Materials for 1 family",
    },
    {
      amount: 100,
      name: "Bloom",
      description: "Full enrichment program",
      popular: true,
    },
    {
      amount: 250,
      name: "Garden",
      description: "Support 5 families",
    },
  ];

  const handleTierClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setError(null);
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 10) {
      setSelectedAmount(numValue);
      setError(null);
    }
  };

  const handleDonate = async () => {
    if (selectedAmount < 10) {
      setError("Minimum donation amount is $10");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: selectedAmount,
          frequency,
        }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Failed to create checkout session");
        setIsLoading(false);
      }
    } catch {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const allocation = calculateAllocation(selectedAmount);

  return (
    <section id="donate" className="py-24 bg-gradient-to-br from-daisy-sunshine-50 via-white to-daisy-forest-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-daisy-forest-700 sm:text-4xl">
            Make a Difference Today
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Your donation directly supports families in need. Choose an amount below or
            enter a custom contribution.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {/* Donation Tiers */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {tiers.map((tier) => (
              <Card
                key={tier.amount}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedAmount === tier.amount && !customAmount
                    ? "border-2 border-daisy-forest-700 shadow-md"
                    : ""
                }`}
                onClick={() => handleTierClick(tier.amount)}
                data-testid={`tier-${tier.name.toLowerCase()}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl font-bold">
                      {formatCurrency(tier.amount)}
                    </CardTitle>
                    {tier.popular && (
                      <Badge variant="secondary">Popular</Badge>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-daisy-forest-700">
                    {tier.name}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{tier.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-8">
            <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
              Or enter a custom amount
            </label>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-gray-700">$</span>
              <input
                id="custom-amount"
                type="number"
                min="10"
                max="10000"
                step="5"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder="Enter amount"
                className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-lg ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-daisy-forest-700 focus-visible:ring-offset-2"
                data-testid="custom-amount"
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">Minimum donation: $10</p>
          </div>

          {/* Frequency Selection */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-700 mb-3">Donation frequency</p>
            <div className="flex gap-4">
              <button
                onClick={() => setFrequency("one-time")}
                className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${
                  frequency === "one-time"
                    ? "border-daisy-forest-700 bg-daisy-forest-50 text-daisy-forest-700"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}
                data-testid="frequency-one-time"
              >
                One-time donation
              </button>
              <button
                onClick={() => setFrequency("monthly")}
                className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-colors ${
                  frequency === "monthly"
                    ? "border-daisy-forest-700 bg-daisy-forest-50 text-daisy-forest-700"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}
                data-testid="frequency-monthly"
              >
                Monthly donation
                {frequency === "monthly" && (
                  <Badge className="ml-2" variant="secondary" data-testid="recurring-badge">
                    Recurring
                  </Badge>
                )}
              </button>
            </div>
          </div>

          {/* Selected Amount Display */}
          {selectedAmount >= 10 && (
            <div className="mb-8 rounded-lg bg-gradient-to-br from-daisy-teal-light/20 to-daisy-lavender-light/20 p-6 border-2 border-daisy-teal-light shadow-daisy-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-daisy-forest-700">
                  Your {frequency} donation
                </span>
                <span className="text-3xl font-bold text-daisy-forest-700" data-testid="selected-amount">
                  {formatCurrency(selectedAmount)}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Programs & Direct Support (78%)</span>
                  <span className="font-semibold text-daisy-forest-700" data-testid="allocation-programs">
                    {formatCurrency(allocation.programs)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Operations & Admin (14%)</span>
                  <span className="font-semibold text-daisy-teal-deep" data-testid="allocation-operations">
                    {formatCurrency(allocation.operations)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Fundraising & Outreach (8%)</span>
                  <span className="font-semibold text-daisy-lavender-deep" data-testid="allocation-fundraising">
                    {formatCurrency(allocation.fundraising)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Donate Button */}
          <Button
            onClick={handleDonate}
            disabled={isLoading || selectedAmount < 10}
            size="lg"
            className="w-full"
            data-testid="donate-button"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              `Donate ${formatCurrency(selectedAmount)} ${frequency === "monthly" ? "/month" : ""}`
            )}
          </Button>

          {/* Employer Matching */}
          <p className="mt-6 text-center text-sm text-gray-700">
            Does your employer match donations? Check if your company participates in
            matching gift programs to double your impact!
          </p>
        </div>
      </div>
    </section>
  );
}
