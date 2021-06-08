import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { productsPerPage } from "../config";
import PaginationStyles from "./styles/PaginationStyles";

function Pagination({ base, total }: { base: string; total: number }) {
  const router = useRouter();
  const tipo = router.query.tipo;
  const page = router.query?.page || 1;
  const pageCount = Math.ceil(total / productsPerPage);

  return (
    <PaginationStyles>
      <Link href={`/${base}/${+page - 1}`}>
        <a aria-disabled={page <= 1}>← Anteriores</a>
      </Link>
      <p>
        Pagina {page} de {pageCount}
      </p>
      <p>{total} Productos</p>
      <Link href={`/${base}/${+page + 1}`}>
        <a aria-disabled={page >= pageCount}>Siguientes →</a>
      </Link>
    </PaginationStyles>
  );
}

export default Pagination;
