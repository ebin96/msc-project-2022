import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                background: '#FAFAFA',
                color1: '#EFEBE9',
                color2: '#D7CCC8',
                color3: '#BCAAA4',
                color4: '#A1887F',
                info:'#212121',


            },
            dark: {
                background: '#212121',
                color1: '#212121',
                color2: '#263238',
                color3: '#424242',
                color4: '#37474F',
                info:'#EFEBE9',
                        
            },
        },
    },
});