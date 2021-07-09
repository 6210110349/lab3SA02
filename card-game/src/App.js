import WordCard from './WordCard';
import './App.css';
const word= 'XXXXXSSSSS';
function App() {
 return (
 <div className ={'body'}>
   <div>
      <header className ={'header'} >
       <h1  >RAMDOMCARD</h1>
       <p>Caption : สุ่มการ์ดซึ่งประกอบไปด้วยการ์ด x ที่จะลด blood และ s ที่จะเพิ่ม score และเมื่อค่า blood เหลือ 0 จะถือว่าแพ้ </p>
      </header>
   </div>
   <div><WordCard value={word}/></div>
 
 </div>
 
 );
}


export default App;

