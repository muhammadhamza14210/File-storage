import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  files: defineTable({
    createdAt: v.string(),
    name: v.string(),
    updatedAt: v.string(),
  }),
});