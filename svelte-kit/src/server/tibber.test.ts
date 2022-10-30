import { type Viewer, Level } from "./types"

export const getCurrentPriceTest = (): Viewer => {
    console.log("test data")
    return example
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
                        "startsAt": "2022-10-30T11:00:00.000+01:00",
                        "currency": "NOK",
                        "level": Level.Normal
                    },
                    "today": [
                        {
                            "total": 1.2972,
                            "energy": 1.0298,
                            "tax": 0.2674,
                            "startsAt": "2022-10-30T00:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2703,
                            "energy": 1.0082,
                            "tax": 0.2621,
                            "startsAt": "2022-10-30T01:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2669,
                            "energy": 1.0056,
                            "tax": 0.2613,
                            "startsAt": "2022-10-30T02:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2628,
                            "energy": 1.0022,
                            "tax": 0.2606,
                            "startsAt": "2022-10-30T02:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2389,
                            "energy": 0.9831,
                            "tax": 0.2558,
                            "startsAt": "2022-10-30T03:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2407,
                            "energy": 0.9845,
                            "tax": 0.2562,
                            "startsAt": "2022-10-30T04:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2472,
                            "energy": 0.9898,
                            "tax": 0.2574,
                            "startsAt": "2022-10-30T05:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2696,
                            "energy": 1.0077,
                            "tax": 0.2619,
                            "startsAt": "2022-10-30T06:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.3827,
                            "energy": 1.0981,
                            "tax": 0.2846,
                            "startsAt": "2022-10-30T07:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.4237,
                            "energy": 1.131,
                            "tax": 0.2927,
                            "startsAt": "2022-10-30T08:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.3242,
                            "energy": 1.0514,
                            "tax": 0.2728,
                            "startsAt": "2022-10-30T09:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.296,
                            "energy": 1.0288,
                            "tax": 0.2672,
                            "startsAt": "2022-10-30T10:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2977,
                            "energy": 1.0302,
                            "tax": 0.2675,
                            "startsAt": "2022-10-30T11:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.2973,
                            "energy": 1.0298,
                            "tax": 0.2675,
                            "startsAt": "2022-10-30T12:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.3312,
                            "energy": 1.0569,
                            "tax": 0.2743,
                            "startsAt": "2022-10-30T13:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.3848,
                            "energy": 1.0999,
                            "tax": 0.2849,
                            "startsAt": "2022-10-30T14:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        },
                        {
                            "total": 1.5756,
                            "energy": 1.2525,
                            "tax": 0.3231,
                            "startsAt": "2022-10-30T15:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 1.755,
                            "energy": 1.396,
                            "tax": 0.359,
                            "startsAt": "2022-10-30T16:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 1.9559,
                            "energy": 1.5567,
                            "tax": 0.3992,
                            "startsAt": "2022-10-30T17:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 2.1332,
                            "energy": 1.6985,
                            "tax": 0.4347,
                            "startsAt": "2022-10-30T18:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.VeryExpensive
                        },
                        {
                            "total": 2.0661,
                            "energy": 1.6449,
                            "tax": 0.4212,
                            "startsAt": "2022-10-30T19:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.VeryExpensive
                        },
                        {
                            "total": 1.8483,
                            "energy": 1.4706,
                            "tax": 0.3777,
                            "startsAt": "2022-10-30T20:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 1.7434,
                            "energy": 1.3867,
                            "tax": 0.3567,
                            "startsAt": "2022-10-30T21:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 1.5942,
                            "energy": 1.2673,
                            "tax": 0.3269,
                            "startsAt": "2022-10-30T22:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Expensive
                        },
                        {
                            "total": 1.3729,
                            "energy": 1.0903,
                            "tax": 0.2826,
                            "startsAt": "2022-10-30T23:00:00.000+01:00",
                            "currency": "NOK",
                            "level": Level.Normal
                        }
                    ],
                    "tomorrow": []
                }
            }
        }
    ]
}
