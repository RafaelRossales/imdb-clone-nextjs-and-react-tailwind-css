import Result from "@/components/result";

const API_KEY=process.env.API_KEY

interface IHomeProps{
  searchParams: URLSearchParams;
}

export default async  function Home({searchParams}:IHomeProps) {

  const genre = searchParams.genre || 'fetchTrending' 

  const res = await new Promise((resolve)=>{
    setTimeout(async ()=>{
      const response = await fetch(`https://api.themoviedb.org/3${
        genre === 'fetchTrending' ? '/movie/top_rated' : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1
      }`,{next:{revalidate:10000}})
      resolve(response)
    }, 2000)
  })



  const data = await res.json();

  // console.log(data);
  if(!data.hasOwnProperty('total_pages')){
    throw new Error('Failed to fetch data')
  }

  return (

    <div>
    <Result results={data} />
    </div>
  );
}
