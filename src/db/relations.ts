import { relations } from "drizzle-orm/relations";
import { ssamembersEvent, ssamembersRsvp } from "./schema";

export const ssamembersRsvpRelations = relations(ssamembersRsvp, ({ one }) => ({
  ssamembersEvent: one(ssamembersEvent, {
    fields: [ssamembersRsvp.eventId],
    references: [ssamembersEvent.id],
  }),
}));

export const ssamembersEventRelations = relations(
  ssamembersEvent,
  ({ many }) => ({
    ssamembersRsvps: many(ssamembersRsvp),
  }),
);
