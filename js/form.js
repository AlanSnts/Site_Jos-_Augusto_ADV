/* Contact form: client-side validation + WhatsApp handoff (no backend available) */
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const statusEl = document.getElementById("formStatus");
  const WHATSAPP_NUMBER = "5511972445505";

  const validators = {
    nome: (v) => v.trim().length >= 3,
    telefone: (v) => v.replace(/\D/g, "").length >= 10,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    area: (v) => v.trim().length > 0,
    mensagem: (v) => v.trim().length >= 10,
  };

  function validateField(field) {
    const group = field.closest(".form-group");
    const isValid = validators[field.name] ? validators[field.name](field.value) : true;
    group.classList.toggle("has-error", !isValid);
    return isValid;
  }

  Array.from(form.elements).forEach((field) => {
    if (!field.name) return;
    field.addEventListener("blur", () => validateField(field));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isFormValid = true;
    Array.from(form.elements).forEach((field) => {
      if (!field.name) return;
      if (!validateField(field)) isFormValid = false;
    });

    if (!isFormValid) {
      statusEl.textContent = "Verifique os campos destacados antes de enviar.";
      statusEl.classList.add("is-visible");
      return;
    }

    const data = new FormData(form);
    const message = [
      "Olá, gostaria de agendar um atendimento.",
      "",
      `Nome: ${data.get("nome")}`,
      `Telefone: ${data.get("telefone")}`,
      `E-mail: ${data.get("email")}`,
      `Área de interesse: ${data.get("area")}`,
      `Mensagem: ${data.get("mensagem")}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    statusEl.textContent = "Obrigado! Você será redirecionado ao WhatsApp para concluir o envio.";
    statusEl.classList.add("is-visible");

    window.open(url, "_blank", "noopener");
    form.reset();
  });
})();
