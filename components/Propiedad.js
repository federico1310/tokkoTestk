import React, { useState } from 'react';
import Router from 'next/router';
import Modal from '../components/Modal';
import Map from '../components/Map';

const Propiedad = ({propiedad}) => {

	const [show, setShow] = useState(false);

    const { address, price, currency, id, latitude, longitude, broker} = propiedad;
    const containerStyles = {
    	width: '100%', 
    	height: '400px'
    } 

    return (         
        <div className="mt-4 bg-white rounded p-6 md:grid md:grid-cols-2 md:gap-4 shadow-lg">
        	<div className="">
        		<p className="font-bold text-gray-800">Broker: {broker.name}</p>
        	</div>
        	<div>
        		<h2 className="text-gray-800 font-bold mt-2">Datos de la Propiedad</h2>
        		<p>Dirección: {address}</p>
        		<p>{ price ? 'Precio: $'+price : "No se ingreso información acerca del precio"} {currency}</p>
        		{latitude && longitude ? (
        			<div>
	        			<button type="button" className="flex justify-left items-center buttonGral hover:bg-gray-400 py-2 px-4 text-white rounded text-xs uppercase font-bold" onClick={() => setShow(true)}>
	        				Ver Mapa
	        				<svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"></path></svg>
	        			</button>
	        			<Modal onClose={() => setShow(false)} show={show} title="Ubicación">
	        				<Map latitude={latitude} longitude={longitude} containerStyles={containerStyles} />
	        			</Modal>
        			</div>
        		) : (
        			<div>No hay información ingresada sobre la ubicación del inmueble</div>
        		)}
        	</div>
        </div>
     );
}
 
export default Propiedad;