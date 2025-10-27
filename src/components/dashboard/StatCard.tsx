type Props = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

const StatCard = ({ title, value, icon }: Props) => {
  return (
    <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-fluid-4">
      <div className="flex items-center justify-between">
        <span className="text-fluid-sm font-medium text-light-foreground/70 dark:text-dark-foreground/70">{title}</span>
        <div className="text-accent">{icon}</div>
      </div>
      <p className="text-fluid-h2 font-bold mt-2 text-light-foreground dark:text-dark-foreground">{value}</p>
    </div>
  );
};

export default StatCard;
