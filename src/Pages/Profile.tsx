import React from "react";
import { useAuth } from "../Helpers/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100 w-full">
      {/* Barra lateral */}
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center text-xl font-semibold text-gray-600">
            D
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Olá, {user?.name}</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-lg hover:text-gray-400">
                Início
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-lg hover:text-gray-400">
                Desafios
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-lg hover:text-gray-400">
                Configurações
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-gray-400">
                Sair
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Conteúdo principal */}
      <div className="w-3/4 p-8">
        {/* Cabeçalho do Perfil */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Perfil</h1>
            <p className="text-gray-600">
              Aqui estão as suas estatísticas e histórico de jogo.
            </p>
          </div>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Editar Perfil
          </button>
        </div>

        {/* Informações do Jogador */}
        <div className="bg-white p-6 shadow-lg rounded-xl mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Informações do Jogador
          </h2>
          <div className="flex items-center space-x-6">
            <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center text-4xl font-semibold text-gray-600">
              D
            </div>
            <div>
              <p className="text-lg text-gray-800 font-semibold">
                {user?.name}
              </p>
              <p className="text-gray-600">Ranking: 1200</p>
              <p className="text-gray-600">Partidas Jogadas: 50</p>
            </div>
          </div>
        </div>

        {/* Estatísticas de Jogo */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <p className="text-2xl font-bold text-gray-800">30</p>
            <p className="text-gray-600">Vitórias</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <p className="text-2xl font-bold text-gray-800">20</p>
            <p className="text-gray-600">Derrotas</p>
          </div>
        </div>

        {/* Histórico de Partidas */}
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Histórico de Partidas
          </h2>
          <ul>
            <li className="flex justify-between mb-4">
              <span className="text-gray-600">Vitória contra Maria (2-1)</span>
              <span className="text-gray-400 text-sm">1 dia atrás</span>
            </li>
            <li className="flex justify-between mb-4">
              <span className="text-gray-600">Derrota para Carlos (1-2)</span>
              <span className="text-gray-400 text-sm">3 dias atrás</span>
            </li>
            <li className="flex justify-between mb-4">
              <span className="text-gray-600">Vitória contra José (3-0)</span>
              <span className="text-gray-400 text-sm">5 dias atrás</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
