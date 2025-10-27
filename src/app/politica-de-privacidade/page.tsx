const PoliticaDePrivacidadePage = () => {
  return (
    <div className="py-fluid-16 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4 prose dark:prose-invert lg:prose-xl">
        <h1>Política de Privacidade da RW IA</h1>
        <p><strong>Última atualização:</strong> 17 de outubro de 2025</p>
        
        <p>Bem-vindo à RW IA. Sua privacidade é de extrema importância para nós. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações quando você utiliza nossa plataforma e serviços.</p>
        <p>Ao se cadastrar e utilizar a RW IA, você concorda com as práticas descritas neste documento.</p>

        <h2>1. Dados que Coletamos</h2>
        <p>Coletamos informações para fornecer e melhorar nossos serviços. Os dados são coletados das seguintes formas:</p>
        <ul>
          <li><strong>Dados Fornecidos por Você:</strong>
            <ul>
              <li><strong>Informações de Cadastro:</strong> Nome completo, e-mail, telefone, nome da empresa/negócio.</li>
              <li><strong>Informações de Pagamento:</strong> Dados necessários para processar assinaturas (gerenciados por um processador de pagamentos seguro; não armazenamos dados de cartão de crédito).</li>
              <li><strong>Configurações do Agente:</strong> Instruções, prompts e personalizações que você define para o seu agente de IA.</li>
            </ul>
          </li>
          <li><strong>Dados Processados pela IA em seu Nome:</strong>
            <ul>
              <li><strong>Conteúdo das Conversas:</strong> Coletamos e processamos as interações que seus clientes (usuários finais) têm com seu agente de IA. Você é o controlador desses dados; nós atuamos como processadores em seu nome.</li>
              <li><strong>Dados de Integrações:</strong> Ao conectar serviços de terceiros (como Google Agenda, Outlook, CRMs, WhatsApp), você nos autoriza a acessar e processar os dados necessários para que a integração funcione conforme o esperado (ex: ler horários disponíveis, criar eventos).</li>
            </ul>
          </li>
          <li><strong>Dados Coletados Automaticamente:</strong>
            <ul>
              <li><strong>Informações de Uso:</strong> Registramos sua atividade na plataforma, como quais recursos você utiliza e quando.</li>
              <li><strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional e informações do dispositivo.</li>
            </ul>
          </li>
        </ul>

        <h2>2. Como Usamos Seus Dados</h2>
        <p>Utilizamos suas informações para os seguintes propósitos:</p>
        <ul>
          <li><strong>Fornecer e Manter o Serviço:</strong> Operar seu agente de IA, gerenciar sua conta e processar suas assinaturas.</li>
          <li><strong>Melhorar a Plataforma:</strong> Analisar dados de uso para identificar tendências, corrigir problemas e desenvolver novos recursos.</li>
          <li><strong>Comunicação:</strong> Enviar e-mails importantes sobre sua conta, atualizações de serviço e, com seu consentimento, novidades e ofertas.</li>
          <li><strong>Segurança:</strong> Proteger a plataforma contra fraudes e abusos.</li>
          <li><strong>Cumprir Obrigações Legais:</strong> Atender a requisições judiciais ou regulatórias.</li>
        </ul>

        <h2>3. Compartilhamento de Dados</h2>
        <p>Nós não vendemos suas informações pessoais. O compartilhamento de dados ocorre apenas nas seguintes circunstâncias:</p>
        <ul>
          <li><strong>Com Provedores de Inteligência Artificial:</strong> Para fornecer a funcionalidade principal do nosso serviço, as conversas são processadas através de modelos de linguagem de grande porte (LLMs) fornecidos por parceiros tecnológicos de ponta, como os serviços de IA do Google. Estes parceiros estão sujeitos a rigorosas obrigações de segurança e privacidade.</li>
          <li><strong>Com Provedores de Infraestrutura:</strong> Utilizamos serviços de nuvem (como Vercel para hospedagem e Supabase/Firebase para banco de dados) para operar nossa plataforma.</li>
          <li><strong>Com Provedores de Integração:</strong> Ao ativar uma integração (ex: WhatsApp), compartilhamos os dados estritamente necessários para que o serviço funcione.</li>
          <li><strong>Por Obrigação Legal:</strong> Se formos obrigados por lei a compartilhar informações com autoridades.</li>
        </ul>

        <h2>4. Segurança dos Dados</h2>
        <p>Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados, incluindo criptografia de dados em trânsito (HTTPS), criptografia de dados sensíveis em repouso e controles de acesso rigorosos.</p>

        <h2>5. Seus Direitos (LGPD)</h2>
        <p>De acordo com a Lei Geral de Proteção de Dados, você tem o direito de acessar, corrigir, solicitar a anonimização ou eliminação, e solicitar a portabilidade dos seus dados. Para exercer seus direitos, entre em contato conosco pelo e-mail: <strong>privacidade@rwia.com.br</strong>.</p>

        <h2>6. Retenção de Dados</h2>
        <p>Manteremos seus dados enquanto sua conta estiver ativa ou pelo tempo necessário para cumprir nossas obrigações legais e resolver disputas.</p>

        <h2>7. Alterações a esta Política</h2>
        <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas por e-mail ou através de um aviso em nossa plataforma.</p>

        <h2>8. Contato</h2>
        <p>Se você tiver qualquer dúvida sobre esta Política de Privacidade, entre em contato conosco:</p>
        <p><strong>RW IA</strong><br />E-mail: <strong>contato@rwia.com.br</strong></p>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidadePage;