import { type Viewer, Level } from "./types"

export const getCurrentPriceTest = (): Viewer => {
    console.log("test data")
    return example
}

const today = new Date()

const times: string[] = []
for (let i = 0; i<24; i++) {
    const date = new Date()
    date.setHours(i)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)

    const dateStr = date.toISOString()
    times.push(dateStr)
}

const example: Viewer = {
    "homes": [
        {
            "currentSubscription": {
                "priceInfo": {
                    "current": {
                        "total": 1.5757,
                        "energy": 1.0298,
                        "tax": 0.2674,
                        "startsAt": times[today.getHours()],
                        "currency": "NOK",
                        "level": Level.Normal
                    },
                    "today": [
                        {
                            "total": 0.2972,
                            "energy": 0.0298,
                            "tax": 0.2674,
                            "startsAt": times[0],
                            "currency": "NOK",
                            "level": Level.Cheap
                        },
                        {
                            "total": 0.2703,
                            "energy": 0.0082,
                            "tax": 0.2621,
                            "startsAt": times[1],
                            "currency": "NOK",
                            "level": Level.VeryCheap
                        },
                        {
                            "total": 1.2669,
                            "energy": 1.0056,
                            "tax": 0.2613,
                            "startsAt": times[2],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2628,
                            "energy": 1.0022,
                            "tax": 0.2606,
                            "startsAt": times[3],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2389,
                            "energy": 0.9831,
                            "tax": 0.2558,
                            "startsAt": times[4],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2407,
                            "energy": 0.9845,
                            "tax": 0.2562,
                            "startsAt": times[5],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2472,
                            "energy": 0.9898,
                            "tax": 0.2574,
                            "startsAt": times[6],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2696,
                            "energy": 1.0077,
                            "tax": 0.2619,
                            "startsAt": times[7],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.3827,
                            "energy": 1.0981,
                            "tax": 0.2846,
                            "startsAt": times[8],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.4237,
                            "energy": 1.131,
                            "tax": 0.2927,
                            "startsAt": times[9],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.3242,
                            "energy": 1.0514,
                            "tax": 0.2728,
                            "startsAt": times[10],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.296,
                            "energy": 1.0288,
                            "tax": 0.2672,
                            "startsAt": times[11],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2977,
                            "energy": 1.0302,
                            "tax": 0.2675,
                            "startsAt": times[12],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2973,
                            "energy": 1.0298,
                            "tax": 0.2675,
                            "startsAt": times[13],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.3312,
                            "energy": 1.0569,
                            "tax": 0.2743,
                            "startsAt": times[14],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.3848,
                            "energy": 1.0999,
                            "tax": 0.2849,
                            "startsAt": times[15],
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.5756,
                            "energy": 1.2525,
                            "tax": 0.3231,
                            "startsAt": times[16],
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 1.755,
                            "energy": 1.396,
                            "tax": 0.359,
                            "startsAt": times[17],
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 1.9559,
                            "energy": 1.5567,
                            "tax": 0.3992,
                            "startsAt": times[18],
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 2.1332,
                            "energy": 1.6985,
                            "tax": 0.4347,
                            "startsAt": times[19],
                            "currency": "NOK",
                            "level": Level.VeryExpensive
                        },
                        {
                            "total": 2.0661,
                            "energy": 1.6449,
                            "tax": 0.4212,
                            "startsAt": times[20],
                            "currency": "NOK",
                            "level": Level.VeryExpensive
                        },
                        {
                            "total": 1.8483,
                            "energy": 1.4706,
                            "tax": 0.3777,
                            "startsAt": times[21],
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 1.7434,
                            "energy": 1.3867,
                            "tax": 0.3567,
                            "startsAt": times[22],
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 1.5942,
                            "energy": 1.2673,
                            "tax": 0.3269,
                            "startsAt": times[23],
                            "currency": "NOK",
                            "level": Level.Expensive
                        }
                    ],
                    "tomorrow": []
                }
            }
        }
    ]
}
