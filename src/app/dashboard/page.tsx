import Link from 'next/link';
import StatCard from '@/components/dashboard/StatCard';

const ChatIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z"></path></svg>;
const UserGroupIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;

const DashboardPage = () => {
  return (
    <div className="py-fluid-8 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-fluid-6">
          <div>
            <h1 className="text-fluid-h2 font-bold text-light-foreground dark:text-dark-foreground">Dashboard</h1>
            <p className="mt-1 text-fluid-body text-light-foreground/70 dark:text-dark-foreground/70">Visão geral das suas métricas.</p>
          </div>
          <Link href="/dashboard/simulacao">
            <button className="mt-4 md:mt-0 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-md hover:opacity-90 transition-opacity">
              Inicie sua Simulação
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fluid-4">
          <StatCard title="Total de Conversas" value="1,482" icon={<ChatIcon />} />
          <StatCard title="Novas Conversas (Hoje)" value="73" icon={<ChatIcon />} />
          <StatCard title="Agentes Ativos" value="3" icon={<UserGroupIcon />} />
          
          <div className="md:col-span-2 lg:col-span-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-fluid-4">
            <h2 className="text-fluid-body font-semibold text-light-foreground dark:text-dark-foreground mb-4">Horário de Pico</h2>
            <div className="h-64 flex items-end gap-4">
              <div className="flex-1 h-[30%] bg-gradient-to-t from-primary/50 to-primary rounded-t-md"></div>
              <div className="flex-1 h-[50%] bg-gradient-to-t from-primary/50 to-primary rounded-t-md"></div>
              <div className="flex-1 h-[75%] bg-gradient-to-t from-primary/50 to-primary rounded-t-md"></div>
              <div className="flex-1 h-[60%] bg-gradient-to-t from-primary/50 to-primary rounded-t-md"></div>
              <div className="flex-1 h-[90%] bg-gradient-to-t from-primary/50 to-primary rounded-t-md"></div>
              <div className="flex-1 h-[70%] bg-gradient-to-t from-primary/50 to-primary rounded-t-md"></div>
              <div className="flex-1 h-[40%] bg-gradient-to-t from-primary/50 to-primary rounded-t-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
