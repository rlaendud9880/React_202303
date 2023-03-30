/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from 'react-minimal-side-navigation/lib';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FcTodoList } from 'react-icons/fc';
import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';
import { useState } from 'react';
import { style } from './style';

const MainAside = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside css={style(isExpanded)}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isExpanded ? (
          // isExpanded가 true일 때는 <TbLayoutSidebarLeftCollapse />를 렌더링하고, false일 때는 <TbLayoutSidebarLeftExpand />를 렌더링한다.
          <TbLayoutSidebarLeftCollapse />
        ) : (
          <TbLayoutSidebarLeftExpand />
        )}
      </div>
      <div css={{ marginTop: '32px' }}>
        <Navigation
          activeItemId="/"
          onSelect={({ itemId }) => {
            navigate(itemId);
          }}
          items={[
            {
              title: 'Home',
              itemId: '/',
              elemBefore: () => <HiHome />,
            },
            {
              title: 'T1',
              itemId: '/t1',
              elemBefore: () => <GrTest />,
            },
            {
              title: 'T2',
              itemId: '/t2',
              elemBefore: () => <GrTest />,
            },
            {
              title: 'Sample',
              itemId: '/sample/input/1',
              elemBefore: () => <BsCardChecklist />,
              subNav: [
                {
                  title: 'input1',
                  itemId: '/sample/input/1',
                  elemBefore: () => <BiListCheck />,
                },
              ],
            },
            {
              title: 'List',
              itemId: '/users',
              elemBefore: () => <BsCardChecklist />,
              subNav: [
                {
                  title: '사용자 전체 조회',
                  itemId: '/users',
                  elemBefore: () => <FaUsers />,
                },
              ],
            },
            {
              title: 'TodoList',
              itemId: '/todo',
              elemBefore: () => <FcTodoList />,
            },
            {
              title: 'NumberCounter',
              itemId: '/number/counter',
              elemBefore: () => <BsCardChecklist />,
            },
            {
              title: 'TestTodoList',
              itemId: '/test/todo',
              elemBefore: () => <FcTodoList />,
            },
          ].filter((item) => !item.hide)}
          overrideItemChildren={({ depth, item }) => (
            <span css={{ display: 'flex', alignItems: 'center' }}>
              {item.elemBefore && (
                <div css={{ marginRight: '8px' }}>{item.elemBefore()}</div>
              )}
              {isExpanded && depth === 0 && <span >{item.title}</span>}  
            </span>
          )}
        />
      </div>
    </aside>
  );
};




export default MainAside;
