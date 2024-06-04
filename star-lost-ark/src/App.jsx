import { useState } from "react";
import Layout from "./Components/Layout";
import { getChaData } from "./services"
import { useQuery } from "react-query"

function App() {
  // const { data: chaData } = useQuery({
  //   queryKey: 'chaData',
  //   queryFn: () => getChaData('김별이'),
  // });

  // console.log(chaData);

  const [chaName, setChaName] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleSearch = () => {
    setSearchName(chaName);
  }

  const { data: chaData } = useQuery({
    queryKey : ['chaData', searchName],
    queryFn: () => getChaData(searchName),
  })

  return (
    <Layout>
      <main>
          <div className="main-wrap">

            <input 
              placeholder="모험가님의 캐릭터를 입력해 주세요!"
              onChange={(e) => {
                setChaName(e.target.value);
                console.log(chaName);
              }}
              value={chaName}
              onKeyDown={(e) => {
                if(e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button 
              onClick={handleSearch}
            >검색</button>

            {chaData ? <h2 className="underline">{chaData.data.CharacterName} 님은 십로악귀세요.</h2> : ""}
            {chaData ? <img src={chaData.data.CharacterImage} /> : <div>없어용 ㅠㅠ</div>}
            <h1 className="text-2xl font-bold underline">
              Hello world!
            </h1>
          </div>
      </main>
    </Layout>
  )
}

export default App
