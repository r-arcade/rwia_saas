"use client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddAgentModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Novo agente adicionado!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-fluid-6 w-full max-w-md">
        <h2 className="text-fluid-h3 font-bold text-light-foreground dark:text-dark-foreground mb-4">Adicionar Novo Agente</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">Nome Completo</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-fluid-sm font-medium text-light-foreground/80 dark:text-dark-foreground/80">E-mail</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full px-3 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
          <div className="mt-fluid-5 flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-light-border dark:bg-dark-border text-light-foreground dark:text-dark-foreground rounded-md hover:bg-light-border/80 dark:hover:bg-dark-border/80">
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90">
              Salvar Agente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAgentModal;
