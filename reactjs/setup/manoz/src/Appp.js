import './global.css'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


// function myName() {
//   return 'Manoz'
// }

// function giveMeDays(index) {
//   return <div key={index}>{days[index]}</div>
// }


const App = () => {
  const value = 44;
  return(
   <div>
      <div className="text-bg">
        heyy ({value})
      </div>
      <div style={{
          color: 'black',
          fontSize: '14px', 
          textDecoration: 'underline', 
          fontWeight: 'normal', 
          marginTop: '5px'
      }}>
        This is the mini description.
      </div> 
      <div style={{
        marginTop: '5px'
      }}>
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
    </div>
  )
}



export default App;


// RULES:
// 1. Component name should be starting with Capital letter
// 2. Each component should have export
// 3. Each component should have function defined
// 4. Each component should have return
// 5. Each component should return JSX

// class="" -> className=""
// style="" -> style={{}}

// inline css example:
// font-size -> fontSize
// margin-top -> marginTop
// margin-bottom -> marginBottom
// margin-left -> marginLeft
// margin-right -> marginRight
// padding-top -> paddingTop
// padding-bottom -> paddingBottom
// padding-left -> paddingLeft
// padding-right -> paddingRight

// key={uniqueValue} is mandatory inside the map function (loop)






