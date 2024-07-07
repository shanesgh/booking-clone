import ResultsListing from "@/components/ResultsListing";
import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

async function SearchPage({ searchParams }: Props) {
  if (!searchParams.url) return notFound();
  const results = await fetchResults(searchParams);
  if (!results) return <div>No results...</div>;
  const url: String = searchParams.url.toString();
  const [_, checkin, checkout] = url.match(
    /checkin=(\d{4}-\d{1,2}-\d{1,2})&checkout=(\d{4}-\d{1,2}-\d{1,2})/
  )!;

  return (
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <h1 className="text-4xl font-bold py-3">Trip Results</h1>
        <h2 className="pb-3">
          Dates of trip:
          <span className="italic ml-2">
            {checkin} to {checkout}
          </span>
        </h2>
        <hr className="mb-5" />
        <ResultsListing res={results} />
      </div>
    </section>
  );
}

export default SearchPage;
