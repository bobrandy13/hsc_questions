import React from "react";
import getRecentUploads from "~/server/getRecentUploads";
import Recent_upload_card from "./Recent_upload_card";

export default async function RecentUploads() {
  const recentUploads = await getRecentUploads();
  console.log(recentUploads);
  return (
    <div>
      <h5 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-white">
        Recent uploads
      </h5>
      <div className="flex h-96 w-full flex-grow flex-row justify-center gap-4 rounded-lg border border-gray-200 bg-white p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        {recentUploads.map((upload, key: number) => {
          return <Recent_upload_card key={key} upload={upload} />;
        })}
      </div>
    </div>
  );
}
