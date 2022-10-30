export enum Level {
    Normal = "NORMAL",
    Expensive = "EXPENSIVE",
    VeryExpensive = "VERY_EXPENSIVE"
}
export interface Price {
    total: number
    energy: number
    tax: number
    startsAt: string
    level: Level,
    currency: string
}

export interface PriceInfo {
    current: Price,
    today: Price[],
    tomorrow: Price[]
}

export interface Subscription {
    priceInfo: PriceInfo
}

export interface Home {
    currentSubscription: Subscription
}

export interface Viewer {
    homes: Home[]
}

