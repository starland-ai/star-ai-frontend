<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-[#08091B]/70  flex items-center justify-center" style="z-index:99;">
        <div
            class="bg-[#16192E] rounded-xl w-5/6 h-3/4 mx-auto  lg:w-1/2 px-4  lg:px-20 lg:min-w-96 md:h-2/3  overflow-y-auto relative  overflow">
            <div class="absolute cursor-pointer right-8 top-8 text-right flex justify-end" @click="close">
                <img src="@/assets/images/close.png" class="w-6 h-6" />
            </div>
            <div class="mt-12">
                <div class="sm:text-base text-2xl font-bold text-center">Edit Information</div>
                <div>
                    <div class="text-[#ccc] sm:text-base text-xl mt-10 mb-4">Upload More Avatar's Photos</div>
                    <div class="flex gap-3 sm:flex-wrap sm:justify-center">
                        <div v-for="(item, index) in fileList" :key="index" class="relative cursor-pointer w-28 h-28"
                            @click="handleSelect(item, index)">
                            <img :src="item.url"
                                class="w-28 h-28 rounded-sm overflow-hidden  cursor-pointer object-cover object-center  bg-base-bg"
                                :style="{ border: currentImg && currentImg.url === item.url ? '2px solid #9F38CC' : 'none' }" />
                            <span class="text-[#999] text-[12px]" v-if="currentImg && currentImg.url === item.url">Set Profile
                                Photo</span>
                            <div class="w-6 h-6 bg-gradient-to-r from-left-gradient to-right-gradient rounded-full flex items-center justify-center absolute right-1 top-1 cursor-pointer"
                                v-if="fileList.length > 1" @click.stop="handleRemove(item)">
                                <el-icon>
                                    <Delete />
                                </el-icon>
                            </div>
                        </div>
                        <div class="relative w-28 h-28" v-if="fileList.length < 4 && !detail.is_3d">
                            <label for="file-upload">
                                <img src="@/assets/images/upload-icon.png"
                                    class="w-28 h-auto rounded-sm cursor-pointer" />
                            </label>
                            <input type="file" name="file" id="file-upload" style="opacity: 0;" multiple
                                @change="(event) => handleChange(event.target.files)" />
                        </div>
                    </div>


                    <div class="text-[#ccc] sm:text-base text-xl mt-4 mb-3">Rename Avatar</div>
                    <div class="flex gap-3 ">
                        <input type="text" :value="form.name" @input="handleInput"
                            class="w-full block  px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm bg-transparent border-white focus:ring-[#9F38CC] focus:border-[#9F38CC]" />
                    </div>
                    <div class="text-[#ccc] sm:text-base text-xl mt-4 mb-3">Edit Description</div>
                    <el-input v-model="form.description" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" />
                    <div class="text-[#ccc] sm:text-base text-xl mt-4 mb-3"> Set Voice Type</div>
                    <div class="flex gap-4 flex-wrap">
                        <div class="flex  mt-3" v-for="(item, index) in  voiceList" :key="item.uuid" @click="playSound(index, item.uuid)">
                            <div class="flex items-center border px-2 py-1 rounded-md cursor-pointer" :style="{borderColor: form.voiceId === item.uuid ? '#9F38CC' :'white'}">
                                <span>{{ item.name_en }}</span>
                                <div>
                                    <svg t="1711449177360" class="icon ml-1" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="5428" width="20" height="20">
                                        <path
                                            d="M257.493333 322.4l215.573334-133.056c24.981333-15.413333 57.877333-7.914667 73.493333 16.746667 5.301333 8.373333 8.106667 18.048 8.106667 27.914666v555.989334C554.666667 819.093333 530.784 842.666667 501.333333 842.666667c-9.994667 0-19.786667-2.773333-28.266666-8L257.493333 701.6H160c-41.237333 0-74.666667-33.013333-74.666667-73.738667V396.138667c0-40.725333 33.429333-73.738667 74.666667-73.738667h97.493333z m26.133334 58.4a32.298667 32.298667 0 0 1-16.96 4.8H160c-5.888 0-10.666667 4.714667-10.666667 10.538667v231.733333c0 5.813333 4.778667 10.538667 10.666667 10.538667h106.666667c5.994667 0 11.872 1.664 16.96 4.8L490.666667 770.986667V253.013333L283.626667 380.8zM800.906667 829.653333a32.288 32.288 0 0 1-45.248-0.757333 31.317333 31.317333 0 0 1 0.768-44.693333c157.653333-150.464 157.653333-393.962667 0-544.426667a31.317333 31.317333 0 0 1-0.768-44.682667 32.288 32.288 0 0 1 45.248-0.757333c183.68 175.306667 183.68 460.010667 0 635.317333z m-106.901334-126.186666a32.288 32.288 0 0 1-45.248-1.216 31.328 31.328 0 0 1 1.237334-44.672c86.229333-80.608 86.229333-210.56 0-291.178667a31.328 31.328 0 0 1-1.237334-44.672 32.288 32.288 0 0 1 45.248-1.216c112.885333 105.546667 112.885333 277.418667 0 382.965333z"
                                            fill="#ffffff" p-id="5429"></path>
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="w-3/4 h-10 lg:h-14 bg-gradient-to-r from-left-gradient to-right-gradient shadow-custom  flex items-center justify-center mx-auto rounded-56 mt-8 lg:mt-20 cursor-pointer mb-10"
                        @click="handleSubmit">
                        CONFIRM
                    </div>
                </div>

            </div>
        </div>
        <div v-if="showErr">
            <MsgModal type="error" title="Upload up to 4 photos." @close="showErr = false" />
        </div>
    </div>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive, ref, toRefs, watch, nextTick } from 'vue'
