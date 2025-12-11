export function handlePagination({data, currentPage = 1, itemsPerPage = 9}) {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    return {
        currentPage,
        totalPages,
        itemsPerPage,
        totalItems,
        paginatedData
    };
}