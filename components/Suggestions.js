import { Profiler, useEffect, useState } from "react"
import { faker, FakerError } from '@faker-js/faker';
function Suggestions() {
    const [suggestion, setSuggestions] = useState([]);
    useEffect(()=> {
        const suggestions = [...Array(5)].map((_,i) => (
            {
                id: i,
            }
        ));
        setSuggestions(suggestions);
    },[]);
        return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold"> See All</button>
            </div>

            {
                suggestion.map(profile => (
                    <div className="flex items-center justify-between mt-3" key={faker.datatype.uuid()}>
                        <img className="w-10 h-10 rounded-full p-[2px]" src={faker.image.avatar()} alt=""/>
                        <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm">{faker.internet.userName()}</h2>
                            <h3 className="text-xs text-gray-400"> Works at {faker.company.companySuffix()}</h3>
                        </div>
                        <button className="text-blue-400" >Follow</button>
                    </div>
                ))
            }
        </div>
        )
}
export default Suggestions