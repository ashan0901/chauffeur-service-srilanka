import { createClient } from "@supabase/supabase-js";

// Check if Supabase is properly configured
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== "https://your-project.supabase.co" &&
  supabaseAnonKey !== "your-anon-key",
);

// Only create the client if configured
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Database types for TypeScript
export type Review = {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  tour: string;
  date: string;
  created_at: string;
};

export type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  tour_package: string;
  travel_date: string;
  number_of_guests: number;
  message: string;
  status: "pending" | "confirmed" | "cancelled";
  created_at: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
};
