import { useEffect, useState } from 'react';
import './ShoppingHistory.css';
import Header from './Header';
import Modal from './Modal';
import Shoppingitems from './ShoppingItems';
import './Modal.css'
const ShoppingHistory = () => {
    const [ counter, setCounter ] = useState(0)
    let historial = [
        {
            user: "dnc",
            products: [
                {
                    image: "./espaguetisGallo.png",
                    productName: "Espaguetis Gallo 900g",
                    productDescription: `Espaguetis Gallo 900g</div>
                    <div> Ingredientes: <br/> Sémola de trigo duro. Puede contener trazas de huevo. Alérgenos Contiene: Cereales que contienen gluten`,
                    productPrice: "2,15 €",
                    productEndDate: "14-12-2022"
                },
                {
                    image: "./tomateFritoCarrefour.png",
                    productName: "Tomate frito Carrefour pack de 3 briks de 390 g.",
                    productDescription: `Tomate (157 g para elaborar 100 g de producto), aceite de girasol, azúcar, almidón modificado de maíz, hortalizas (cebolla y ajo), sal y acidulante: ácido cítrico.`,
                    productPrice: "1,45 €",
                    productEndDate: "17-12-2022"
                }

            ]
        },
        {
            user: "dani",
            products: [
                {
                    image: "./espaguetisGallo.png",
                    productName: "Espaguetsssssis Gallo 900g",
                    productDescription: `Espaguetis Gallo 900g</div>
                    <div> Ingredientes: <br/> Sémola de trigo duro. Puede contener trazas de huevo. Alérgenos Contiene: Cereales que contienen gluten`,
                    productPrice: "2,15 €",
                    productEndDate: "14-12-2022"
                }
            ]
        }
    ]
    function userHistory(userData) {
        return userData.user === window.history.state;
    }

    return (
        <div id='ShoppingHistory'>
            <Header />
            <div className='shoppinghistory-content'>
                <div className='shoppingTable'>
                    <div className='shoppingTable-title'>
                        <div>Imatge del article</div>
                        <div>Nom del producte</div>
                        <div>Descripció del producte</div>
                        <div>Preu del producte</div>
                        <div>Data de caducitat</div>
                    </div>
                    <Shoppingitems history={historial.find(userHistory)}/>
                </div>
            </div>
        </div>

    );
    function renderModal() {
        console.log('r');
        document.getElementById('ShoppingHistory').innerHTML += <Modal imgLink='./espaguetisGallo.png' />;
    }

}
export default ShoppingHistory;