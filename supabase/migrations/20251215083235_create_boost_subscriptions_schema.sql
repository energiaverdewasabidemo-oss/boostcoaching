/*
  # Boost App - Subscriptions Schema

  ## Summary
  Creates the database schema for managing user subscriptions for the Boost app.
  
  ## New Tables
  
  ### `profiles`
  - `id` (uuid, primary key) - Links to auth.users
  - `email` (text) - User email
  - `full_name` (text) - User's full name
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `subscriptions`
  - `id` (uuid, primary key) - Unique subscription identifier
  - `user_id` (uuid, foreign key) - References profiles.id
  - `plan_type` (text) - 'monthly' or 'annual'
  - `status` (text) - 'active', 'cancelled', 'expired', 'trial'
  - `price` (decimal) - Subscription price
  - `currency` (text) - Currency code (default 'EUR')
  - `trial_end` (timestamptz) - Trial period end date
  - `current_period_start` (timestamptz) - Current billing period start
  - `current_period_end` (timestamptz) - Current billing period end
  - `cancel_at_period_end` (boolean) - Whether subscription cancels at period end
  - `stripe_subscription_id` (text) - Stripe subscription ID
  - `stripe_customer_id` (text) - Stripe customer ID
  - `created_at` (timestamptz) - Subscription creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `payments`
  - `id` (uuid, primary key) - Unique payment identifier
  - `subscription_id` (uuid, foreign key) - References subscriptions.id
  - `amount` (decimal) - Payment amount
  - `currency` (text) - Currency code
  - `status` (text) - 'succeeded', 'failed', 'pending'
  - `stripe_payment_intent_id` (text) - Stripe payment intent ID
  - `payment_method` (text) - Payment method type
  - `created_at` (timestamptz) - Payment timestamp

  ## Security
  - RLS enabled on all tables
  - Policies for authenticated users to manage their own data
  - Read-only access to own subscription and payment data
*/

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  plan_type text NOT NULL CHECK (plan_type IN ('monthly', 'annual')),
  status text NOT NULL DEFAULT 'trial' CHECK (status IN ('active', 'cancelled', 'expired', 'trial')),
  price decimal(10,2) NOT NULL,
  currency text NOT NULL DEFAULT 'EUR',
  trial_end timestamptz,
  current_period_start timestamptz NOT NULL,
  current_period_end timestamptz NOT NULL,
  cancel_at_period_end boolean DEFAULT false,
  stripe_subscription_id text UNIQUE,
  stripe_customer_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscriptions"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscriptions"
  ON subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subscription_id uuid NOT NULL REFERENCES subscriptions(id) ON DELETE CASCADE,
  amount decimal(10,2) NOT NULL,
  currency text NOT NULL DEFAULT 'EUR',
  status text NOT NULL CHECK (status IN ('succeeded', 'failed', 'pending')),
  stripe_payment_intent_id text UNIQUE,
  payment_method text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own payments"
  ON payments FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscriptions
      WHERE subscriptions.id = payments.subscription_id
      AND subscriptions.user_id = auth.uid()
    )
  );

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_subscription_id ON subscriptions(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_payments_subscription_id ON payments(subscription_id);
CREATE INDEX IF NOT EXISTS idx_payments_stripe_payment_intent_id ON payments(stripe_payment_intent_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to automatically update updated_at
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_profiles_updated_at'
  ) THEN
    CREATE TRIGGER update_profiles_updated_at
      BEFORE UPDATE ON profiles
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_subscriptions_updated_at'
  ) THEN
    CREATE TRIGGER update_subscriptions_updated_at
      BEFORE UPDATE ON subscriptions
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;
