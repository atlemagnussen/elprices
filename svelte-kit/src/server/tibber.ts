import { env } from "$env/dynamic/private"
import { getCurrentPriceTest } from "./tibber.test"
import { getCurrentPriceLive } from "./tibber.live"

const devEnv = env.NODE_ENV === "development"

console.log("devEnv", devEnv)

export const getCurrentPrice = async () => {
    if (devEnv)
        return getCurrentPriceTest().homes[0].currentSubscription.priceInfo.current
    else
        return getCurrentPriceLive()
}