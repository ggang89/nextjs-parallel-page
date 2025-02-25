
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
    <div >
      {/* 조건처리=> isAdmin이 true일 때만 admin 보여줌 */}
      {isAdmin && admin} 

      {children}
      {boardList}
      {comments}
    </div>
  );
}



