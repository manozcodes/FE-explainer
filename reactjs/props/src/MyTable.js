import React from 'react'

const MyTable = (allData) => {
  console.log('allData', allData?.allData)
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr style={{ backgroundColor: '#f0f0f0' }}>
          <th style={{ padding: '8px' }}>Todo</th>
          <th style={{ padding: '8px' }}>Completed</th>
        </tr>
      </thead>
      <tbody>
        {allData?.allData?.map((item, index) => {
          return (
            <tr key={index}>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.title}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{item.completed ? 'YES': 'NO'}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default MyTable