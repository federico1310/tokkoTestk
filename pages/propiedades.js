import React from 'react';
import Layout from '../components/Layout';
import Propiedad from '../components/Propiedad';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { OBTENER_PROPIEDADES } from '../queries/Propiedades/Propiedades.ts';


const Propiedades = () => {
	const { data, loading, error } = useQuery(OBTENER_PROPIEDADES);

	  if(loading) return 'Cargando...';

	  return (
	    <Layout>
	    	<div>
		      <h1 className="text-2xl tituloPage font-regular">Propiedades</h1>
		      <Link href="/nuevapropiedad">
		        <a className="buttonGral py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-400 mb-3 uppercase font-bold">Nueva Propiedad</a>
		      </Link>
		      
	          {data.properties.map( propiedad => (
	              <Propiedad 
	                key={propiedad.id}
	                propiedad={propiedad}
	              />
	          ))}
          </div>
	    </Layout>
	  );
}

export default Propiedades;