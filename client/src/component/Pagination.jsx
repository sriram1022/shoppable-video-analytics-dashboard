function Pagination({ pagination, onPageChange }) {
  if (!pagination) {
    return null;
  }

  const { page, totalPages } = pagination;

  return (
    <div>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;