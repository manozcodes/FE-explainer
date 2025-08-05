import './global.css';
import Header from './Header';

const myTotalMark = 44;

const students=['John', 'Jane', 'Jack', 'Jill'];

const App = () => {

const myTotalMark1 = 44;

    return(
        <div>   
            <Header />
            <div className="text-bg">
                Hello World! {myTotalMark+myTotalMark1}
                
            </div>
            <div style={{color: 'purple', marginTop: '50px'}}>
                This is the description. {Math.random(5000)}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                    </tr>
                </thead>
                <tbody>
                    {students?.map((element, index) => {
                        return (
                            <tr>
                                <td>{element}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default App;