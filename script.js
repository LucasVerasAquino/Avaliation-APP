const ratingOptionsParent = document.querySelector(".rating-opts");
const ratingOptions = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");

//Selecionar uma nota
//Fazer um loop para checar cada uma das rating opts
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
    if (checkIfIsSelected) {
        for (const rate of ratingOptions) {
            rate.classList.remove("selected");
        }
    }

    //Selecionando a opção clicada
    clickedOption.classList.add("selected");
};

//Alguma nota está selecionada?
const checkIfIsSelected = () => {
    const isSelected = () => {
        for (const rate of ratingOptions) {
            return rate.classList.contains("selected");
        }
    };
};

//Pegando o ID da opção selecionada
const getSelectedRate = () => {
    if (checkIfIsSelected) {
        for (const rate of ratingOptions) {
            if (rate.className === "rating-btn selected") {
                const selectRateOptionValue = rate.getAttribute("id");
                return selectRateOptionValue;
            }
        }
    }
};

//Enviar formulário com o botão submit se alguma opção estiver selecionada
const submitRate = () => {
    if (checkIfIsSelected) {
        //Trocar a visibilidade dos cards
        //Inserir o texto de avaliação
        //Subir erro caso nenhuma opção esteja selecionada
    }
};

SelectingRateOption();
submitButton.addEventListener("click", submitRate);
