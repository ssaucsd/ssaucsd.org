"use cache";

import { ssamembersEvent } from "./db/schema";
import { db } from "./index";
import { cacheLife } from "next/cache";

import { asc, gt } from "drizzle-orm";

export const getEvents = async () => {
  cacheLife("minutes");
  const events = await db
    .select({
      id: ssamembersEvent.id,
      name: ssamembersEvent.name,
      date: ssamembersEvent.date,
      imageUrl: ssamembersEvent.imageUrl,
      location: ssamembersEvent.location,
      endDate: ssamembersEvent.endDate,
    })
    .from(ssamembersEvent)
    .where(gt(ssamembersEvent.date, new Date().toISOString()))
    .orderBy(asc(ssamembersEvent.date))
    .limit(4);
  return events;
};

export const getMoreEvents = async () => {
  cacheLife("minutes");
  const events = await db
    .select({
      id: ssamembersEvent.id,
      name: ssamembersEvent.name,
      date: ssamembersEvent.date,
      imageUrl: ssamembersEvent.imageUrl,
      location: ssamembersEvent.location,
      endDate: ssamembersEvent.endDate,
    })
    .from(ssamembersEvent)
    .where(gt(ssamembersEvent.date, new Date().toISOString()))
    .orderBy(asc(ssamembersEvent.date));
  return events;
};
