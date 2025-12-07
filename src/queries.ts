"use cache";

import "server-only";
import { ssamembersEvent } from "./db/schema";
import { db } from "./index";
import { cacheLife } from "next/cache";

import { asc, gt, or, and, isNotNull, isNull } from "drizzle-orm";

export const getEvents = async () => {
  cacheLife("minutes");
  const now = new Date().toISOString();
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
    .where(
      or(
        and(
          isNotNull(ssamembersEvent.endDate),
          gt(ssamembersEvent.endDate, now),
        ),
        and(isNull(ssamembersEvent.endDate), gt(ssamembersEvent.date, now)),
      ),
    )
    .orderBy(asc(ssamembersEvent.date))
    .limit(4);
  return events;
};

export const getMoreEvents = async () => {
  cacheLife("minutes");
  const now = new Date().toISOString();
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
    .where(
      or(
        and(
          isNotNull(ssamembersEvent.endDate),
          gt(ssamembersEvent.endDate, now),
        ),
        and(isNull(ssamembersEvent.endDate), gt(ssamembersEvent.date, now)),
      ),
    )
    .orderBy(asc(ssamembersEvent.date));
  return events;
};
