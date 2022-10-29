import type { PageLoad } from ".svelte-kit/types/src/routes/$types"
import { getCurrentPrice } from "../../server/tibber"

export const load: PageLoad = async () => {
    const price = await getCurrentPrice()
    
    return {
        price
    }
}