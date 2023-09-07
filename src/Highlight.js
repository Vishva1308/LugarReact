export const Highlight = ({children, color}) => ( <span style={{
  backgroundColor: color,
  borderRadius: '2px',
  color: '#fff',
  padding: '90px 0',
  display: 'block',
  height: '200px',
  margin: '16px 16px 16px 0',
}}> {children} </span> );