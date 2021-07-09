import WordCard from './WordCard';

import './App.css';
const word= 'XXXXXXSSSS';
function App() {
 return (
 <div >
   <div>
      เกมนี้เป็นเกมสุ่มการ์ดโดยหากสุ่มได้การ์ด X แต้มจะถูกลบ และหากสุ่มได้ S หาก score = 100 ก็จะชนะ
   </div>
   <div><WordCard value={word}/></div>
 
 </div>
 );
}


export default App;

