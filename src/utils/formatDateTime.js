export default function formatDateTime(date = new Date()) {

    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const formattedTime = date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    const formattedDateTime = `${formattedDate} ${formattedTime}`;

    return {res: formattedDateTime, formattedDate, formattedTime}
}