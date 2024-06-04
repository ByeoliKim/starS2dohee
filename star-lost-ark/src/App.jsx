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
    refetchOnWindowFocus: false,
  })

  console.log(chaData);

  return (
    <Layout>
      <main className="h-[1500px] pb-40">
          <div className="main-wrap flex flex-col py-10">

            <div className="flex justify-center items-center"><img src="/i0929676129.gif" /></div>
            <div 
              className="flex justify-center items-center h-20 my-10"
            >
              <input 
                className="p-5 w-3/12 h-full bg-white text-black font-6xl"
                placeholder="모험가님의 캐릭터를 입력해 주세요!"
                onChange={(e) => {
                  setChaName(e.target.value);
                  // console.log(chaName);
                }}
                value={chaName}
                onKeyDown={(e) => {
                  if(e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              <button
                className="px-10 h-full bg-[#656565] text-white"
                onClick={handleSearch}
              >검색</button>
            </div>

            {chaData ?
              <>
              <section className="flex justify-center items-center my-20 tracking-tighter bg-[#15181d] py-20 my-0 mx-auto">
              <div className="mr-40 w-[500px] h-[578px] overflow-hidden rounded-lg"><img className="w-full h-full" src={chaData.data.CharacterImage} /></div>
              <div className="flex justify-center items-top pr-10">
                <h3 className="text-red-500 text-6xl font-bold">{chaData.data.CharacterClassName}</h3><h4 className="text-cyan-400 text-6xl font-bold">{chaData.data.CharacterName}</h4><h5 className="text-yellow-400 text-levelSize font-bold">{chaData.data.ItemAvgLevel} </h5>
              </div>
              </section>
              </>
              :
              ""
            }
          </div>
      </main>
    </Layout>
  )
}

export default App
