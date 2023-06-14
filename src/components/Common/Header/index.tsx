import { Box, View, Text, Image } from 'native-base'
import React from 'react'
import { colors } from '../../../themes/Theme'
import Logocantina from '../../../../assets/Rectangle229.png'
import BotaoVoltar from '../Buttons/BotaoVoltar'
import BotaoSacola from '../Buttons/BotaoSacola'

type HeaderCantinaProps = {
    pageTitle: string;
};


export const HeaderCantina: React.FC<HeaderCantinaProps> = ({ pageTitle }) => {
    const [totalItens, setTotalItens] = React.useState<number>(0);

    return (
        <View>
            <Box h={'150px'} bg={colors.light.azulTurquesa} alignItems='center' justifyContent='space-around' flexDirection='row'>
                <BotaoVoltar />
                <Text color={colors.light.brancoPuro} fontSize={'18px'}>
                    {pageTitle}
                </Text>
                <Image source={Logocantina} alt='Logo da cantina' />
                <BotaoSacola itensNaSacola={totalItens} /> 
            </Box>
        </View>
    );
};