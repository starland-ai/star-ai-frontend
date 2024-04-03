<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-[#08091B]/70  flex items-center justify-center" style="z-index:999;" ref="more">
        <div class="bg-[#16192E] rounded-xl w-4/5  md:w-1/2  2xl:w-1/3 py-8 px-10 relative overflow-y-auto overflow" ref="content" style="max-height: 90vh">
            <div class=" absolute cursor-pointer top-[20px] right-[14px] text-right flex justify-end" @click.stop="close">
                <img src="@/assets/images/close.png" class="w-6 h-6" data-src="close"/>
            </div>
            <div class="relative columns-2 gap-8" v-if="imgUrls.length > 1">
                <div v-for="(item, index) in imgUrls" :key="index" class="relative pt-8">
                    <img class="w-full  rounded-lg" :src="item" />
                </div>
            </div>
            <div class="relative flex justify-center items-center" v-else>
                <div v-for="(item, index) in imgUrls" :key="index" class="relative pt-8">
                    <img class="w-full  rounded-lg" :src="item" />
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { onBeforeMount, onMounted, onUnmounted, ref,onBeforeUnmount } from 'vue';
import AI1 from '@/assets/images/ai1.png'
import AI2 from '@/assets/images/ai2.png'
import AI3 from '@/assets/images/test1.webp'
import AI4 from '@/assets/images/user.png'
const imgList = ['https://images.unsplash.com/photo-1518892096458-a169843d7f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',AI1, AI3, AI4]
 export default {
    props: {
        imgUrls: {
            type: Array,
            default: () => ([])
        }
    },

 
    setup(props, {emit}) {
        const close = () => {
            emit('close')
        }
        const content = ref(null)
        const more = ref(null)
            const closeDialogIfClickOutside = (event) => {
                event.stopPropagation();
                const dialogEl = content.value;
                console.log(event.target.getAttribute('data-src'))
                if (!dialogEl.contains(event.target) || event.target.getAttribute('data-src') === 'close') {
                    emit('close') 
                }
            }
            onMounted(() => {
                document.addEventListener('click', closeDialogIfClickOutside, true)
            })
            onBeforeUnmount(() => {
                document.removeEventListener('click', closeDialogIfClickOutside, true)
            })
        return {
            imgList,
            close,
            content,
            more
        }
    }
 }

</script>


<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

.grid-item {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}
.overflow::-webkit-scrollbar {
  display: none;
}
</style>