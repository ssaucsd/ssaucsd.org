"use cache";

import "server-only";
import { cacheLife } from "next/cache";
import { createAnonClient } from "@/utils/supabase/server";

export const getEvents = async () => {
  cacheLife("minutes");
  const now = new Date().toISOString();
  const supabase = createAnonClient();

  const { data, error } = await supabase
    .from("events")
    .select("id, title, start_time, end_time, image_url, location")
    .gt("end_time", now)
    .order("start_time", { ascending: true })
    .limit(4);

  if (error) {
    console.error("Error fetching events:", error);
    return [];
  }

  return data ?? [];
};

export const getMoreEvents = async () => {
  cacheLife("minutes");
  const now = new Date().toISOString();
  const supabase = createAnonClient();

  const { data, error } = await supabase
    .from("events")
    .select("id, title, start_time, end_time, image_url, location")
    .gt("end_time", now)
    .order("start_time", { ascending: true });

  if (error) {
    console.error("Error fetching events:", error);
    return [];
  }

  return data ?? [];
};
