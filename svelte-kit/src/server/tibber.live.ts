import https from "https"
import type { Viewer } from "./types"
import { env } from "$env/dynamic/private"

//const nameQuery = `{ viewer { name } }`

const priceQuery = `{
    viewer {
        homes {
            currentSubscription {
                priceInfo {
                    current {
                        total
                        energy
                        tax
                        startsAt
                        currency
                        level
                    }
                    today {
                        total
                        energy
                        tax
                        startsAt
                        currency
                        level
                    }
                    tomorrow {
                        total
                        energy
                        tax
                        startsAt
                        currency
                        level
                    }
                }
            }
        }
    }
}`
const token = env.TOKEN
const url = "https://api.tibber.com/v1-beta/gql"
const options: https.RequestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
}

const getFileFromHttp = (url: string, options: https.RequestOptions, query: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const request = https.request(url, options, (res) => {
            let data = ""
            res.on("data", (chunk) => data += chunk)
            res.on("end", () => resolve(data))
        })
            .on("error", (e) => reject(e))
        request.write(query)
        request.end()
    })
}

export const getCurrentPriceLive = async () => {
    if (!token)
        throw new Error("missing token setup")
    const query = JSON.stringify({query: priceQuery})
    const data = await getFileFromHttp(url, options, query)
    const json = JSON.parse(data)
    const d = json.data.viewer as Viewer
    const current = d.homes[0].currentSubscription.priceInfo.current
    console.log("current", current)
    return current
}
