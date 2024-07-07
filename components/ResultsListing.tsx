"use client";

import { Result } from "@/lib/fetchResults";
import Link from "next/link";

type Props = {
  res: Result;
};

function ResultsListing({ res: results }: Props) {
  if (!results) return <div>No results...</div>;
  return (
    <>
      <h1>hello</h1>
      <h3 className="font-semibold text-xl">{results.total_listings}</h3>
      <div>
        {results.listings.map((item, i) => (
          <div
            key={i}
            className="flex space-y-2 justify-between space-x-4 p-5 border rounded-lg"
          >
            <img
              src={item.url}
              alt="image of property"
              className="h-44 w-44 rounded-lg"
            />

            <div className="flex flex-1 space-x-5 justify-between">
              <div>
                <Link
                  href={item.link}
                  className="font-bold text-blue-500 hover:text-blue-600 hover:underline"
                >
                  {item.title}
                </Link>
                <p className="text-xs">{item.description}</p>
              </div>

              <div className="flex flex-col justify-between">
                <div className="flex items-start justify-end space-x-2 text-right">
                  <div>
                    <p className="font-bold">{item.rating_word}</p>
                    <p className="text-xs">{item.rating_count}</p>
                  </div>

                  <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-blue-900 rounded-lg flex-shrink-0">
                    {item.rating || "N/A"}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs ">{item.booking_metadata}</p>
                  <p className="text-2xl font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ResultsListing;
