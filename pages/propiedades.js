import React from 'react';
import Layout from '../components/Layout';
import Propiedad from '../components/Propiedad';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

const OBTENER_PROPIEDADES = gql`
  query properties {
	  properties {
	    id
	    broker {
	      	id
	    	name
	    }
	    address
	    latitude
	    longitude
	    price
	    currency
	  }
	}
`;

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