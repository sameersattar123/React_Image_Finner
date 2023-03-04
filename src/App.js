import { useEffect, useState } from 'react';
import './App.css';
import BreadCrumbs from './Componenets/BreadCrumbs';
import Images from './Componenets/Images';
import Navbar from './Componenets/Navbar';
import SnakeBar from './Componenets/SnakeBar';
import getImages from './Sevices/Api';

function App() {
  const [data , setData] = useState([])
  const [text , setText] = useState("")
  const [count , setCount] = useState(5)
  const [open , setOpen] = useState(false)

  useEffect(() => {
    if(count < 3 || count > 200){
      setOpen(true)
      return;
    }
    setOpen(false)

    const getData = async() => {
      const res = await getImages(text , count);
      setData(res.data.hits)
    }
    getData()
  }, [text , count])
  return (
    <div className="App">
    <Navbar/>
    <BreadCrumbs setCount={setCount} setText={setText} />
    <Images data={data} />
    <SnakeBar open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
