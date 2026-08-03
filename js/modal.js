/* Areas of Practice — detail modal */
(function () {
  const overlay = document.getElementById("areaModal");
  if (!overlay) return;

  const iconEl = document.getElementById("modalIcon");
  const titleEl = document.getElementById("modalTitle");
  const descEl = document.getElementById("modalDescription");
  const listEl = document.getElementById("modalList");
  const closeBtn = document.getElementById("modalClose");

  const checkIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7" /></svg>';

  const areas = {
    trabalhista: {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></svg>',
      title: "Direito Trabalhista",
      description: "Atuação completa na defesa dos direitos do trabalhador perante a Justiça do Trabalho, com foco em soluções ágeis e transparentes.",
      items: [
        "Rescisão indireta e verbas rescisórias",
        "Horas extras e adicionais não pagos",
        "Assédio moral e acidente de trabalho",
        "Reconhecimento de vínculo empregatício",
      ],
    },
    previdenciario: {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3.2 7.5-7 9-3.8-1.5-7-4.5-7-9V6z" /><path d="M12 8v5" /><circle cx="12" cy="15.5" r="0.6" fill="currentColor" /></svg>',
      title: "Direito Previdenciário",
      description: "Orientação estratégica em benefícios do INSS, com acompanhamento próximo em cada etapa administrativa e judicial.",
      items: [
        "Aposentadoria por idade, tempo de contribuição e invalidez",
        "Auxílio-doença e BPC/LOAS",
        "Revisão de benefícios já concedidos",
        "Pensão por morte",
      ],
    },
    consumidor: {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h13l-1.4 8.4a2 2 0 0 1-2 1.6H8.4a2 2 0 0 1-2-1.6L5 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>',
      title: "Direito do Consumidor",
      description: "Defesa de consumidores lesados por práticas abusivas, cobranças indevidas e produtos ou serviços com defeito.",
      items: [
        "Negativação indevida e danos morais",
        "Vícios em produtos e serviços",
        "Cobranças abusivas",
        "Contratos bancários e de consumo",
      ],
    },
    familia: {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7" /><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" /></svg>',
      title: "Direito de Família",
      description: "Condução humanizada e sigilosa de questões familiares, sempre priorizando o diálogo e o bem-estar de todos os envolvidos.",
      items: [
        "Divórcio consensual e litigioso",
        "Guarda e regulamentação de visitas",
        "Pensão alimentícia",
        "Inventário e partilha de bens",
      ],
    },
  };

  const openModal = (key) => {
    const data = areas[key];
    if (!data) return;

    iconEl.innerHTML = data.icon;
    titleEl.textContent = data.title;
    descEl.textContent = data.description;
    listEl.innerHTML = data.items
      .map((item) => `<li>${checkIcon}<span>${item}</span></li>`)
      .join("");

    overlay.classList.add("is-active");
    document.body.classList.add("modal-open");
    closeBtn.focus({ preventScroll: true });
  };

  const closeModal = () => {
    overlay.classList.remove("is-active");
    document.body.classList.remove("modal-open");
  };

  document.querySelectorAll("[data-area]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.area));
  });

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) closeModal();
  });
})();
