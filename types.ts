interface Price {
    total: number
    energy: number
    tax: number
    startsAt: Date
}

interface PriceInfo {
    current: Price,
    today: Price[],
    tomorrow: Price[]
}

interface Subscription {
    priceInfo: PriceInfo
}

interface Home {
    currentSubscription: Subscription
}

interface Viewer {
    homes: Home[]
}

