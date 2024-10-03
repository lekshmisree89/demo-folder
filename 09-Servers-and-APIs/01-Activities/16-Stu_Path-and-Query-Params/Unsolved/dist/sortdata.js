// Helper function to sort data based on key and type
const sortData = (firstKey, secondKey, type) => {
    return (a, b) => {
        const compare = (valueA, valueB) => {
            if (valueA < valueB) {
                return -1;
            }
            if (valueA > valueB) {
                return 1;
            }
            return 0;
        };
        const compareKeys = (key) => {
            return type === 'asc' ? compare(a[key], b[key]) : compare(b[key], a[key]);
        };
        const compareFirstKey = compareKeys(firstKey);
        if (compareFirstKey !== 0) {
            return compareFirstKey;
        }
        return compareKeys(secondKey);
    };
};
export default sortData;
