import MainList from './Proj_1/MainList';
import Imgtoggle from './Proj_2/Imgtoggle';
import RouteApp from './Proj_4/RouteApp';
import Dropdown from './Proj_5/Dropdown';

export default function App() {
  return (
    <div className="App">
      <h1>Project-1  - List Props</h1><MainList/><hr style={{border:'2px solid black'}}></hr>
      <h1>Project-2  - Image Toggle</h1><Imgtoggle/><hr style={{border:'2px solid black'}}></hr>
      <h1>Project-4  - Routing</h1><RouteApp/><hr style={{border:'2px solid black'}}></hr>
      <h1>Project-5  - Dropdown Form</h1><Dropdown/><hr style={{border:'2px solid black'}}></hr>
    </div>
  );
}