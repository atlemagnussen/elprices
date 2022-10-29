export interface Price {
    total: number
    energy: number
    tax: number
    startsAt: Date
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

