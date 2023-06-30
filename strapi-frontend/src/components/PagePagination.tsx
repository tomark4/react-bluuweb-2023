import Link from "next/link";
import React from "react";

interface Props {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
  path?: string;
}

const PagePagination = ({ path = "blog", pagination }: Props) => {
  const { page, pageCount } = pagination;

  const activeClass =
    "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";

  const linkItemClass =
    "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  const classPrev =
    "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  const classNext =
    "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  const navigationPath = path ? `/${path}?p=` : `/blog?p=`;

  return (
    <nav aria-label="Page navigation example" className="text-center">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            href={
              page === 1
                ? `${navigationPath}${page}`
                : `${navigationPath}${page - 1}`
            }
            className={`${classPrev} ${
              page === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Previous
          </a>
        </li>
        {Array.from({ length: pageCount }).map((_, index) => (
          <li key={index}>
            <Link
              href={`${navigationPath}${index + 1}`}
              className={`${index + 1 === page ? activeClass : linkItemClass}`}
            >
              {index + 1}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href={
              page === pageCount
                ? `${navigationPath}${page}`
                : `${navigationPath}${page + 1}`
            }
            className={`${classNext} ${
              page === pageCount ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PagePagination;
