import React from 'react'
import Navbar from '../Components/Navbar';
import Home from '../Sections/Home';
import About from '../Sections/About';
import Skills from '../Sections/Skills';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';
import Loading from '../Sections/loading';
import { useEffect,useState } from 'react';



const Desktop = () => {
    const [NextPage, setNextPage] = useState(1)
    const [ProjNum, setProjNum] = useState(1)
    const [Change, setChange] = useState(true)

    const home = () => {
        setNextPage(1);
    }


    const handleScroll = event => {
        
        if (NextPage === 1){setNextPage(prevState => event.deltaY < 0 ? 5 :  prevState + 1); setProjNum(1)}
        else if (NextPage === 4){
            if (ProjNum === 1){event.deltaY < 0 ? setNextPage(prevState => prevState - 1) : setProjNum(prevnum => prevnum + 1);}
            else if (ProjNum <= 3){setProjNum(prevnum => event.deltaY < 0 ? prevnum - 1 :  prevnum + 1)}
            else if (ProjNum === 4){event.deltaY < 0 ? setProjNum(prevnum => prevnum - 1) : setNextPage(prevState => prevState + 1)}
            else {setProjNum(1);setNextPage(prevState => event.deltaY < 0 ? prevState - 1 :  prevState + 1)}
        }
        else if (NextPage <= 4){setNextPage(prevState => event.deltaY < 0 ? prevState - 1 :  prevState + 1)}
        else if (NextPage > 4){setNextPage(prevState => event.deltaY < 0 ? prevState - 1 : 1)}
    };
  return (
    <div onWheel={handleScroll}>
        <Navbar setNextPage={setNextPage} setProjNum={setProjNum} CurrentPage={NextPage}/>
        <Home  CurrentPage={NextPage} Change={Change} setChange={setChange}/>
        {NextPage === 2 && <About  func={() => home()}/>}
        {NextPage === 3 && <Skills  func={() => home()}/>}
        {NextPage === 4 && <Projects ProjNum={ProjNum} setProjNum={setProjNum} func={() => home()}/>}
        {NextPage === 5 && <Contact  func={() => home()}/>}
    </div>
  )
}

export default Desktop