import type { Axis, NumberValue, ScaleTime } from "d3"
import type { ScaleLinear } from "d3-scale"

/// https://developer.tibber.com/docs/reference#pricelevel
export enum Level {
    VeryCheap = "VERY_CHEAP",
    Cheap = "CHEAP",
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

export interface PriceChart {
    data: Price[]
    xExtent: [Date, Date]
    yExtent: [number, number]
    xScale: ScaleTime<number, number, never>
    yScale: ScaleLinear<number, number, never>
    xAxis: Axis<Date | NumberValue>
    yAxis: Axis<NumberValue>
    line: string | null
}