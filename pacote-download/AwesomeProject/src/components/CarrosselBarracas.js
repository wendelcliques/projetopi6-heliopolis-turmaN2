import React from 'react';
import {Image, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from '../styles/index';


const CarrosselBarracas = () => {
    
    const carouselItems = [
        {
            title: 'Gato 1',
            image: 'https://www.petlove.com.br/dicas/wp-content/uploads/2020/02/grumpy-cat-petlove.png',
        },

        {
            title: 'Gato 2',
            image: 'https://www.petlove.com.br/dicas/wp-content/uploads/2020/02/grumpy-cat-petlove.png',
        },

        {
            title: 'Gato 3',
            image: 'https://www.petlove.com.br/dicas/wp-content/uploads/2020/02/grumpy-cat-petlove.png',
        },

        {
            title: 'Gato 4',
            image: 'https://www.petlove.com.br/dicas/wp-content/uploads/2020/02/grumpy-cat-petlove.png',
        },

        {
            title: 'Gato 5',
            image: 'https://www.petlove.com.br/dicas/wp-content/uploads/2020/02/grumpy-cat-petlove.png',
        },


    ];

    function renderItem({item, index}) {
        return (
            <View style={styles.carouselItemContainer}>
                <Text style={styles.carouselItemTitle}>{item.title}</Text>
        <Image style={styles.carouselItemImage} source={{uri: `${item.image}`}} />
            </View>
        )
    }

    const Carrossel = () => {
        return (
            <View style={styles.container}>
                <Carousel 
                layout={'stack'}
                data={carouselItems}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
                />
            </View>
        )
    }




    return (
        <View>
            <Carrossel />
        </View>
    )
}

export default CarrosselBarracas

