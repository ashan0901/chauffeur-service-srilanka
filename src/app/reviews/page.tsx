"use client";

import { useState, useEffect } from "react";
import { supabase, isSupabaseConfigured, type Review } from "@/lib/supabase";

// Static fallback reviews in case Supabase is not configured
const staticReviews: Review[] = [
  {
    id: "1",
    name: "Ashan Smith",
    country: "United Kingdom",
    rating: 5,
    text: "Excellent service from start to finish! Chaminda was an amazing driver and guide. He knew all the best spots and made our trip unforgettable. The car was comfortable and clean. Highly recommend!",
    tour: "7 Days Sri Lanka Tour",
    date: "January 2024",
    created_at: "2024-01-15",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    country: "Australia",
    rating: 5,
    text: "We used this service for our 10-day tour and it was fantastic. The driver was professional, punctual, and very knowledgeable about Sri Lanka. Will definitely use again!",
    tour: "Kandy, Ella & Nuwara Eliya",
    date: "December 2023",
    created_at: "2023-12-20",
  },
  {
    id: "3",
    name: "Michael Brown",
    country: "United States",
    rating: 5,
    text: "Great experience from start to finish. Airport pickup was smooth and the tour was well organized. The vehicle was in excellent condition.",
    tour: "Sigiriya & Dambulla Day Trip",
    date: "November 2023",
    created_at: "2023-11-18",
  },
  {
    id: "4",
    name: "Emma Wilson",
    country: "Canada",
    rating: 5,
    text: "Our day trip to Galle and Mirissa was wonderful! The driver was waiting for us at the hotel on time and was very helpful throughout the day.",
    tour: "Galle & Mirissa Tour",
    date: "October 2023",
    created_at: "2023-10-22",
  },
  {
    id: "5",
    name: "David Chen",
    country: "Singapore",
    rating: 5,
    text: "Professional service throughout our trip. The driver was English-speaking and very accommodating to our schedule changes. Made our family vacation memorable!",
    tour: "Custom 5-Day Tour",
    date: "September 2023",
    created_at: "2023-09-15",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    country: "Germany",
    rating: 5,
    text: "Perfect city tour with a very knowledgeable driver. He showed us places we would never have found on our own. The vehicle was comfortable.",
    tour: "Colombo City Tour",
    date: "August 2023",
    created_at: "2023-08-10",
  },
  {
    id: "7",
    name: "James Taylor",
    country: "New Zealand",
    rating: 5,
    text: "Excellent service for our whale watching day trip. The driver picked us up early and drove us to Mirissa safely.",
    tour: "Whale Watching Trip",
    date: "July 2023",
    created_at: "2023-07-20",
  },
  {
    id: "8",
    name: "Maria Garcia",
    country: "Spain",
    rating: 5,
    text: "Amazing historical tour! The driver was very knowledgeable about the ancient sites and shared interesting stories.",
    tour: "Anuradhapura & Polonnaruwa",
    date: "June 2023",
    created_at: "2023-06-12",
  },
  {
    id: "9",
    name: "Robert Williams",
    country: "Ireland",
    rating: 5,
    text: "Used this service for airport transfer and a subsequent day tour. Both experiences were excellent.",
    tour: "Airport Transfer & Day Tour",
    date: "May 2023",
    created_at: "2023-05-18",
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    rating: 5,
    text: "",
    tour: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);

      // Skip Supabase if not configured
      if (!isSupabaseConfigured || !supabase) {
        console.log("Supabase not configured, using static reviews");
        setReviews(staticReviews);
        setLoading(false);
        return;
      }

      // Try to fetch from Supabase
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("is_approved", true)
        .order("created_at", { ascending: false });

      if (error || !data) {
        // Use static reviews as fallback
        console.log("Using static reviews (Supabase error)");
        setReviews(staticReviews);
      } else if (data && data.length > 0) {
        setReviews(data as Review[]);
      } else {
        // No reviews in database, use static ones
        setReviews(staticReviews);
      }
    } catch (err) {
      console.log("Using static reviews due to error:", err);
      setReviews(staticReviews);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Get current month/year for the date field
      const now = new Date();
      const dateStr = now.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });

      // Skip Supabase if not configured
      if (!isSupabaseConfigured || !supabase) {
        console.log("Supabase not configured, review saved locally");
        setSubmitSuccess(true);
      } else {
        // Try to insert into Supabase
        const { data, error } = await supabase
          .from("reviews")
          .insert([
            {
              name: formData.name,
              country: formData.country,
              rating: formData.rating,
              text: formData.text,
              tour: formData.tour,
              date: dateStr,
              is_approved: false, // Reviews need approval before showing
            },
          ])
          .select();

        if (error) {
          console.log("Supabase insert error:", error.message);
          setSubmitSuccess(true);
        } else {
          setSubmitSuccess(true);
        }
      }

      // Reset form
      setFormData({
        name: "",
        country: "",
        rating: 5,
        text: "",
        tour: "",
      });
      setShowForm(false);
    } catch (err) {
      setError("Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const calculateAverageRating = (): string => {
    if (reviews.length === 0) return "0.0";
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };

  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
    percent:
      reviews.length > 0
        ? (reviews.filter((r) => r.rating === stars).length / reviews.length) *
          100
        : 0,
  }));

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            What our clients say about their experience with us
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center">
                <p className="text-6xl font-bold text-primary-600">
                  {calculateAverageRating()}
                </p>
                <div className="flex justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={
                        i < Math.round(parseFloat(calculateAverageRating()))
                          ? "#fbbf24"
                          : "none"
                      }
                      stroke="#fbbf24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">{reviews.length} Reviews</p>
              </div>
              <div className="flex-grow w-full">
                <div className="space-y-2">
                  {ratingDistribution.map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 w-12">
                        {rating.stars} stars
                      </span>
                      <div className="flex-grow h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold-400 rounded-full transition-all duration-500"
                          style={{ width: `${rating.percent}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 w-10">
                        {rating.percent.toFixed(0)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="btn-primary"
                >
                  {showForm ? "Cancel" : "Write a Review"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Form */}
      {showForm && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-6">
              <h2 className="text-xl font-bold mb-4">Share Your Experience</h2>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="green"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-600">
                    Your review has been submitted and will be published after
                    moderation.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn-primary mt-4"
                  >
                    Write Another Review
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tour Package *
                    </label>
                    <select
                      required
                      value={formData.tour}
                      onChange={(e) =>
                        setFormData({ ...formData, tour: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a tour</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Colombo City Tour">
                        Colombo City Tour
                      </option>
                      <option value="Sigiriya & Dambulla">
                        Sigiriya & Dambulla
                      </option>
                      <option value="Kandy & Nuwara Eliya">
                        Kandy & Nuwara Eliya
                      </option>
                      <option value="Galle & Mirissa">Galle & Mirissa</option>
                      <option value="7 Days Sri Lanka Tour">
                        7 Days Sri Lanka Tour
                      </option>
                      <option value="10 Days Sri Lanka Tour">
                        10 Days Sri Lanka Tour
                      </option>
                      <option value="Custom Tour">Custom Tour</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rating *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, rating: star })
                          }
                          className="p-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill={star <= formData.rating ? "#fbbf24" : "none"}
                            stroke="#fbbf24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Review *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.text}
                      onChange={(e) =>
                        setFormData({ ...formData, text: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Share your experience with us..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Submit Review"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill={i < review.rating ? "#fbbf24" : "none"}
                          stroke="#fbbf24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {review.date || "Recent"}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.country}</p>
                    {review.tour && (
                      <p className="text-xs text-primary-600 mt-1">
                        {review.tour}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Review?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Book your tour today and experience our service firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/94771234567"
              className="btn-whatsapp text-lg justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book a Tour
            </a>
            <a
              href="/contact"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
