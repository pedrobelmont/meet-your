import './styles/main.css';
import {MagnifyingGlassPlus} from 'phosphor-react'
import logoImg from './assets/Logo.svg';

function App() {
  return (<div className=" max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""></img>
      
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image1.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 vagas</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image2.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 vagas</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image3.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 vagas</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image5.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 vagas</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image6.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 vagas</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image7.png"/>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 vagas</span>
          </div>
        </a>

      </div>
      <div className="pt-1 mt-8  bg-nlw-gradient self-stretch rounded-lg overflow-hidden"> 
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black">não encontrou seu duo</strong>
            <span className="text-zinc-400 block"> Publique um anúcio para encotrar novos players </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            publicar anacion  
          </button>
        </div>
      </div>
    </div>)
}

export default App
