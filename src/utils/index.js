const formatDate = (value) => value.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
});

const getStatus = ({ upcoming, success }) => {
    if (upcoming) return 'upcoming';
    if (success) return 'success'
    return 'failed';
}

export {
    formatDate,
    getStatus
}
