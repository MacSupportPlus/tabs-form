import {useState} from 'react';
import './App.css';
import Tab from './components/Tab';
import TabCard from './components/TabCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [tabs, setTabs]=useState([
    {
      name: "tab 1",
    },
    {
      name: "tab 2",
    },
    {
      name: "tab 3",
    },
  ])
  const[cards, setCards]=useState([
    {
      name: "tab 1",
    },
    {
      mame: "tab 2",
    },
    {
      name: "tab 3",
    },

  ])
  const showTab = (idx) => {
    setCards([...cards.slice(0,idx),...cards.splice(idx)])
  }
  
    return (
    <>
    <div className="d-flex justify-content-around border p-5">
      {
        tabs.map((tab,i) => {
          return <Tab 
          key={i}
          idx={i}
          name= {tab.name} 
          showTab={showTab}
          />  
        })
      }
  
    </div>
    <div className="d-flex justify-content-around border p-5">
      {
        cards.map((card,i) => {
          return <TabCard 
          key={i}
          idx={i} 
          name= {card.name}
         />
      })
      }



    </div>

    </>
  );
    }

export default App;
