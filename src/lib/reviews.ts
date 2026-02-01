import { supabase, Review } from "./supabase";

export async function getFeaturedReviews(limit: number = 3): Promise<Review[]> {
  if (!supabase) {
    // Return empty array if Supabase is not configured
    return [];
  }

  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("rating", 5)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }

  return data || [];
}
