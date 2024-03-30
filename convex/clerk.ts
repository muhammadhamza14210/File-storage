"use node";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { Webhook } from "svix";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

export const fulfill = internalAction({
    args: {headers: v.any(), payload: v.string()},
    handler: async(ctx, args) =>{
        const wh = new Webhook(webhookSecret);
        const payload = await wh.verify(args.payload, args.headers) as WebhookEvent;
        return payload
    }
});
