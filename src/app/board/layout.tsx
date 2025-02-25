
import { ReactNode } from "react";

export default function BoardLayout({
  children,
  boardList,
  comments,
}: {
  children: ReactNode;
  boardList: ReactNode;
  comments: ReactNode;
}) {
  return (
    <div >
      {children}
      {boardList}
      {comments}
    </div>);
}



