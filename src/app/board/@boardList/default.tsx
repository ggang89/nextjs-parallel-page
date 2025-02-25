import React from 'react'


// default page
// 1. 보여줘야할 페이지가 없을 때 보여주는 기본 페이지
//   (boardList.tsx에서 settingsPage가 없어서 대신 default page를 보여줌)

// 2. nav탭으로 이동시 default page대신 이전 페이지가 그대로 보여짐
export default function BoardListdefaultPage() {
  return <div>BoardList🍀defaultPage</div>;
}
