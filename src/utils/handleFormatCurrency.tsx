export const handleFormatCurrency = (value: number): string => {
    const formattedValue = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    return formattedValue;
};