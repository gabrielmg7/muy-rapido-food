export interface IHomeScreenProps {
    pageTitle?: "Home",
    cantina?: ICantina;
    setCantina?: React.Dispatch<React.SetStateAction<ICantina>>;
    cantinas?: ICantina[];
    setCantinas?: React.Dispatch<React.SetStateAction<ICantina[]>>;
}

interface ICantina {
    id: string;
    nome: string;
    status: "Aberto" | "Fechado";
}

interface ICliente {
    id: string;
    nome: string;
    matricula: string;
    
}

//State inicial do Componente

export const initialStateHome: IHomeScreenProps = {
    pageTitle: "Home",
    cantina: {
        id: "",
        nome: "",
        status: "Aberto"
    },
    cantinas: []
}
