<template>
  <div class="grid grid-flow-row lg:grid-cols-5 xs:grid-cols-1">
  <div class="h-screen bg-green-800 sm:col-span-2 lg:col-span-3 xs:hidden">1</div>
  <div class="flex flex-col content-center justify-center h-screen mx-10 my-auto xl:mx-20 sm:col-span-2 lg:col-span-2 xs:col-span-4">
					<div>
						<h1 class="text-2xl font-bold text-gray-800">Ingresa a tu cuenta</h1>
					</div>
					<div class="mt-5">
            <div class="relative px-3 py-2 border border-gray-300 rounded-md shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label for="name" v-show="labelName" class="absolute inline-block px-1 -mt-px text-xs font-medium text-gray-800 bg-white -top-2 left-2">Usuario</label>
              <input type="text" v-model="contentName" @focus="labelName = true" @blur="labelName = validLabel(contentName)" name="name" id="name" class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm" placeholder="Nombre de usuario" />
            </div>
          </div>
          <div class="mt-5">
            <div class="relative px-3 py-2 border border-gray-300 rounded-md shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label v-show="labelPass" for="pass" class="absolute inline-block px-1 -mt-px text-xs font-medium text-gray-800 bg-white -top-2 left-2">Contraseña</label>
              <input type="password" v-model="contentPass" @focus="labelPass = true" @blur="labelPass = validLabel(contentPass)" name="pass" id="pass" class="block w-full p-0 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 sm:text-sm" placeholder="contraseña" />
            </div>
          </div>
          <div class="">
            <button class="w-full py-2 mt-4 mb-3 text-white transition duration-100 bg-green-500 rounded-md hover:bg-green-400" v-on:click="validData(contentName, contentPass)">Ingresar</button>
          </div>

  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from 'vuex'
import axios from 'axios'


export default {
    name: 'Home',
    components: {
      HelloWorld
    },  
    data(){
      var labelName = false;
      var contentName = '';
      var labelPass = false;
      var contentPass = '';

      var validLabel = ((data) => {
        if(data === ''){
            return false;
        }
        return true;
      });
      var validData = ((name, pass, that) => {
          axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => (
                                response.status != 200 ? console.log('EMITIR LOGIN INCORRECTO') : this.$router.push('App')
                            )
              )
      });

      return{
        labelName,
        contentName,
        labelPass,
        contentPass,
        validLabel,
        validData
      }
    }
}
</script>
