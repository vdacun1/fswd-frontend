
import RankingItems from "@/components/server/UserToy/RankingItems";
import ListItems from "@/components/server/UserToy/ListItems";

export default async function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <ListItems/>
      <RankingItems/>
    </main>
  );
}
