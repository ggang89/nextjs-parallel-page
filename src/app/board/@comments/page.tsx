import wait from "@/lib/wait";

export default async function CommentsPage() {
  await wait(3000);
  //throw new Error("CommentsPage Error");
  return <h2>CommentsPage</h2>;
}
