/* =========================================================
   PONTUAL - SISTEMA DE AUTENTICAÇÃO E INTERATIVIDADE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       0. TOGGLE DE TEMA (CLARO / ESCURO)
    ========================================================= */

    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("pontual-theme");

    if (savedTheme === "light") {
        document.body.classList.add("theme-light");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("theme-light");

            const isLight = document.body.classList.contains("theme-light");

            localStorage.setItem(
                "pontual-theme",
                isLight ? "light" : "dark"
            );
        });
    }


    /* =========================================================
       1. ESTADO DA APLICAÇÃO
    ========================================================= */

    let currentRole = "colaborador";


    /* =========================================================
       2. ELEMENTOS DO DOM
    ========================================================= */

    // Formulário e Campos
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("togglePassword");
    const eyeIcon = document.getElementById("eyeIcon");
    const continueBtn = document.getElementById("continueButton");
    const continueBtnText = document.getElementById("continueButtonText");

    // Seletores de Perfil
    const btnRoleColaborador = document.getElementById("btnRoleColaborador");
    const btnRoleGestor = document.getElementById("btnRoleGestor");
    const formTitle = document.getElementById("formTitle");
    const formSubtitle = document.getElementById("formSubtitle");

    // Opção de Criar Conta
    const signupPrompt = document.getElementById("signupPrompt");
    const signupPromptText = document.getElementById("signupPromptText");
    const toggleSignMode = document.getElementById("toggleSignMode");
    const googleButtonText = document.getElementById("googleButtonText");

    // Painel Esquerdo
    const heroTitle = document.getElementById("heroTitle");
    const heroDesc = document.getElementById("heroDesc");

    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");

    const stepNum1 = document.getElementById("stepNum1");
    const stepNum2 = document.getElementById("stepNum2");
    const stepNum3 = document.getElementById("stepNum3");

    const stepText1 = document.getElementById("stepText1");
    const stepText2 = document.getElementById("stepText2");
    const stepText3 = document.getElementById("stepText3");


    /* =========================================================
       3. MOSTRAR / OCULTAR SENHA
    ========================================================= */

    if (togglePasswordBtn && passwordInput) {

        togglePasswordBtn.addEventListener("click", () => {

            const isPassword = passwordInput.type === "password";

            passwordInput.type = isPassword ? "text" : "password";

            if (eyeIcon) {

                eyeIcon.innerHTML = isPassword

                    ? `
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8
                        a18.45 18.45 0 0 1 5.06-5.94
                        M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8
                        a18.5 18.5 0 0 1-2.16 3.19
                        m-6.72-1.07a3 3 0 1 1-4.24-4.24">
                        </path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    `

                    : `
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                        </path>
                        <circle cx="12" cy="12" r="3"></circle>
                    `;
            }
        });
    }


    /* =========================================================
       4. ATUALIZAÇÃO DO PERFIL
       COLABORADOR / GESTOR
    ========================================================= */

    function updateRoleUI() {

        if (currentRole === "colaborador") {

            /* -------------------------
               COLABORADOR
            ------------------------- */

            if (btnRoleColaborador) {
                btnRoleColaborador.classList.add("active");
                btnRoleColaborador.setAttribute("aria-selected", "true");
            }

            if (btnRoleGestor) {
                btnRoleGestor.classList.remove("active");
                btnRoleGestor.setAttribute("aria-selected", "false");
            }

            if (formTitle) {
                formTitle.textContent = "Entrar como Colaborador";
            }

            if (formSubtitle) {
                formSubtitle.textContent =
                    "Acesse com seu email corporativo e senha.";
            }

            if (continueBtnText) {
                continueBtnText.textContent = "Entrar";
            }

            if (googleButtonText) {
                googleButtonText.textContent = "Entrar com Google";
            }

            // Esconde o Criar Conta para colaborador
            if (signupPrompt) {
                signupPrompt.style.display = "none";
            }

            // Textos do painel esquerdo
            if (heroTitle) {
                heroTitle.innerHTML =
                    'Acesse sua<br><span>jornada</span>';
            }

            if (heroDesc) {
                heroDesc.textContent =
                    "Informe seus dados para acessar sua conta de colaborador.";
            }

            if (stepText1) {
                stepText1.innerHTML = "Informe seu<br>email";
            }

            if (stepText2) {
                stepText2.innerHTML = "Digite sua<br>senha";
            }

            if (stepText3) {
                stepText3.innerHTML =
                    "Acesse a plataforma<br>Pontual";
            }

        } else {

            /* -------------------------
               GESTOR
            ------------------------- */

            if (btnRoleGestor) {
                btnRoleGestor.classList.add("active");
                btnRoleGestor.setAttribute("aria-selected", "true");
            }

            if (btnRoleColaborador) {
                btnRoleColaborador.classList.remove("active");
                btnRoleColaborador.setAttribute("aria-selected", "false");
            }

            if (formTitle) {
                formTitle.textContent = "Entrar como Gestor";
            }

            if (formSubtitle) {
                formSubtitle.textContent =
                    "Acesse o painel de controle e acompanhamento de ponto.";
            }

            if (continueBtnText) {
                continueBtnText.textContent = "Entrar";
            }

            if (googleButtonText) {
                googleButtonText.textContent = "Entrar com Google";
            }

            /* -------------------------
               MOSTRA CRIAR CONTA
            ------------------------- */

            if (signupPrompt) {
                signupPrompt.style.display = "block";
            }

            if (signupPromptText) {
                signupPromptText.textContent =
                    "Ainda não possui uma conta?";
            }

            if (toggleSignMode) {
                toggleSignMode.textContent = "Criar conta";
            }

            // Textos do painel esquerdo
            if (heroTitle) {
                heroTitle.innerHTML =
                    'Painel do<br><span>gestor</span>';
            }

            if (heroDesc) {
                heroDesc.textContent =
                    "Informe seus dados para acessar o painel de gestão.";
            }

            if (stepText1) {
                stepText1.innerHTML = "Informe seu<br>email";
            }

            if (stepText2) {
                stepText2.innerHTML = "Digite sua<br>senha";
            }

            if (stepText3) {
                stepText3.innerHTML =
                    "Acesse o painel<br>Pontual";
            }
        }

        updateStepCards();
    }


    /* =========================================================
       5. BOTÕES DE PERFIL
    ========================================================= */

    if (btnRoleColaborador) {

        btnRoleColaborador.addEventListener("click", () => {

            currentRole = "colaborador";

            updateRoleUI();
        });
    }


    if (btnRoleGestor) {

        btnRoleGestor.addEventListener("click", () => {

            currentRole = "gestor";

            updateRoleUI();
        });
    }


    /* =========================================================
       6. BOTÃO CRIAR CONTA
       
       AGORA ELE ABRE UMA NOVA PÁGINA:
       cadastro.html
    ========================================================= */

    if (toggleSignMode) {

        toggleSignMode.addEventListener("click", (e) => {

            e.preventDefault();

            if (currentRole === "gestor") {

                window.location.href = "conta2.html";

            }
        });
    }


    /* =========================================================
       7. VALIDAÇÃO DE EMAIL
    ========================================================= */

    function isValidEmail(value) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            value.trim()
        );
    }


    /* =========================================================
       8. COLORAÇÃO DOS CARDS
    ========================================================= */

    function updateStepCards() {

        const emailVal = emailInput
            ? emailInput.value.trim()
            : "";

        const passVal = passwordInput
            ? passwordInput.value
            : "";

        const hasEmailText = emailVal.length > 0;

        const isEmailValid = isValidEmail(emailVal);

        const hasPasswordText = passVal.length > 0;

        const isPassValid = passVal.length >= 4;


        /* -------------------------
           CARD 1 - EMAIL
        ------------------------- */

        if (hasEmailText) {

            step1.classList.add("active");

            if (isEmailValid) {

                step1.classList.add("completed");

                if (stepNum1) {
                    stepNum1.innerHTML = "✓";
                }

            } else {

                step1.classList.remove("completed");

                if (stepNum1) {
                    stepNum1.innerHTML = "1";
                }
            }

        } else {

            step1.classList.add("active");

            step1.classList.remove("completed");

            if (stepNum1) {
                stepNum1.innerHTML = "1";
            }
        }


        /* -------------------------
           CARD 2 - SENHA
        ------------------------- */

        if (hasPasswordText) {

            step2.classList.add("active");

            if (isPassValid) {

                step2.classList.add("completed");

                if (stepNum2) {
                    stepNum2.innerHTML = "✓";
                }

            } else {

                step2.classList.remove("completed");

                if (stepNum2) {
                    stepNum2.innerHTML = "2";
                }
            }

        } else {

            if (document.activeElement !== passwordInput) {

                step2.classList.remove("active");

                step2.classList.remove("completed");

                if (stepNum2) {
                    stepNum2.innerHTML = "2";
                }
            }
        }


        /* -------------------------
           CARD 3 - CONCLUSÃO
        ------------------------- */

        if (hasEmailText && hasPasswordText) {

            step3.classList.add("active");

            if (isEmailValid && isPassValid) {

                step3.classList.add("completed");

                if (stepNum3) {
                    stepNum3.innerHTML = "★";
                }

            } else {

                step3.classList.remove("completed");

                if (stepNum3) {
                    stepNum3.innerHTML = "3";
                }
            }

        } else {

            step3.classList.remove("active");

            step3.classList.remove("completed");

            if (stepNum3) {
                stepNum3.innerHTML = "3";
            }
        }
    }


    /* =========================================================
       9. EVENTOS DOS CAMPOS
    ========================================================= */

    if (emailInput) {

        emailInput.addEventListener(
            "input",
            updateStepCards
        );

        emailInput.addEventListener("focus", () => {

            if (step1) {
                step1.classList.add("active");
            }
        });

        emailInput.addEventListener(
            "blur",
            updateStepCards
        );
    }


    if (passwordInput) {

        passwordInput.addEventListener(
            "input",
            updateStepCards
        );

        passwordInput.addEventListener("focus", () => {

            if (step2) {
                step2.classList.add("active");
            }
        });

        passwordInput.addEventListener(
            "blur",
            updateStepCards
        );
    }


    /* =========================================================
       10. CLIQUE NOS CARDS
    ========================================================= */

    if (step1) {

        step1.addEventListener("click", () => {

            if (emailInput) {
                emailInput.focus();
            }
        });
    }


    if (step2) {

        step2.addEventListener("click", () => {

            if (passwordInput) {
                passwordInput.focus();
            }
        });
    }


    if (step3) {

        step3.addEventListener("click", () => {

            if (continueBtn) {
                continueBtn.focus();
            }
        });
    }


    /* =========================================================
       11. BOTÃO ENTRAR
    ========================================================= */

    if (continueBtn) {

        continueBtn.addEventListener("click", () => {

            const email = emailInput
                ? emailInput.value.trim()
                : "";

            const pass = passwordInput
                ? passwordInput.value
                : "";


            /* -------------------------
               VALIDA EMAIL
            ------------------------- */

            if (!email) {

                alert(
                    "Por favor, digite seu email."
                );

                if (emailInput) {
                    emailInput.focus();
                }

                return;
            }


            if (!isValidEmail(email)) {

                alert(
                    "Por favor, informe um email válido."
                );

                if (emailInput) {
                    emailInput.focus();
                }

                return;
            }


            /* -------------------------
               VALIDA SENHA
            ------------------------- */

            if (!pass) {

                alert(
                    "Por favor, digite sua senha."
                );

                if (passwordInput) {
                    passwordInput.focus();
                }

                return;
            }


            /* -------------------------
               ANIMAÇÃO DE LOGIN
            ------------------------- */

            const originalText =
                continueBtnText
                    ? continueBtnText.textContent
                    : "Entrar";

            continueBtn.disabled = true;

            if (continueBtnText) {
                continueBtnText.textContent =
                    "Entrando...";
            }


            setTimeout(() => {

                if (continueBtnText) {
                    continueBtnText.textContent =
                        "✓ Acesso autorizado!";
                }

                continueBtn.style.background =
                    "linear-gradient(90deg, #10b981, #059669)";


                /* -------------------------
                   PINTA OS 3 CARDS
                ------------------------- */

                if (step1) {
                    step1.classList.add(
                        "active",
                        "completed"
                    );
                }

                if (step2) {
                    step2.classList.add(
                        "active",
                        "completed"
                    );
                }

                if (step3) {
                    step3.classList.add(
                        "active",
                        "completed"
                    );
                }


                if (stepNum1) {
                    stepNum1.innerHTML = "✓";
                }

                if (stepNum2) {
                    stepNum2.innerHTML = "✓";
                }

                if (stepNum3) {
                    stepNum3.innerHTML = "✓";
                }


                /* -------------------------
                   RESTAURA BOTÃO
                ------------------------- */

                setTimeout(() => {

                    continueBtn.disabled = false;

                    continueBtn.style.background = "";

                    if (continueBtnText) {
                        continueBtnText.textContent =
                            originalText;
                    }

                }, 2200);

            }, 800);
        });
    }


    /* =========================================================
       12. INICIALIZAÇÃO
    ========================================================= */

    updateRoleUI();

    updateStepCards();

});