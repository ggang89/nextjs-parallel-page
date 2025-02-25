import wait from "@/lib/wait";
import { ReactNode, Suspense } from "react";

export default function BoardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Suspense fallback={<h2>Loading board list...</h2>}>
        <BoardList />
      </Suspense>

      <Suspense fallback={<h2>Loading comments...</h2>}>
        <Comments />
      </Suspense>
    </div>
  );
}
async function BoardList() {
  await wait(2000);
  return <h2>BoardList</h2>;
}

async function Comments() {
  await wait(3000);
  return <h2>Comments</h2>;
}
