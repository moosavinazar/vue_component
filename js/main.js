// const HomeWeb = {
//     template: `
//         <div> <h1>{{name}}</h1> </div>
//     `,
//     data(){
//         return {
//             name: 'hassan'
//         }
//     }
// }

// Vue.createApp(
//     {
//         components: {
//             Home:HomeWeb
//         },
//         template: `
//             <div> <h1>Name: </h1> </div>
//             <Home/>
//         `,
//         data(){
//             return {
//                 name: 'hassan'
//             }
//         }
//     }
// ).mount('#app');

import HomeWeb from '../components/Home.vue'

const app = Vue.createApp(
    {
        template: `
            <div> <h1>Name: </h1> </div>
            <Home/>
        `,
        data(){
            return {
                name: 'hassan'
            }
        }
    }
);
app.component('Home', HomeWeb);
app.mount('#app');