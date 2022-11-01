<script lang="ts">
    import { formatTimeOnly, formatDateOnly } from "../client/dateTimeFormatting"
    export let startDate = ""

    let dateOnlyFormatted = ""
    let startTimeFormatted = ""
    let endTimeFormatted = ""

    let format = (sDate: string) => {
        startTimeFormatted = formatTimeOnly(sDate)
        dateOnlyFormatted = formatDateOnly(sDate)
        const eDate = new Date(sDate)
        let hours = eDate.getHours()
        eDate.setHours(hours+1)
        endTimeFormatted = formatTimeOnly(eDate)
    }

    $: format(startDate)
</script>

<div>
    <span>{dateOnlyFormatted}</span><br>
    <span class="time">{startTimeFormatted} - {endTimeFormatted}</span>
</div>

<style>
    div {
        font-size: 10vmin;
    }
    .time {
        font-size: 8vmin;
    }
</style>