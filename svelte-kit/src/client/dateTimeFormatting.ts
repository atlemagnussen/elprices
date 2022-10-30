
const browserlang = "no"

export const formatTimeOnly = (date: Date | string | number) => {
    if (!date)
        return ""
    try {
        const dateDate = new Date(date)
        let formatted = ""
        formatted = timeOnlyNb.format(dateDate)
        return formatted
    } catch(e) {
        //console.log(e)
    }
    return ""
}

export const formatDateOnly = (date: Date | string | number) => {
    if (!date)
        return ""
    try {
        const dateDate = new Date(date)
        let formatted = ""
        formatted = dateOnlyNb.format(dateDate)
        return formatted
    } catch(e) {
        //console.log(e)
    }
    return ""
}

export const formatDateTime = (date: Date | string | number) => {
    try {
        const dateDate = new Date(date)
        let formatted = ""
        formatted = dateTimeNb.format(dateDate)
        return formatted
    } catch(e) {
        //console.log(e)
    }
    return ""
}

export const formatDateTimeLong = (date: Date | string | number) => {
    try {
        const dateDate = new Date(date)
        let formatted = ""
        formatted = dateTimeLongNb.format(dateDate)
        return formatted
    } catch(e) {
        //console.log(e)
    }
    return ""
}

export const formatDateTimeShort = (date: Date | string | number) => {
    try {
        const dateDate = new Date(date)
        let formatted = ""
        formatted = dateTimeShortNb.format(dateDate)
        return formatted
    } catch(e) {
        //console.log(e)
    }
    return ""
}

// timeonly
const timeOnlyFormat: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit"
}
const timeOnlyNb = Intl.DateTimeFormat("nb", timeOnlyFormat)
// date only
const dateOnlyFormat: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "short",
    day: "2-digit"
}

const dateOnlyBrowserLang = Intl.DateTimeFormat(browserlang, dateOnlyFormat)
const dateOnlyNb = Intl.DateTimeFormat("nb", dateOnlyFormat)

// date time
const dateTimeFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
}
const dateTimeBrowserLang = Intl.DateTimeFormat(browserlang, dateTimeFormat)
const dateTimeNb = Intl.DateTimeFormat("nb", dateTimeFormat)

// date time long
const dateTimeLongFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}
const dateTimeLongBrowserLang = Intl.DateTimeFormat(browserlang, dateTimeLongFormat)
const dateTimeLongNb = Intl.DateTimeFormat("nb", dateTimeLongFormat)

// date time short
const dateTimeShortFormat: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
}
const dateTimeShortBrowserLang = Intl.DateTimeFormat(browserlang, dateTimeShortFormat)
const dateTimeShortNb = Intl.DateTimeFormat("nb", dateTimeShortFormat)
