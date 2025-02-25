
import Link from "next/link";
import { ReactNode } from "react";

export default function BoardLayout({
  children,
  boardList,
  comments,
  admin
}: {
  children: ReactNode;
  boardList: ReactNode;
  comments: ReactNode;
  admin:ReactNode;
  }) {
  const isAdmin = false;
  return (
    <div>
      <nav>
        <Link href={"/board"}>✔Board</Link>
        {"  "}
        <Link href={"/board/settings"}>✔Board안의 settings</Link>
      </nav>
      {/* 조건처리=> isAdmin이 true일 때만 admin 보여줌 */}
      {isAdmin && admin}

      {children}
      {boardList}
      {comments}
    </div>
  );
}



