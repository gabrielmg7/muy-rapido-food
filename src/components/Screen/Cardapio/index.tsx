import { View, Text, HStack, Stack, Box, Heading, AspectRatio, Image, ScrollView, Icon, IconButton } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Imgsalgado from '../Cardapio/salgado.jpg'
import React, { useEffect, useState } from "react";

import theme from "../../../themes/Theme";
import { TouchableOpacity } from "react-native";
import { pegarProduto } from "../../../../firebaseConfig";





const CardapioScreen = () => {
    const [produtos, setProdutos]= useState([])
    useEffect(() => {
       

        async function carregarDados () {
            const produtosdoFiresote = await pegarProduto()
            setProdutos(produtosdoFiresote)
            console.log(produtos)
        }
        carregarDados()
    }, []);
    

    pegarProduto()

   

    return (
        <>
            <ScrollView>
                <View alignItems='flex-start'>
                    <HStack flexWrap='wrap'>
                    
                            <Box
                            
                                maxWidth={80}
                                margin={2}
                                flexBasis='30%'
                                rounded='lg'
                                overflow='hidden'
                                borderColor='coolGray.200'
                                borderWidth='1'
                                flex={1}
                            >
                                <TouchableOpacity>
                                    <Box>
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image source={Imgsalgado} alt='teste' />
                                        </AspectRatio>
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <Stack space={2} maxHeight={32} overflow="hidden">
                                            <Heading size="xs" ml="1">
                                                teste
                                            </Heading>

                                        </Stack>
                                        <Text fontWeight="400">teste</Text>
                                    </Stack>
                                </TouchableOpacity>
                            </Box>
                            
                    </HStack>
                </View>
            </ScrollView>
            <View>
            
                
                
            </View>

        </>
    );
};

export default CardapioScreen;



