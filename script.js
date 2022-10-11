const ratingOptionsParent = document.querySelector(".rating-opts");
const ratingOptions = document.querySelectorAll(".rating-btn");

//Selecionar uma nota
//Fazer um loop para checar cada uma das rating opts
const SelectingRateOption = () => {
    for (const rate of ratingOptions) {
        rate.addEventListener("click", selectRate);
    }
};

//ALTERAR A SELEÇÃO DO ALVO DO CLICK, POIS ESTÁ GLOBAL

//Função para selecionar a opção
const selectRate = (e) => {
    const clickedOption = e.target;
    const SelectedRateOption = clickedOption.getAttribute("id");

    if (checkIfIsSelected) {
        for (const rate of ratingOptions) {
            rate.classList.remove("selected");
        }
    }

    clickedOption.classList.add("selected");

    return SelectedRateOption;
};

//Alguma nota está selecionada?
const checkIfIsSelected = () => {
    const isSelected = () => {
        for (const rate of ratingOptions) {
            return rate.classList.contains("selected");
        }
    };
};

SelectingRateOption();

//PRECISO FAZER COM QUE APENAS UMA OPÇÃO FIQUE SELECIONADA
