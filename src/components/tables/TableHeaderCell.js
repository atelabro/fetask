import React from 'react';
import styled from 'styled-components';
import { ArrowDown, ArrowUp } from '../styled/Arrow';
import { ORDER } from './CountriesTable';

const TableHeader = styled.th`
  cursor: pointer;
  
  i {
    margin-right: 5px;
  }
`;

const resolveOrderArrow = (sortId, selectedSortBy, selectedOrder) => {
  if (sortId === selectedSortBy) {
    return ORDER.ASC === selectedOrder ? (<ArrowDown />) : (<ArrowUp />);
  }

  return null;
};

const TableHeaderCell = ({ label, sortId, selectedSortBy, selectedOrder, onClickHandler }) => (
  <TableHeader onClick={() => onClickHandler(sortId)}>
    {resolveOrderArrow(sortId, selectedSortBy, selectedOrder)}
    {label}
  </TableHeader>
);

export default TableHeaderCell;