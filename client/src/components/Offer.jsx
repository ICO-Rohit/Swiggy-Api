import { useState } from "react";

const Offer = () => {
    const [offer1, setOffer1] = useState(false);
    const [offer2, setOffer2] = useState(false);
    const [offer3, setOffer3] = useState(false);
    return (
        <>
            <div className="flex items-center">
                {(offer1 === false) ? <div className="p-4 w-full"><div className="border-solid border-gray-700 border-2 p-2">Offer1</div></div> : <div className="p-4">
                    <div className="border-solid border-gray-700 border-2 p-2 w-full">
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum illo est autem vel porro laborum nobis nemo ab quis quae maiores voluptatum cum, praesentium modi ducimus repellat id ad nulla sunt vitae, debitis amet aspernatur consequatur. Laudantium culpa et cupiditate, numquam accusamus iste consequatur minus amet corporis atque aut eaque, fuga eveniet maxime, suscipit quidem? Eaque aut facilis eos sint numquam dolores excepturi ex obcaecati totam earum asperiores magnam, fuga blanditiis consequatur tempore exercitationem reiciendis? Hic aspernatur itaque corrupti! Exercitationem magnam nisi veritatis aperiam doloremque cumque, eius earum officiis molestiae totam eaque, ullam consectetur illo. Neque unde alias amet in!</span>
                    </div>
                </div>}
                <button className="bg-gray-400 rounded-md p-2 h-10" onClick={() => setOffer1(!offer1)}>Buton</button>
            </div>
            <div className="flex items-center">
                {(offer2 === false) ? <div className="p-4 w-full"><div className="border-solid border-gray-700 border-2 p-2">Offer2</div></div> : <div className="p-4">
                    <div className="border-solid border-gray-700 border-2 p-2 w-full">
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum illo est autem vel porro laborum nobis nemo ab quis quae maiores voluptatum cum, praesentium modi ducimus repellat id ad nulla sunt vitae, debitis amet aspernatur consequatur. Laudantium culpa et cupiditate, numquam accusamus iste consequatur minus amet corporis atque aut eaque, fuga eveniet maxime, suscipit quidem? Eaque aut facilis eos sint numquam dolores excepturi ex obcaecati totam earum asperiores magnam, fuga blanditiis consequatur tempore exercitationem reiciendis? Hic aspernatur itaque corrupti! Exercitationem magnam nisi veritatis aperiam doloremque cumque, eius earum officiis molestiae totam eaque, ullam consectetur illo. Neque unde alias amet in!</span>
                    </div>
                </div>}
                <button className="bg-gray-400 rounded-md p-2 h-10" onClick={() => setOffer2(!offer2)}>Buton</button>
            </div>
            <div className="flex items-center">
                {(offer3 === false) ? <div className="p-4 w-full"><div className="border-solid border-gray-700 border-2 p-2">Offer3</div></div> : <div className="p-4">
                    <div className="border-solid border-gray-700 border-2 p-2 w-full">
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum illo est autem vel porro laborum nobis nemo ab quis quae maiores voluptatum cum, praesentium modi ducimus repellat id ad nulla sunt vitae, debitis amet aspernatur consequatur. Laudantium culpa et cupiditate, numquam accusamus iste consequatur minus amet corporis atque aut eaque, fuga eveniet maxime, suscipit quidem? Eaque aut facilis eos sint numquam dolores excepturi ex obcaecati totam earum asperiores magnam, fuga blanditiis consequatur tempore exercitationem reiciendis? Hic aspernatur itaque corrupti! Exercitationem magnam nisi veritatis aperiam doloremque cumque, eius earum officiis molestiae totam eaque, ullam consectetur illo. Neque unde alias amet in!</span>
                    </div>
                </div>}
                <button className="bg-gray-400 rounded-md p-2 h-10" onClick={() => setOffer3(!offer3)}>Buton</button>
            </div>
        </>
    )
}

export default Offer;