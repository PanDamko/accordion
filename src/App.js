
import './App.css';
import Akordeon from './components/Akordeon';

function App() {
  
  const art=[
    {
      title:"Rosyjskie czołgi nowej generacji już na froncie",
      content:"Do tej pory czołgi T-14 Armata oglądaliśmy głównie na paradach wojskowych oraz w trakcie różnorodnych ćwiczeń. Jeśli jednak wierzyć doniesieniom rosyjskiej agencji informacyjnej TASS, to czołgi zaliczyły właśnie bojowy debiut podczas ataku na Ukrainę. To dobra okazja, aby lepiej poznać tę konstrukcję. "
    },
    {
      title:"PiS zmieni zdanie w sprawie referendum?",
      content:"Prawo i Sprawiedliwość poważnie zastanawia się nad zmianą koncepcji referendum, które ma odbyć się w dniu parlamentarnych wyborów. Prezes Jarosław Kaczyński ma być namawiany przez niektórych współpracowników do rezygnacji z tego pomysłu. W obozie władzy trwa spór, jak jeszcze bardziej wzmocnić przekaz i pobudzić społeczne emocje. W partii krążą już pierwsze propozycje."
    },
    {
      title:"Potężne gradobicie na południu Polski. Zrobiło się biało",
      content:"Intensywne opady gradu, jakie przechodzą w środę po południu nad południową Polską, sprawiają, że ulice wyglądają, jakby spadł tam śnieg. Potężne gradobicie zanotowano w okolicach Nowego Sącza, m.in. we wsi Tabaszowa w woj. małopolskim."
    },
    {
      title:"Import zboża z Ukrainy. Premier: nie otworzymy granicy 15 września. Jest porozumienie pięciu państw",
      content:"Nie otworzymy 15 września br. granicy dla produktów zbożowych z Ukrainy. Umożliwiamy tylko tranzyt — powiedział premier Mateusz Morawiecki. Dodał, że albo Komisja Europejska wypracuje regulacje, które przedłużą zakaz, albo Polska zrobi to sama. Rząd podpisał wspólne stanowisko w tej sprawie z czterema krajami UE.— Podpisaliśmy wspólne stanowisko, pięciu krajów — Polski, Bułgarii, Węgier, Słowacji i Rumunii — tzw. przyfrontowych ws. przedłużenia do końca roku zakazu wwozu do naszych państw czterech zbóż z Ukrainy — powiedział w środę minister rolnictwa Robert Telus."
    }
  ]
  return (
    <div className="App">
      <h1>Akordeon newsy</h1>
       
       {art.map((x)=> <Akordeon title={x.title} contents={x.content} />)}
      

      
    
    </div>
  );
}

export default App;