import AI1 from '@/assets/images/ai1.png'
import AI2 from '@/assets/images/ai2.png'
import MsgModal from './MsgModal.vue'
import { putCharacter, getVoice } from '@/api/url'
import { useStore } from 'vuex';
export default {
    components: {
        MsgModal
    },
    props: {
        detail: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props, { emit }) {
        const store = useStore();
        const close = () => {
            emit('close')
        }
        const form = reactive({
            description: '',
            name: '',
            files: [],
            voiceId: ''
        })
        const currentImg = ref(null)
        const { detail } = toRefs(props)
        form.name = detail.value.name
        form.description = detail.value.prompt
        form.voiceId = detail.value.voice
        const arr = detail.value.image_urls == null ? [detail.value.image_url] : detail.value.image_urls
        const fileList = ref([])
        const currentUrl = ref(detail.value.image_url)
        fileList.value = arr.length>0 && arr.map(item => {
            console.log(item, '====item')
            const name = item.split("/").pop()
            console.log(detail.value.image_url)
            console.log(item === detail.value.image_url)
            const splitItem = item.split("?t")[0]
            const splitImageUrl = detail.value.image_url.split("?t")[0]
            if(splitItem === splitImageUrl) {
                const obj = {
                    name,
                    url: item,
                    type: 'url'
                }
                debugger
                currentImg.value =  obj
            }
            return {
                name,
                url: item,
                type: 'url'
            }
        })


        const showErr = ref(false)
        const MAX_PHOTOS = 4
        const checkPhotoCount = (files) => {
          
            const len = fileList.value.length
            if (files.length + len > MAX_PHOTOS) {
    
                showErr.value = true
                return false;
            }
            showErr.value = false
            return true;
        }
        const handleChange = (files) => {
            if (checkPhotoCount(files)) {

                for (let i = 0; i < files.length; i++) {
                    const file = files[i]
                    const reader = new FileReader()
                    reader.onload = function (e) {

                        const obj = {
                            name: file.name,
                            url: e.target.result,
                            type: 'file',
                            file
                        }
                        fileList.value.push(obj)
                    };

                    reader.readAsDataURL(file);
                }
                form.files = [...form.files, ...files]
            }

        }
        const fileRef = ref(null)
        const handleRemove = (item) => {
            const index = fileList.value.findIndex(file => item.url === file.url)
            fileList.value.splice(index, 1)
            for (let i = 0; i < form.files.length; i++) {
                const file = form.files[i]
                if (file.name === item.name) {
                    form.files.splice(i, 1)
                }
            }
            // nextTick(() => {

            // })
        }
        const voiceList = ref([])
        const handleGetVoice = async () => {
            const res = await getVoice()
            voiceList.value = res.data
            const soundFiles = res.data.map(item => item.en_url)
            initSoundPlayers(soundFiles)
        }

        onMounted(() => {
            handleGetVoice()
        })
 

        const showPreview = ref(false)
        const initIndex = ref(0)
       
        const currentIndex = ref('')
        const handleSubmit = async () => {
       
            const imgUrl = fileList.value.filter(item => item.type === 'url')
            const formData = new FormData()
            const files = fileList.value.filter(item => item.type === 'file')
            files.forEach(item => {
                formData.append('files', item.file)
            })
           
            imgUrl.forEach(item => {
                formData.append('images', item.url)
            })
            const imgIndex = [0,1,2,3]
            const fileIndex = [10,11,12,13]
            let image = 0
            
            if(currentImg.value.type === 'file') {
                const index = files.findIndex((item) => item.name === currentImg.value.name)
                image = fileIndex[index]
               
            }else {
                const index = imgUrl.findIndex(item => item.name === currentImg.value.name)
                image = imgIndex[index]
            }
            formData.append('name', form.name)
            formData.append('description', form.description)
            formData.append('voice', form.voiceId)
            formData.append('image', image)
            store.commit('TOOGLE_LOADING', true)
            try {
                const res = await putCharacter(detail.value.id, formData)
                if (res.code === '0') {
                    emit('close', true)
                }
                store.commit('TOOGLE_LOADING', false)
            }catch (err) {
                store.commit('TOOGLE_LOADING', false)
            }
           
        }
      
        const handleSelect = (item,index) => {
            // currentUrl.value = item.url
            currentIndex.value = index
            // imgType.value = item.type
            currentImg.value = item
        }
        const handleInput = (e) => {
            form.name = e.target.value
        }
        const closeViewer = () => {
            showPreview.value = false
        }
        const soundPlayers = []
        const initSoundPlayers = (soundUrls) => {
            soundUrls.forEach((url) => {
                const player = new Audio(url);
                soundPlayers.push({ url, player });
            });
        }
        const playIndex = ref(-1)

        // const voiceId = ref('')
        function playSound(index, uuid) {
            playIndex.value = index
            form.voiceId = uuid
            soundPlayers.forEach((sound, i) => {
                if (i === index) {
                    sound.player.play();
                } else {
                  
                    sound.player.pause();
                    sound.player.currentTime = 0; 
                }
            });
        }
        return {
            close,
            form,
            fileList,
            handleRemove,
            handleSubmit,
            handleSelect,
            currentUrl,
            handleInput,
            showErr,
            showPreview,
            handleChange,
            voiceList,
            playSound,
            playIndex,
            currentImg
        }
    }
}

</script>

<style lang="less" scoped>
/deep/.el-textarea__inner {
    background-color: transparent;
    color: #fff;
}

/deep/.el-textarea__inner:focus {
    box-shadow: 0 0 0 1px #9f38cc inset;
}

/deep/.el-upload--picture-card {
    border: 1px solid #9f38cc;
    background: transparent;
}

/deep/.el-image-viewer__close {
    top: 96px;
}
.overflow::-webkit-scrollbar {
  display: none;
}
</style>
