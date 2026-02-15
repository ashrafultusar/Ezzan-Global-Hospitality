import { unstable_cache as nextCache } from "next/cache";
import { cache as reactCache } from "react";

// Types for the callback function
type Callback<T> = (...args: any[]) => Promise<T>;

/**
 * Enhanced cache function that combines React's request memoization
 * with Next.js specific Data Cache (unstable_cache).
 * 
 * Uses on-demand revalidation only (via tags). No time-based revalidation.
 * 
 * @param cb The async function to cache
 * @param keyParts The key parts for the cache (e.g. ['users', userId])
 * @param options Revalidation options (tags only, no revalidate time)
 */
export const cachedData = <T>(
    cb: Callback<T>,
    keyParts: string[],
    options: { tags?: string[] } = {}
) => {
    return reactCache(
        nextCache(cb, keyParts, {
            tags: options.tags,
        })
    );
};

export const CACHE_TAGS = {
    USERS: "users",
    TOURS: "tours",
    HOTELS: "hotels",
    ROOMS: "rooms",
    BLOGS: "blogs",
    SUCCESS_STORIES: "success-stories",
};
