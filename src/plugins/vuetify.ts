import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                color1: '#E7DBDE',
                color2: '#e0d1d5',
                color3: '#d6c2c7',
                color4: '#ccb3b9',
                colorVs: '#E7DBDE',
                colorH: '#825a64',
                background: '#E7DBDE',
                info:'#181818',


            },
            dark: {
                color1: '#181818',
                color2: '#212121',
                color3: '#2E2E2E',
                color4: '#4B4B4B',
                colorVs: '#121212',
                colorH: '#E7DBDE',
                background: '#181818',
                info:'#E7DBDE',
                        
            },
        },
    },
});
