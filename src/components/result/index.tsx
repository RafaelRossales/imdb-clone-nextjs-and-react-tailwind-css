import Card from "../card"


interface IResultProps{
    results:Array<any>
}

export default function Result({results}:IResultProps){
    return(
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
            {results.results.map((result)=>(
                <Card key={result.id} result={result}/>
            ))}
        </div>
    )
}