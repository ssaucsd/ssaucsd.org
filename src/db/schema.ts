import {
  pgTable,
  index,
  integer,
  varchar,
  timestamp,
  foreignKey,
  unique,
} from "drizzle-orm/pg-core";

export const ssamembersLink = pgTable(
  "ssamembers_link",
  {
    id: integer().primaryKey().generatedByDefaultAsIdentity({
      name: "ssamembers_link_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 2147483647,
      cache: 1,
    }),
    name: varchar({ length: 256 }).notNull(),
    url: varchar({ length: 1024 }).notNull(),
    tag: varchar({ length: 256 }).default("General"),
    createdAt: timestamp({ withTimezone: true, mode: "string" }).notNull(),
    updatedAt: timestamp({ withTimezone: true, mode: "string" }),
  },
  (table) => [
    index("links_name_idx").using(
      "btree",
      table.name.asc().nullsLast().op("text_ops"),
    ),
  ],
);

export const ssamembersEvent = pgTable(
  "ssamembers_event",
  {
    id: integer().primaryKey().generatedByDefaultAsIdentity({
      name: "ssamembers_event_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 2147483647,
      cache: 1,
    }),
    name: varchar({ length: 256 }).notNull(),
    imageUrl: varchar({ length: 1024 }).default(
      "https://ba961nquml.ufs.sh/f/8WZL3qQlnrib7eKeL1A2EOHTiwGzyx0cWs9IqK7hPnj3YaLU",
    ),
    location: varchar({ length: 256 }).notNull(),
    date: timestamp({ withTimezone: true, mode: "string" }).notNull(),
    createdAt: timestamp({ withTimezone: true, mode: "string" }).notNull(),
    updatedAt: timestamp({ withTimezone: true, mode: "string" }),
    endDate: timestamp({ withTimezone: true, mode: "string" }),
  },
  (table) => [
    index("events_name_idx").using(
      "btree",
      table.name.asc().nullsLast().op("text_ops"),
    ),
  ],
);

export const ssamembersRsvp = pgTable(
  "ssamembers_rsvp",
  {
    id: integer().primaryKey().generatedByDefaultAsIdentity({
      name: "ssamembers_rsvp_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 2147483647,
      cache: 1,
    }),
    eventId: integer().notNull(),
    name: varchar({ length: 256 }).notNull(),
    email: varchar({ length: 256 }).notNull(),
    createdAt: timestamp({ withTimezone: true, mode: "string" }).notNull(),
  },
  (table) => [
    index("rsvp_event_id_idx").using(
      "btree",
      table.eventId.asc().nullsLast().op("int4_ops"),
    ),
    foreignKey({
      columns: [table.eventId],
      foreignColumns: [ssamembersEvent.id],
      name: "ssamembers_rsvp_eventId_ssamembers_event_id_fk",
    }).onDelete("cascade"),
    unique("unique_rsvp_per_event").on(table.eventId, table.email),
  ],
);
