import { css } from '@emotion/react';

export const sidebar = (isExpanded) => css`
  width: ${isExpanded ? '250px' : '50px'}; 
  height: 100%; 
  background-color: #ccc;
  transition: all 1s ease;

  .nav-item-title {
    display: ${isExpanded ? 'inline-block' : 'none'};
    margin-left: ${isExpanded ? '5px' : '0'};
  }
`;

export const style = (isExpanded) => css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: ${isExpanded ? "0px" : "12px"};
  background-color: #ccc;
  transition: all 1s ease;
  z-index: 100;

  .toggle-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
  }

  .sidebar {
    ${sidebar(isExpanded)}
  }

  .side-navigation-panel {
    display: ${isExpanded ? 'block' : 'none'};
  }

  .nav-item-title,
  .todo-header { /* todo-header에도 isExpanded 클래스 추가 */
    display: ${isExpanded ? 'inline-block' : 'none'};
    margin-left: ${isExpanded ? '5px' : '0'};
  }
`;

export const toggleButtonText = (isExpanded) => css`
  display: ${isExpanded ? 'inline-block' : 'none'};
  margin-left: ${isExpanded ? '5px' : '0'};
  font-size: 12px;
  color: white;
  &:empty {
    margin-left: 0;
  }
`;