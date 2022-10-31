import { env } from "$env/dynamic/private"
import { getCurrentPriceTest } from "./tibber.test"
import { getCurrentPriceLive } from "./tibber.live"
import type { PriceInfo } from "./types"

const devEnv = env.NODE_ENV === "development"

console.log("devEnv", devEnv)

export const getCurrentPrice = async (): Promise<PriceInfo> => {
    if (devEnv)
        return getCurrentPriceTest().homes[0].currentSubscription.priceInfo
    else
        return getCurrentPriceLive()
}