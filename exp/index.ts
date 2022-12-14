import https from "https"
// require('dotenv').config();

const nameQuery = `{ viewer { name } }`

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
                    }
                    today {
                        total
                        energy
                        tax
                        startsAt
                    }
                    tomorrow {
                        total
                        energy
                        tax
                        startsAt
                    }
                }
            }
        }
    }
}`
const token = "" //
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

const main = async () => {
    console.log("start fetching from", url)
    const query = JSON.stringify({query: priceQuery})
    console.log("query", query)
    const data = await getFileFromHttp(url, options, query)
    console.log(data)
    const json = JSON.parse(data)
    const d = json.data.viewer as Viewer
    console.log(d.homes[0].currentSubscription.priceInfo.current.total)
}

main().catch(err => {
    console.error(err)
})