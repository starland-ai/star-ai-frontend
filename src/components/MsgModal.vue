

<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-[#08091B]/70  flex items-center justify-center" style="z-index:999">
       <div  class="w-3/4 bg-[#16192E] rounded-xl pb-10 md:pb-24 md:w-1/2" >
        <div class="cursor-pointer mt-6 md:mt-8 pr-6 md:pr-8 text-right flex justify-end" @click="close">
            <img src="@/assets/images/close.png" class="w-6 h-6"/>
        </div>
        <div class="text-[#ccc] text-2xl mt-7 mb-10 md:mt-20 md:mb-20 text-center font-bold">
            {{ title }}
        </div>
        <div class="mb-10 flex justify-center">
            <img src="@/assets/images/success.png" class="w-2/5 h-auto" v-if="type === 'success'"/>
            <img src="@/assets/images/nologin.png" class="w-2/5 h-auto" v-if="type === 'nologin'"/>
            <img src="@/assets/images/error.png" class="w-2/5 h-auto" v-if="type === 'error'"/>
        </div>
        <div class="w-4/5 h-10 md:w-2/5 md:h-14 bg-gradient-to-r from-left-gradient to-right-gradient shadow-custom  flex items-center justify-center mx-auto rounded-56 mt-[65px] cursor-pointer" @click="close">OK</div>
       </div>
    </div>
</template>

<script>
    // import success from '@/assets/images/error.png'
    export default {
        props: {
            width: {
                type: String,
                default: 'w-3/4'
            },
            height: {
                type: String,
                default: 'h-auto'
            },
            title: {
                type:String,
                default: ''
            },
            type: {
                type: String,
                default: 'success'
            }
        },
      
        setup(props, {emit}) {
            const close = () => {
                emit('close')
            }
            return {
                close
            }
        }
    }

</script>