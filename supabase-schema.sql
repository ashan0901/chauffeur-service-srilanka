-- Supabase Database Schema for Chauffeur Service Website
-- Run this SQL in your Supabase SQL Editor to set up the database

-- Enable Row Level Security (RLS) for security
ALTER TABLE IF EXISTS reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS contact_messages ENABLE ROW LEVEL SECURITY;

-- Create Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  tour TEXT,
  date TEXT,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  tour_package TEXT NOT NULL,
  travel_date DATE,
  number_of_guests INTEGER DEFAULT 1,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(is_approved) WHERE is_approved = true;
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);

-- Set up Row Level Security Policies
-- Reviews: Anyone can read approved reviews, only authenticated users can insert
CREATE POLICY "Allow public read access to approved reviews" ON reviews
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Allow authenticated users to insert reviews" ON reviews
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Bookings: Only authenticated users can manage bookings (for admin panel)
CREATE POLICY "Allow authenticated users to manage bookings" ON bookings
  FOR ALL USING (auth.role() = 'authenticated');

-- Contact Messages: Only authenticated users can manage messages (for admin panel)
CREATE POLICY "Allow authenticated users to manage contact messages" ON contact_messages
  FOR ALL USING (auth.role() = 'authenticated');

-- Insert sample reviews (for demonstration)
INSERT INTO reviews (name, country, rating, text, tour, date, is_approved) VALUES
('John Smith', 'United Kingdom', 5, 'Excellent service from start to finish! Chaminda was an amazing driver and guide. He knew all the best spots and made our trip unforgettable. The car was comfortable and clean. Highly recommend!', '7 Days Sri Lanka Tour', 'January 2024', true),
('Sarah Johnson', 'Australia', 5, 'We used this service for our 10-day tour and it was fantastic. The driver was professional, punctual, and very knowledgeable about Sri Lanka. Will definitely use again!', 'Kandy, Ella & Nuwara Eliya', 'December 2023', true),
('Michael Brown', 'United States', 5, 'Great experience from start to finish. Airport pickup was smooth and the tour was well organized. The vehicle was in excellent condition.', 'Sigiriya & Dambulla Day Trip', 'November 2023', true),
('Emma Wilson', 'Canada', 5, 'Our day trip to Galle and Mirissa was wonderful! The driver was waiting for us at the hotel on time and was very helpful throughout the day.', 'Galle & Mirissa Tour', 'October 2023', true),
('David Chen', 'Singapore', 5, 'Professional service throughout our trip. The driver was English-speaking and very accommodating to our schedule changes. Made our family vacation memorable!', 'Custom 5-Day Tour', 'September 2023', true);

-- Create a function to insert reviews (can be called from client)
CREATE OR REPLACE FUNCTION insert_review(
  p_name TEXT,
  p_country TEXT,
  p_rating INTEGER,
  p_text TEXT,
  p_tour TEXT,
  p_date TEXT
) RETURNS UUID AS $$
DECLARE
  new_id UUID;
BEGIN
  INSERT INTO reviews (name, country, rating, text, tour, date, is_approved)
  VALUES (p_name, p_country, p_rating, p_text, p_tour, p_date, false)
  RETURNING id INTO new_id;
  
  RETURN new_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to insert bookings
CREATE OR REPLACE FUNCTION insert_booking(
  p_name TEXT,
  p_email TEXT,
  p_phone TEXT,
  p_tour_package TEXT,
  p_travel_date DATE,
  p_number_of_guests INTEGER,
  p_message TEXT
) RETURNS UUID AS $$
DECLARE
  new_id UUID;
BEGIN
  INSERT INTO bookings (name, email, phone, tour_package, travel_date, number_of_guests, message)
  VALUES (p_name, p_email, p_phone, p_tour_package, p_travel_date, p_number_of_guests, p_message)
  RETURNING id INTO new_id;
  
  RETURN new_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to insert contact messages
CREATE OR REPLACE FUNCTION insert_contact_message(
  p_name TEXT,
  p_email TEXT,
  p_phone TEXT,
  p_message TEXT
) RETURNS UUID AS $$
DECLARE
  new_id UUID;
BEGIN
  INSERT INTO contact_messages (name, email, phone, message)
  VALUES (p_name, p_email, p_phone, p_message)
  RETURNING id INTO new_id;
  
  RETURN new_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enable Realtime for reviews (optional - for live updates)
ALTER PUBLICATION supabase_realtime ADD TABLE reviews;
