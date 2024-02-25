import RecentUploads from "~/components/RecentUploads";
export default async function Home() {

  return (
    <div className="h-full w-screen">
      <div className="flex h-3/4 w-screen items-center justify-center">
        One stop shop of HSC questions!
      </div>
      <RecentUploads />
    </div>
  );
}
