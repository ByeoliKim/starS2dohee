import { getChaData } from "./services"
import { useQuery } from "react-query"

function App() {
  const { data: chaData } = useQuery({
    queryKey: 'chaData',
    queryFn: () => getChaData('김별이'),
  });

  console.log(chaData);
  return (
    <main>
        <div className="main-wrap">
          {chaData ? <h2 className="underline">{chaData.data.CharacterName} 님은 로악귀세요.</h2> : ""}
          {chaData ? <img src={chaData.data.CharacterImage} /> : <div>없어용 ㅠㅠ</div>}
          <h1 className="text-2xl font-bold underline">
            Hello world!
          </h1>
        </div>
    </main>
  )
}

export default App
