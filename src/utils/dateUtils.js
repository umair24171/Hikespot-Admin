import { Timestamp } from 'firebase/firestore';

export const formatDate = (date) => {
    if (!date) return '-';
    // Check if date is a Timestamp
    const dateObj = date instanceof Timestamp ? date.toDate() : new Date(date);
    
    // Check if dateObj is a valid date
    if (isNaN(dateObj.getTime())) return '-';
    
    return dateObj.toLocaleDateString(); // Or use a more specific formatting function if needed
};
