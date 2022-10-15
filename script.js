const ratingCard = document.querySelector(".rating-card");
const ratingFeedback = document.querySelector(".feedback-card");
const ratingOptions = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");
const rateFeedbackText = document.querySelector(".rate-text");

//Fazer um loop para adicionar o eventListener em todos os botões de avaliação
const SelectingRateOption = () => {
    for (const rate of ratingOptions) {
        rate.addEventListener("click", selectRate);
    }
};

//Função para selecionar a opção
const selectRate = (e) => {
    //Pegando qual opção foi clicada
    const clickedOption = e.target;

    //Checando se alguma opção já está selecionada, e se estiver remover a seleção
    if (checkIfIsSelected()) {
        for (const rate of ratingOptions) {
            rate.classList.remove("selected");
        }
    }

    //Selecionando a opção clicada
    clickedOption.classList.add("selected");
};

//Loop para verificar se alguma nota está selecionada
const checkIfIsSelected = () => {
    for (const rate of ratingOptions) {
        //Se alguma opção já estiver selecionada retornar true
        if (rate.className === "rating-btn selected") {
            return true;
        }
    }
};

//Pegando o ID da opção selecionada para mostrar ao usuário qual opção ele selecionou
const getSelectedRate = () => {
    if (checkIfIsSelected()) {
        for (const rate of ratingOptions) {
            //Se alguma opção estiver selecionada retornar o atributo "ID" do mesmo
            if (rate.className === "rating-btn selected") {
                return rate.getAttribute("id");
            }
        }
    }
};

//Enviar formulário com o botão submit se alguma opção estiver selecionada
const submitRate = () => {
    if (checkIfIsSelected()) {
        ratingCard.style.display = "none";
        ratingFeedback.style.display = "flex";
        rateFeedbackText.innerText = `You selected ${getSelectedRate()} out of 5`;
    }
};

SelectingRateOption();
submitButton.addEventListener("click", submitRate);
