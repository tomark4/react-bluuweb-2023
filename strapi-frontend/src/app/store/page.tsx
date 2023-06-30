import PageCardStore from "@/components/PageCardStore";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/PagePagination";
import { fetchApi } from "@/helpers/fetch-api";
import { Book } from "@/interfaces/book";

const getBooks = async (page = 1, pageSize = 2) => {
  const path = "/books";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };

  const { data, pagination } = await fetchApi(path, urlParamsObject);
  return { data, pagination };
};

const Store = async ({ searchParams }: { searchParams: { p?: string } }) => {
  const { p } = searchParams;
  let pageNumber = p ? parseInt(p) : 1;
  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
    console.log(
      "Valor no válido como parámetro de página. Se establece a 1. 🐤"
    );
  }

  const { data, pagination } = await getBooks(pageNumber);

  return (
    <div className="space-y-8">
      <PageHeader text="Book Store" />
      <Pagination pagination={pagination} path="store" />
      <section className="grid grid-cols-1 gap-4">
        {data.map((book: Book) => (
          <PageCardStore key={book.id} book={book} />
        ))}
      </section>
    </div>
  );
};
export default Store;