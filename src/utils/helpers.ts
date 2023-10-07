export const getFormattedTime = (hourFormat: "numeric" | "2-digit", minuteFormat: "numeric" | "2-digit", hour12Format: true | false): string => {
    return new Date().toLocaleTimeString([], { hour: hourFormat, minute: minuteFormat, hour12: hour12Format });
};

export const getFormattedDate = (weekdayFormat: "long" | "short", monthFormat: "long" | "short", dayFormat: "numeric" | "2-digit"): string => {
    return new Date().toLocaleDateString([], { weekday: weekdayFormat, month: monthFormat, day: dayFormat });
};

// const date = new Date().toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });