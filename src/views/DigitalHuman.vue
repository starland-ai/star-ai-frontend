<template>
  <div
    class="lg:bg-transparent bg-base-bg-alternate relative max-w-container pt-10 rounded-xl text-left lg: justify-between mx-auto sm:pt-4">
    <div class="flex justify-between sm:relative ">
      <div class="flex items-center cursor-pointer rounded-full sm:ml-5 sm:mt-16">
        <div @click="switchList(1)"
          class="text-xl bg-button rounded-full border-fuchsia-800 text-center rounded-tr-none rounded-br-none w-36 py-3 sm:w-20 sm:h-10 sm:text-base sm:py-0 sm:leading-10"
          :class="listtype == 1
              ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'
              : 'border-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full'
            ">
          ALL
        </div>
        <div @click="switchList(2)"
          class="text-xl bg-button rounded-full text-center  border-fuchsia-800 rounded-tl-none rounded-bl-none w-36 py-3 sm:w-20 sm:h-10 sm:text-base sm:py-0 sm:leading-10"
          :class="listtype == 2
              ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'
              : 'border-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full'
            ">
          MY
        </div>
      </div>
      <div class="relative sm:absolute sm:left-[5%] sm:top-0 sm:w-[90%] ">
        <input
          class="DocSearch-Input px-9 border-t bg-slate-900  border-border-separator-emphasized rounded-md w-full hover:ring-slate-300 dark:bg-slate-900 dark:highlight-white/5 dark:hover:bg-slate-700 mt-2 mb-2 md:w-auto text-xl sm:text-base"
          type="search" placeholder="Search Avatars" v-model="search" @keyup.enter="searchList" /><svg
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ADB1C2" viewBox="0 0 256 256"
          class="absolute top-1/2 -translate-y-1/2 left-3">
          <path
            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
          </path>
        </svg>
      </div>
    </div>
    <div class="mt-5  sm:mt-1">
      <div class="grid grid-cols-5 p-4 pb-40 gap-6 sm:grid-cols-2 sm:gap-2">
        <div class="relative rounded-[10px] border border-slate-700  h-80  sm:mt-1"
          v-for="(item, index) in list" :key="index">
          <div class="relative flex h-full">
            <div class="text-white flex flex-1 flex-col text-left relative w-full">
              <div class="relative rounded-[4px] overflow-hidden">
                <div class="w-full relative h-80 md:h-80 lg:h-80">
                  <div v-if="item.image_urls == null || item.image_urls.length === 1" class="h-full">
                    <img
                    @click="gochat(item.id)"
                      :src="`${item.image_url}`"
                      class="overflow-hidden h-full absolute inset-0 cursor-pointer object-cover object-center w-full bg-base-bg rounded-md"
                    />
                  </div>
                  <div v-else>
                    <el-carousel  :autoplay="false" arrow="always" indicator-position="none" :motion-blur="true" >
                       <el-carousel-item v-for="item1 in item.image_urls" :key="item1">
                       <img
                          @click="gochat(item.id)"
                          :src="item1"
                          class="overflow-hidden absolute inset-0 cursor-pointer object-cover object-center w-full bg-base-bg rounded-md h-full"
                        />
                    </el-carousel-item>
                     </el-carousel>
                  </div>
                  <UploadImageMint v-if="listtype == 2" :id="item.id" :item="item"/>
                  <div class="absolute hover:cursor-pointer  w-6 h-6 xl:w-10 xl:h-10  bottom-28 left-3 rounded-md blurred flex items-center justify-center z-20" style="background: linear-gradient(#00000052 0% 100%), #ffffff7a" @click="handleMorePic(item)">
                    <el-icon><FullScreen /></el-icon>
                  </div>
                </div>
              </div>
              <div style="background: linear-gradient( 180deg, rgba(127,127,127,0) 0%, rgba(0,0,0,1) 100%);"  @click="gochat(item.id)" class="w-full h-40 absolute left-0 bottom-0 z-[1]">

</div>
              <div class="flex-1 flex flex-col pt-3 pb-[18px] absolute w-full p-2 bottom-0 left-0 z-[1]" >
                <div class="relative cursor-pointer">
                  <div class="flex items-center justify-between font-inter leading-[18px] font-medium" @click="gochat(item.id)">
                    <h4 class="text-2xl truncate sm:text-sm">
                      {{ item.name }}
                    </h4>
                    <div class="flex items-center">
                      <span class="text-lg flex ml-4 mr-2 text-base items-center sm:text-sm" title="Supply: 1">
                        <svg t="1710500718187" class="icon mr-1" viewBox="0 0 1024 1024" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" p-id="4624" width="20" height="20">
                          <path
                            d="M388.5 411c0-21.4-17.6-39-39.2-39h-82.4c-21.6 0-39.2 17.5-39.2 39s17.6 39 39.2 39h82.4c21.6 0 39.2-17.5 39.2-39zM553.4 452c21.6 0 39.2-17.5 39.2-39 0-21.4-17.6-39-39.2-39H471c-21.6 0-39.2 17.5-39.2 39s17.6 39 39.2 39h82.4zM757.5 452c21.6 0 39.2-17.5 39.2-39 0-21.4-17.6-39-39.2-39h-82.4c-21.6 0-39.2 17.5-39.2 39s17.6 39 39.2 39h82.4z"
                            p-id="4625" fill="#ffffff"></path>
                          <path
                            d="M878.7 92.1h-733c-45 0-81.7 36.4-81.7 81.2v480c0 44.8 36.6 81.2 81.7 81.2h159.7c22.1 0 40.2-18 40.2-40s-18.1-40-40.2-40H145.7c-0.6 0-1.3-0.7-1.3-1.2v-480c0-0.6 0.7-1.2 1.3-1.2h733c0.6 0 1.3 0.7 1.3 1.2v480c0 0.6-0.7 1.2-1.3 1.2h-366v0.1c-11.1-0.6-22.3 3.2-30.7 11.6L284.5 862.6c-15.6 15.6-15.6 41 0 56.6 15.6 15.6 41.2 15.6 56.9 0L527 734.6h351.7c45 0 81.7-36.4 81.7-81.2v-480c0-44.8-36.7-81.3-81.7-81.3z"
                            p-id="4626" fill="#ffffff"></path>
                        </svg>
                        {{ item.chat_count }}</span>
                      <div class="hover:cursor-pointer">
                        <div class="flex items-center text-base mr-2">
                          <svg v-if="!item.is_like" t="1710500785320" class="icon mr-1" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5826" width="20" height="20">
                            <path
                              d="M878.278823 211.852756c-45.610876-45.156984-106.425244-67.924547-166.956004-67.924547-56.994558 0-113.705708 20.195907-157.103884 60.965665-18.248028 15.657384-31.485053 27.854315-42.263745 27.854315-11.497205 0-21.632933-11.478418-42.150422-27.854315-46.423925-40.996804-103.0971-61.192711-159.278609-61.192711-59.850022 0-119.113841 22.937848-164.762491 68.151593-91.826741 90.881382-91.826741 246.264433 0 337.145815l331.28359 320.240277c6.618513 6.599725 21.576371 11.0623 36.628566 11.0623 12.707584 0 25.452743-3.195833 33.281635-11.005538l331.340351-320.296839C970.049003 458.117189 970.049003 302.715151 878.278823 211.852756zM851.994044 521.78702 521.27767 841.478869c-1.115843 0.397131-3.668513 0.983333-7.620633 0.983333-5.351572 0-9.776571-1.115843-11.818787-1.872131L172.351042 522.108602c-36.647553-36.250422-57.656509-87.893608-57.656509-141.692333 0-53.779937 21.008956-105.423123 57.675296-141.692333 37.233756-36.893386 86.286098-57.202617 138.137343-57.202617 48.787722 0 96.4598 18.361551 134.241784 51.718735l0.718513 0.623977 0.7375 0.60519c4.538323 3.592964 8.528418 6.958882 12.140169 9.984431 15.940992 13.426097 31.012374 26.095707 53.590865 26.095707 23.99673 0 41.999125-15.506087 62.837796-33.470707l4.065643-3.517215 0.642964-0.548428 0.623977-0.567215c34.813197-32.695432 81.426193-50.716614 131.216235-50.716614 52.607532 0 103.759051 20.763123 140.330856 56.97577 36.628566 36.269409 57.618734 87.893608 57.618734 141.692333S888.282241 485.85818 851.994044 521.78702zM313.986613 235.14976c-22.408407-2.590644-68.019083 5.710728-101.6221 39.332732-27.135802 27.060253-43.681984 66.29825-44.268186 104.988218-0.151297 10.45731 8.188049 19.042289 18.626371 19.212574 0.094536 0 0.189072 0 0.302595 0 10.306013 0 18.739694-8.282584 18.909979-18.626371 0.434905-29.064694 12.839895-58.526319 33.168112-78.816762 24.60192-24.620707 58.734378-29.858756 70.496403-28.516266 10.306013 1.285928 19.760802-6.221382 20.971182-16.583956C331.780949 245.758368 324.349387 236.341153 313.986613 235.14976z"
                              fill="#ffffff" p-id="5827"></path>
                          </svg>
                          <svg v-else t="1710502866632" class="icon mr-1" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="6058" width="20" height="20">
                            <path
                              d="M533.504 268.288q33.792-41.984 71.68-75.776 32.768-27.648 74.24-50.176t86.528-19.456q63.488 5.12 105.984 30.208t67.584 63.488 34.304 87.04 6.144 99.84-17.92 97.792-36.864 87.04-48.64 74.752-53.248 61.952q-40.96 41.984-85.504 78.336t-84.992 62.464-73.728 41.472-51.712 15.36q-20.48 1.024-52.224-14.336t-69.632-41.472-79.872-61.952-82.944-75.776q-26.624-25.6-57.344-59.392t-57.856-74.24-46.592-87.552-21.504-100.352 11.264-99.84 39.936-83.456 65.536-61.952 88.064-35.328q24.576-5.12 49.152-1.536t48.128 12.288 45.056 22.016 40.96 27.648q45.056 33.792 86.016 80.896z"
                              p-id="6059" fill="#D43BA6"></path>
                          </svg>
                          <span class="text-lg sm:text-sm" title="Likes: 834">
                            {{ item.like_count }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
<div style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"  @click="gochat(item.id)" :title="item.prompt">{{ item.prompt }}</div>

                  <div  class="h4 text-sm flex  items-center justify-between truncate pt-3 text-[#cccccc] sm:text-xs">
                    <span @click="gochat(item.id)">By @{{ item.account_name }}</span>
                  <svg v-if="listtype == 2" t="1711356263488" class="icon" @click="deleteModal=true,characterId=item.id" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4312" width="20" height="20"><path d="M566 332H458c-69.5 0-126-57.7-126-128.6v-30.9C332 101.7 388.5 44 458 44h108c69.5 0 126 57.7 126 128.6v30.9c0 70.8-56.5 128.5-126 128.5z m54-159.4c0-31.2-24.2-56.6-54-56.6H458c-29.8 0-54 25.4-54 56.6v30.9c0 31.2 24.2 56.6 54 56.6h108c29.8 0 54-25.4 54-56.6v-30.9zM728 980H296c-59.6 0-108-48.4-108-108V224h648v648c0 59.6-48.4 108-108 108z m36-684H260v576c0 19.8 16.2 36 36 36h432c19.8 0 36-16.2 36-36V296zM620 836V404h72v432h-72z m-144 0V404h72v432h-72z m-144 0V404h72v432h-72z m504-504H116v-72h36v-36c0-19.8 16.2-36 36-36h648c19.8 0 36 16.2 36 36v36h36v72h-72z" fill="#ffffff" p-id="4313"></path></svg>

                  </div>
                </div>
                <div class="absolute bottom-0 separator opacity-30 h-[1px] w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal width="w-2/4" height="h-[60%] sm:h-2/5" v-if="nologin" @close="nologin = false">
      <div class="w-full h-full">
        <div class="w-3/5 text-center mx-auto text-2xl mb-5 font-bold">
          Please log in first
        </div>
        <div class="mb-10 flex justify-center">
          <img src="@/assets/images/nologin.png" class="w-2/5 h-auto mt-4 mb-10 lg:mb-4" />
        </div>
        <!-- <div class="text-center">
          <WalletButton @click="onClickForReactUserInfo" />
        </div> -->
        <!-- <div class="w-2/5 h-14 bg-gradient-to-r from-left-gradient to-right-gradient shadow-custom  flex items-center justify-center mx-auto rounded-56 mt-[65px] cursor-pointer" @click="close">OK</div> -->
      </div>
    </Modal>
    <Modal   
    width="w-1/3"
      height="h-[25%] sm:h-2/5"
      v-if="deleteModal"
      @close="deleteModal = false"
     >
     <div class="w-full h-full text-center">
        <div class="w-3/5 text-center text-base mx-auto text-2xl mb-5 font-bold">
          Are you sure you want to delete this character? 
        </div>
        <button
                class="text-lg bg-button mt-5 rounded-full m-auto  text-center rounded-lg w-32 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
                @click="deleteCharacter(characterId)" 
              >
              CONFIRM
              </button>
              </div>
    </Modal>
    <div v-if="showMorePic">
      <MorePic @close="showMorePic = false" :imgUrls="imgUrls"/>
    </div>

  </div>
</template>
<script>
import { ethers } from "ethers";
import { onUnmounted, onMounted, ref } from "vue";
import Web3Modal from "web3modal";
import { useStore } from "vuex";
import { allcharacter, mycharacter,deleteVirtualHuman } from "@/api/url.js";
import { applyReactInVue, applyPureReactInVue } from "veaury";
import { useRouter } from "vue-router";
import Test from "@/react_app/test.tsx";
import Modal from "@/components/Modal.vue";
import BasicReactComponent from "../react_app/App.tsx";
import { identityModule } from "@metaplex-foundation/js";
import MorePic from '@/components/MorePic.vue'

export default {
  components: {
    UploadImageMint: applyPureReactInVue(Test),
    WalletButton: applyPureReactInVue(BasicReactComponent),
    Modal,
    MorePic,
  },
  setup() {
    const router = useRouter();
    const list = ref([]);
    const status = ref(false);
    const store = useStore();
    const listtype = ref(1);
    const page = ref(1);
    const search = ref("");
    const characterId = ref("");
    const limit = ref(15);
    const nologin = ref(false);
    const deleteModal = ref(false);
    const token = ref(localStorage.getItem("token"));
    const antishake = ref(true);
    const clientHeight = document.documentElement.clientHeight; 
    const distance = 50; 
    const fun = () => {
      const scrollHeight = document.body.scrollHeight; 
      const scrollTop = document.documentElement.scrollTop; 
      if (scrollTop + clientHeight >= scrollHeight - distance) {
        if (antishake.value) {
          return;
        }
        antishake.value = true;
        page.value++;
        if (listtype.value == 1) {
          characterlist({
            page: page.value,
            limit: limit.value,
          });
        } else {
          mycharacterlist({
            page: page.value,
            limit: limit.value,
          });
        }
      }
    };
    window.addEventListener("scroll", fun);
    onUnmounted(() => {
      window.removeEventListener("scroll", fun);
    });
    const onClickForReactUserInfo = async (val) => {
      // store.commit('TOOGLE_LOADING', true)
      if (store.getters.userInfo === null) {
        try {
          const address = localStorage.getItem('address')
          const res = await getUserInfo(address)
          if (res.code == '0') {
            store.commit('SET_USERINFO', res.data)
            points.value = res.data.integral
          }
        } catch {

        } finally {
          // store.commit('TOOGLE_LOADING', false)
        }


      }
    }
    async function deleteCharacter(id) {
      const res = await deleteVirtualHuman(id);
      list.value = [];
      page.value = 1;
      deleteModal.value=false
    store.commit("TOOGLE_LOADING", true);

      mycharacterlist({
          page: page.value,
          limit: limit.value,
        });
    }
    async function searchList() {
      if (antishake.value) {
        return;
      }
      antishake.value = true;
      list.value = [];
      page.value = 1;
    store.commit("TOOGLE_LOADING", true);
      if (listtype.value == 1) {
        characterlist({
          page: page.value,
          limit: limit.value,
        });
      } else {
        mycharacterlist({
          page: page.value,
          limit: limit.value,
        });
      }
    }
    async function characterlist(data) {
      const res = await allcharacter({ page: data.page, limit: data.limit, search: search.value });
      antishake.value = false;
    store.commit("TOOGLE_LOADING", false);
      list.value.push(...res.data.data);
    }
    async function mycharacterlist(data) {
      const res = await mycharacter({
        page: page.value,
        limit: limit.value,
        search: search.value
      });
    store.commit("TOOGLE_LOADING", false);
      antishake.value = false;
      list.value.push(...res.data.data);
    }
    function gochat(id) {
      router.push({ path: '/digitalhumanchat', query: { id: id, type: listtype.value} });
    }
    function switchList(i) {
      if (!token.value) {
        nologin.value = true
        return
      }
      if (antishake.value) {
        return
      }
      if (listtype.value == i) {
        return
      }
      list.value = [];
      page.value = 1;
      listtype.value = i;
    store.commit("TOOGLE_LOADING", true);
      if (i == 1) {
        characterlist({
          page: page.value,
          limit: limit.value,
        });
      antishake.value=true

      } else {
        mycharacterlist({
          page: page.value,
          limit: limit.value,
        });
      antishake.value=true
      }
    }
    onMounted(() => {
      const intervalID = setInterval(() => {
        if (localStorage.getItem('token')) {
          token.value = localStorage.getItem('token')
          nologin.value = false
          clearInterval(intervalID)
        }
      }, 1000)
      page.value = 1
      characterlist({
        page: page.value,
        limit: limit.value,
      });

    });
    const showMorePic = ref(false)
    const imgUrls = ref([])
    const handleMorePic = (item) => {
      showMorePic.value = true
      if(item.image_urls === null) {
        imgUrls.value = [item.image_url]
      }else {
        imgUrls.value  = item.image_urls
      }

    }

    return {
      list,
      listtype,
      page,
      switchList,
      search,
      limit,
      searchList,
      antishake,
      gochat,
      nologin,
      onClickForReactUserInfo,
      showMorePic,
      handleMorePic,
      imgUrls,
      characterId,
      deleteModal,
      deleteCharacter
    };
  },
};
</script>

<style scoped>
/deep/.el-carousel__arrow {
  background: linear-gradient(#00000052 0% 100%), #ffffff7a;
  border-radius: 8px;
  width: 2rem;
  height: 2rem;
}

@media (min-width: 768px){
  /deep/.el-carousel__arrow {
    top: 26%;
    width: 1.5rem;
    height: 1.5rem;
  }
}
@media (min-width: 1024px){
  /deep/.el-carousel__arrow {
    top: 36%;
    width: 2rem;
    height: 2rem;
  }
}
@media (min-width: 1280px){
  /deep/.el-carousel__arrow {
    top: 40%;
  }
}
@media (min-width: 1536px){
  /deep/.el-carousel__arrow {
    top: 42%;
  }
}
@media (max-width: 500px){
  /deep/.el-carousel__arrow {
    top: 26%;
    width: 1.5rem;
    height: 1.5rem;
  }
}
/deep/.el-carousel__container{
  height: 20rem;
}
</style>