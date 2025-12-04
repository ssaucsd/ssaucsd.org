"use cache";

import "server-only";
import { ssamembersEvent } from "./db/schema";
import { db } from "./index";
import { cacheLife } from "next/cache";

import { asc, gt, or, and, isNotNull, isNull } from "drizzle-orm";

const getLocalTimeAsUTC = () => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const part = (type: string) =>
    parseInt(parts.find((p) => p.type === type)?.value || "0");

  const year = part("year");
  const month = part("month") - 1; // 0-indexed
  const day = part("day");
  const hour = part("hour");
  const minute = part("minute");
  const second = part("second");

  return new Date(
    Date.UTC(year, month, day, hour, minute, second),
  ).toISOString();
};

export const getEvents = async () => {
  cacheLife("minutes");
  const now = getLocalTimeAsUTC();
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
  const now = getLocalTimeAsUTC();
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
