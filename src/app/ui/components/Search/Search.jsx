"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handleSubmit(event) {
    // Prevenimos que la página se refresque al enviar el formulario
    event.preventDefault();

    // Obtenemos el valor del input
    const query = event.currentTarget.query.value;

    // Redireccionamos al index con una query
    router.push(`/search?q=${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        name="query"
        // onChange={(e) => {
        //   handleSearch(e.target.value);
        // }}
        defaultValue={searchParams.get("q") || ""}
      />
      <button type="submit"></button>
    </form>
  );
};

export default Search;
