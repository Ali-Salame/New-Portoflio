import Mobile from './Views/Mobile';
import Desktop from './Views/Desktop';

import Loading from './Sections/loading';
import './Scss/index.css';
import 'animate.css';
import { useEffect,useState } from 'react';


function App() {
  const [Start, setStart] = useState(true)
  const [Mobile, setMobile] = useState(false)

  
  useEffect(() => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const onPageLoad = () => {
    setStart(false);
    };
    const yourFunction = async () => {
    await delay(3000);
    onPageLoad()

    };
    yourFunction()
  }, []);


  return (
    <div className='body_2'>
      {Start && <Loading />}
      <Desktop />
    </div>
  );
}

export default App;





// function App() {
//   const [Start, setStart] = useState(true)
//   const [NextPage, setNextPage] = useState(1)
//   const [ProjNum, setProjNum] = useState(1)
//   useEffect(() => {
//     const delay = ms => new Promise(res => setTimeout(res, ms));
//     const onPageLoad = () => {
//       setStart(false);
//     };
//     const yourFunction = async () => {
//       await delay(3000);
//       onPageLoad()
  
//     };
//     yourFunction()
//   }, []);
//   const home = () => {
//     setNextPage(1);
//   }


//   const handleScroll = event => {
//     if (NextPage === 4){
//       if (ProjNum <= 3){
//         setProjNum(prevnum => prevnum + 1)
//       }
//       else {
//         setProjNum(1)
//         setNextPage(prevState => prevState + 1)
//       }
//     }
//     else if (NextPage <= 4){
//       setNextPage(prevState => prevState + 1)
//     }
//     else if (NextPage > 4){
//       setNextPage(1)
//     }
//   };
//   return (
//     <div onWheel={handleScroll}>
//       {Start && <Loading />}
//       {!Start && <Navbar setNextPage={setNextPage} setProjNum={setProjNum} CurrentPage={NextPage}/>}
//       {NextPage === 1 && <Home  CurrentPage={NextPage}/>}
//       {NextPage === 2 && <About  func={() => home()}/>}
//       {NextPage === 3 && <Skills  func={() => home()}/>}
//       {NextPage === 4 && <Projects ProjNum={ProjNum} setProjNum={setProjNum} func={() => home()}/>}
//       {NextPage === 5 && <Contact  func={() => home()}/>}

//     </div>
//   );
// }
