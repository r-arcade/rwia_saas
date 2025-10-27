"use client";

import { useState } from 'react';
import AddAgentModal from '@/components/dashboard/AddAgentModal';

const agents = [
  { name: 'Ana Silva', email: 'ana.silva@empresa.com', status: 'Online' },
  { name: 'Bruno Costa', email: 'bruno.costa@empresa.com', status: 'Offline' },
  { name: 'Carla Dias', email: 'carla.dias@empresa.com', status: 'Online' },
];

const EquipePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-fluid-8 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-fluid-6">
          <h1 className="text-fluid-h2 font-bold text-light-foreground dark:text-dark-foreground">Gestão de Equipe</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Adicionar Novo Agente
          </button>
        </div>

        <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg">
          <table className="w-full text-left">
            <thead className="border-b border-light-border dark:border-dark-border">
              <tr>
                <th className="p-fluid-3 text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">Nome</th>
                <th className="p-fluid-3 text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">Email</th>
                <th className="p-fluid-3 text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">Status</th>
                <th className="p-fluid-3 text-fluid-sm text-light-foreground/70 dark:text-dark-foreground/70">Ações</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr key={agent.email} className="border-b border-light-border dark:border-dark-border last:border-b-0">
                  <td className="p-fluid-3 text-fluid-sm text-light-foreground dark:text-dark-foreground">{agent.name}</td>
                  <td className="p-fluid-3 text-fluid-sm text-light-foreground dark:text-dark-foreground">{agent.email}</td>
                  <td className="p-fluid-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${agent.status === 'Online' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                      {agent.status}
                    </span>
                  </td>
                  <td className="p-fluid-3 text-fluid-sm text-primary hover:underline cursor-pointer">Editar</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddAgentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default EquipePage;
