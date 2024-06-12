import { useState } from "react";
import Layout from "./Components/Layout";
import { getChaData, getEquData } from "./services"
import { useQuery } from "react-query"

function App() {
  // const { data: chaData } = useQuery({
  //   queryKey: 'chaData',
  //   queryFn: () => getChaData('김별이'),
  // });

  // console.log(chaData);

  const [chaName, setChaName] = useState('');
  const [searchName, setSearchName] = useState('');

  const { data: chaData } = useQuery({
    queryKey : ['chaData', searchName],
    queryFn: () => getChaData(searchName),
    refetchOnWindowFocus: false,
  })

  const { data: eqData } = useQuery({
    queryKey: ['eqData', searchName],
    queryFn: () => getEquData(searchName),
    refetchOnWindowFocus: false,
  })

  const handleSearch = () => {
    setSearchName(chaName);
  }

  console.log(eqData);

  return (
    <Layout>
      <main className="pb-40">
          <div className="main-wrap flex flex-col py-10">

            <div className="flex justify-center items-center">
              {/* <img src="/i0929676129.gif" /> */}
            </div>
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
              <p className="text-center text-levelSize">
              {chaData.data.ServerName}에서 {chaData.data.CharacterClassName} 키우는 {chaData.data.CharacterName} 님은 로악귀세요 🥵💧💧💧</p>
              <section className="flex justify-center items-center my-20 tracking-tighter bg-[#15181d] py-20 my-0 mx-auto">
              <div className="mr-40 w-[500px] h-[578px] overflow-hidden rounded-lg"><img className="w-full h-full" src={chaData.data.CharacterImage} /></div>
              <div className="flex justify-center items-top pr-10">
                <h3 className="text-white text-2xl font-bold">{chaData.data.CharacterClassName}</h3><h4 className="text-white text-2xl font-bold">{chaData.data.CharacterName}</h4><h5 className="text-white text-2xl font-bold">{chaData.data.ItemAvgLevel} </h5>
              </div>
              </section>
              </>
              :
              ""
            }
            <div className="flex flex-col">
            {
              eqData ?
              (
                eqData.data.map((i, idx) => {
                    return <div className="flex" key={idx}><pre>{i.Tooltip}</pre></div>
                })
              ) : ""
            }
            </div>
          </div>
      </main>
    </Layout>
  )
}

export default App
