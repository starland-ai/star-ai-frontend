

<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-[#08091B]/70  flex items-center justify-center z-[20]">
       <div  :class="[width, height]" class="bg-[#16192E] rounded-xl md:w-1/2 md:h-auto pb-10">
        <div class="cursor-pointer mt-[30px] pr-[30px] text-right flex justify-end" @click="close">
            <img src="@/assets/images/close.png" class="w-6 h-6"/>
        </div>
        <slot></slot>
       </div>
    </div>
</template>

<script>



    export default {
        props: {
            width: {
                type: String,
                default: 'w-20'
            },
            height: {
                type: String,
                default: 'h-20'
            }
        },
      
        setup(props, {emit}) {
            const close = () => {
                emit('close')
            }
            return {
                close,
            }
        }
    }

</script>