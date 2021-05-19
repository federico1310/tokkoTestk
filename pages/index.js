import React from 'react';
import Layout from '../components/Layout';
import Broker from '../components/Broker';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { OBTENER_BROKERS } from '../queries/Brokers/Brokers.ts';

const Brokers = () => {

  const { data, loading, error } = useQuery(OBTENER_BROKERS);

  if(loading) return 'Cargando...';

  return (
    <Layout>
      <h1 className="text-2xl tituloPage font-regular">Brokers</h1>
      <Link href="/nuevobroker">
        <a className="buttonGral py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-400 mb-3 uppercase font-bold">Nuevo Cliente</a>
      </Link>
      <table className="table-auto shadow-md mt-10 w-full w-lg">
        <thead className="bg-gray-500">
          <tr className="text-white">
            <th className="w-2/4 py-2">Nombre</th>
            <th className="w-2/4 py-2">Dirección</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {data.brokers.map( broker => (
              <Broker 
                key={broker.id}
                broker={broker}
              />
          ))}
        </tbody>
      </table>

    </Layout>
  );
}

export default Brokers;