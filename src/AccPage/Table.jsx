import React from "react";
import { useState } from "react";
import { useTable,useSortBy } from 'react-table';
import '../style/Table.scss'
// React.useMemo(() => [{user}], [])

function Table (props) {
     const {user} = props;
    const setUsers = {user};
     const data = React.useMemo(
      () => [
        {
          first_name: 'Максим',
          last_name: 'Бочилов', 
        },
        {
          first_name: 'Иван',
          last_name: 'Иванов',
        },
        {
          first_name: 'Андрей',
          last_name: 'Казаков',
        },
        {
          first_name: 'Владимир',
          last_name: 'Кушаков',
        },
        {
          first_name: 'Артур',
          last_name: 'Криков',
        }
      ],
      []
    ) /// ???
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'Имя',
            accessor: 'first_name', 
          },
          {
            Header: 'Фамилия',
            accessor: 'last_name',
          },
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data }, useSortBy)
      
      
      return (
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span 
                  >
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>

      )

}

export default Table