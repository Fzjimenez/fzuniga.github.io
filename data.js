const portfolioData = {
  skills: [
    "Microsoft Azure", "Microsoft 365 Security", "Entra ID", "Wazuh SIEM",
    "Windows Server", "VMware / Hyper-V", "Veeam Backup", "PowerShell",
    "Azure Firewall", "Defender for Cloud", "Exchange Online", "Security Assessments",
    "Azure Arc", "Logic Apps", "Incident Response", "Threat Hunting", "Azure Monitor", "Backup & DR"
  ],
  projects: [
    {
      category: "Cybersecurity / SIEM",
      title: "SOC 360 con Wazuh",
      problem: "Alertas dispersas, baja visibilidad de endpoints, firewalls y eventos críticos.",
      solution: "Implementación de Wazuh como SIEM/XDR, integración de agentes, FortiGate, Microsoft Defender y dashboards ejecutivos.",
      impact: "Mayor visibilidad operacional, priorización de eventos críticos y base real para respuesta SOC.",
      tech: ["Wazuh", "Linux", "Syslog", "Defender", "Threat Hunting"]
    },
    {
      category: "Microsoft Security",
      title: "Assessment Microsoft 365 Security",
      problem: "Riesgos en Exchange, Entra ID, SharePoint, Teams, usuarios y configuraciones administrativas.",
      solution: "Evaluación de postura, clasificación de hallazgos, recomendaciones por severidad y resumen ejecutivo.",
      impact: "Decisiones más claras para gerencia y roadmap de remediación priorizado.",
      tech: ["Microsoft 365", "Entra ID", "Exchange", "ORCA", "PowerShell"]
    },
    {
      category: "Cloud Architecture",
      title: "Arquitectura Hub & Spoke en Azure",
      problem: "Red cloud sin segmentación, control de tráfico ni diseño preparado para escalar.",
      solution: "Diseño Hub & Spoke con Azure Firewall, UDR, VNet Peering, reglas NAT y control centralizado.",
      impact: "Ambiente más gobernable, seguro y listo para workloads empresariales.",
      tech: ["Azure", "Azure Firewall", "VNet", "UDR", "Network Security"]
    },
    {
      category: "Hybrid Cloud",
      title: "Azure Arc para gobierno híbrido",
      problem: "Servidores on-premise fuera del radar cloud, sin inventario y sin gobierno centralizado.",
      solution: "Onboarding a Azure Arc para visibilidad, monitoreo, cumplimiento e inventario de servidores.",
      impact: "Gestión híbrida más ordenada y reducción de puntos ciegos operativos.",
      tech: ["Azure Arc", "Azure Monitor", "Windows Server", "Linux", "Governance"]
    },
    {
      category: "Backup / DR",
      title: "Modernización de Backup con Veeam",
      problem: "Recuperaciones complejas, poca visibilidad del estado de backups y riesgo operativo ante caída de servicios.",
      solution: "Revisión de jobs, repositorios, restauración, pruebas de recuperación y lineamientos de continuidad.",
      impact: "Mayor confianza en recuperación, menor riesgo de pérdida de datos y operación más defendible.",
      tech: ["Veeam", "VMware", "Hyper-V", "Windows Server", "DR"]
    },
    {
      category: "SOAR / Automation",
      title: "Respuesta automatizada con Logic Apps",
      problem: "Alertas de identidad o riesgo que requieren atención manual y generan tiempos de respuesta altos.",
      solution: "Diseño de flujos para recibir alertas, validar contexto, notificar responsables y ejecutar acciones controladas.",
      impact: "Menor tiempo de respuesta y proceso de atención más repetible y auditable.",
      tech: ["Azure Logic Apps", "Entra ID", "Defender", "Graph API", "Automation"]
    }
  ]
};
