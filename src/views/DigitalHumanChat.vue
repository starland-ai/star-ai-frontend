<template>
  <div
    class=" lg:bg-transparent mt-5 bg-base-bg-alternate relative mx-w-[1375px] rounded-xl text-left lg: justify-between lg:pt-6 my-auto mx-auto sm:px-10 sm:px-0">
    <div class="max-w-[80%] h-[80vh] m-auto flex sm:w-[90%] sm:max-w-[90%] sm:block sm:h-[78vh]">
      <div
        class=" pr-2 bg-[#1E223B] h-full rounded-xl rounded-tr-none overflow-scroll overflow rounded-br-none sm:w-full sm:flex sm:h-24 sm:rounded-tl-3xl sm:rounded-tr-3xl sm:rounded-br-none sm:rounded-bl-none sm:bg-[#1E223B] sm:overflow-hidden">
        <div
          class="border-b cursor-pointer border-stone-400 w-[80%] mx-auto px-4 py-4 sm:w-24 sm:border-none sm:relative sm:w-[25%] sm:px-0 sm:py-0 sm:left-0 sm:mx-0">
          <svg t="1710925230869" @click="this.$router.back()" class="icon absolute left-1 top-7 hidden sm:block"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4522" width="30" height="30">
            <path
              d="M631.04 161.941333a42.666667 42.666667 0 0 1 63.061333 57.386667l-2.474666 2.730667-289.962667 292.245333 289.706667 287.402667a42.666667 42.666667 0 0 1 2.730666 57.6l-2.474666 2.752a42.666667 42.666667 0 0 1-57.6 2.709333l-2.752-2.474667-320-317.44a42.666667 42.666667 0 0 1-2.709334-57.6l2.474667-2.752 320-322.56z"
              fill="#ffffff" p-id="4523"></path>
          </svg>
          <img class="w-16 sm:w-10 sm:ml-10 sm:mt-6" src="@/assets/images/addbutton.png" @click="gohomecreate" />
        </div>
        <div class="mt-4 overflow-scroll overflow sm:flex sm:items-center sm:mt-0">
          <div v-for="(item, index) in history" :key="index"
            class="w-[100%] text-center px-4 py-4 cursor-pointer sm:px-2 sm:py-2"
            @click="switchcharacters(item.character_id)">
            <div class="w-16 rounded-full h-16 overflow-hidden m-auto sm:w-12 sm:h-12">
              <img class="w-16 rounded-full mx-auto sm:w-12" :src="item.image_url" />
            </div>

            <div class="text-sm mt-2 sm:mt-0 sm:text-xs" style="text-wrap: nowrap">
              {{ clickDateDiff(item.latest_time) }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-8/12 h-full justify-between sm:w-full sm:rounded-3xl">
        <div
          class="w-full relative shadow-xl text-xl rounded-xl rounded-tl-none rounded-bl-none bg-slate-900 sm:rounded-tl-none sm:rounded-tr-none sm:rounded-br-3xl sm:rounded-bl-3xl">
          <div class="p-5 h-[92%] overflow-scroll overflow sm:p-2" ref="scrollDiv">
            <div v-for="(item, index) in dialoglist" :key="index" class="text-center">
              <div class="flex text-left items-end mt-5" :class="item.is_machine ? '' : 'justify-end'">
                <div class="w-12 rounded-full h-12 overflow-hidden sm:w-10 sm:h-10">
                  <img v-if="item.is_machine" :src="`${detail.image_url}`" class="w-12 rounded-full sm:w-10" />
                </div>
                <div v-if="item.type == 'text'" class="p-5 max-w-xl rounded-3xl mr-3 ml-3 sm:w-[70%]" :class="item.is_machine
              ? 'bg-[#5A4FE0] rounded-bl-none'
              : 'bg-[#9246C5] rounded-br-none'
            ">
                  {{ item.chat_message }}
                </div>
                <div v-if="item.type == 'audio'"
                  class="p-5 max-w-xl  rounded-3xl mr-3 ml-3 pb-10 sm:w-[70%] relative bg-[#5A4FE0] rounded-bl-none">
                  <span>{{ item.chat_message }}</span>
                  <div class="px-3 py-1 rounded-md mr-3 mt-4 cursor-pointer absolute right-0 bottom-2"
                    @click="playvoice(item.voice)">
                    <svg t="1711695047348" class="icon ml-1" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="4615" width="30" height="30">
                      <path
                        d="M734.4 188.8c-11.2-8-25.6-6.4-33.6 4.8s-6.4 25.6 4.8 33.6c86.4 65.6 134.4 166.4 134.4 273.6 0 108.8-49.6 208-136 273.6-11.2 8-12.8 22.4-4.8 33.6 4.8 6.4 19.2 9.6 19.2 9.6s9.6-1.6 14.4-4.8c97.6-75.2 155.2-188.8 155.2-312 0-123.2-56-236.8-153.6-312z"
                        fill="#ffffff" p-id="4616"></path>
                      <path
                        d="M646.4 336c-11.2-8-25.6-6.4-33.6 4.8s-6.4 25.6 4.8 33.6c40 30.4 62.4 76.8 62.4 126.4 0 49.6-22.4 97.6-64 128-11.2 8-12.8 22.4-4.8 33.6 4.8 6.4 11.2 9.6 19.2 9.6 4.8 0 9.6-1.6 14.4-4.8 52.8-40 81.6-100.8 81.6-166.4 1.6-65.6-28.8-124.8-80-164.8zM472 188.8c-89.6 12.8-168 72-214.4 156.8H224c-48 0-88 40-88 88v104c0 12.8 11.2 24 24 24s24-11.2 24-24v-104c0-22.4 17.6-40 40-40h64l6.4-12.8c38.4-78.4 107.2-132.8 184-144 3.2 0 4.8 1.6 6.4 1.6 1.6 1.6 3.2 3.2 3.2 6.4V784c0 3.2-1.6 4.8-3.2 6.4-1.6 1.6-3.2 3.2-6.4 1.6-83.2-12.8-155.2-72-190.4-158.4l-6.4-14.4H224c-12.8 0-24 11.2-24 24s11.2 24 24 24h25.6c44.8 94.4 126.4 158.4 220.8 172.8h8c12.8 0 27.2-4.8 36.8-14.4 12.8-11.2 19.2-25.6 19.2-43.2V244.8c0-16-6.4-32-19.2-43.2-11.2-9.6-27.2-14.4-43.2-12.8z"
                        fill="#ffffff" p-id="4617"></path>
                    </svg>
                  </div>
                </div>
                <div v-if="sendstatus && item.is_machine && item.type == 'pedding'"
                  style="white-space: pre; text-wrap: wrap"
                  class="p-5 max-w-xl rounded-3xl bg-[#5A4FE0] rounded-bl-none relative text-xl mr-3 ml-3 sm:ml-2 sm:p-3 sm:text-sm">
                  {{ temporaryText }}
                  <svg t="1711596941061" class="icon rotate absolute right-[-2rem] top-3" viewBox="0 0 1024 1024"
                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2536" width="25" height="25">
                    <path
                      d="M144.205 202.496a136.678 136.678 0 1 0 273.357 0 136.678 136.678 0 1 0-273.357 0zM41.728 492.902a119.578 119.578 0 1 0 239.155 0 119.578 119.578 0 1 0-239.155 0zM144.23 749.158a102.502 102.502 0 1 0 205.005 0 102.502 102.502 0 1 0-205.005 0zM435.2 861.926a89.6 89.6 0 1 0 179.2 0 89.6 89.6 0 1 0-179.2 0z m289.843-95.666a85.427 85.427 0 1 0 170.855 0 85.427 85.427 0 1 0-170.855 0z m136.704-290.433a68.326 68.326 0 1 0 136.653 0 68.326 68.326 0 1 0-136.653 0zM759.22 219.571a51.251 51.251 0 1 0 102.502 0 51.251 51.251 0 1 0-102.503 0zM512 85.376a34.176 34.176 0 1 0 68.352 0 34.176 34.176 0 1 0-68.352 0z"
                      p-id="2537" fill="#ffffff"></path>
                  </svg>
                </div>
      
                <div v-if="item.type == 'hover'"
                  class="bg-[#5A4FE0] p-5 max-w-xl rounded-3xl rounded-bl-none ml-3 flex flex-wrap sm:text-sm">
                  <div>I have a variety of styles available,</div>
                  <div class="relative" v-for="(item, index) in imagemodellist" :key="index">
                    <div class="underline modelname">{{ item.nameEN }},</div>
                    <div class="modelimage">
                      <img :src="item.URL" class="rounded-xl rounded-bl-none absolute left-1/2 bottom-6 w-14" />
                    </div>
                  </div>
                  <span> Which one do you prefer? </span>
                </div>

                <div v-if="item.type == 'images'"
                  class="bg-[#5A4FE0] p-5 max-w-xl rounded-3xl rounded-bl-none ml-3 flex justify-between">
                  <img v-for="(item, index) in item.image_meta" :key="index" class="w-[24%] h-auto rounded-md"
                    :src="item" @click="startgenerating(item)" />
                </div>
                <img v-if="!item.is_machine" src="@/assets/images/user.png"
                  class="w-12 h-12 rounded-full sm:w-10 sm:h-10" />
              </div>

              <button v-if="item.confirm_type == 'character_setting' && !clicked"
                class="text-xl bg-button mt-5 rounded-full m-auto text-center rounded-lg w-36 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... sm:text-base"
                @click="confirm">
                CONFIRM
              </button>
            </div>
          </div>
          <div class="absolute left-0 bottom-0 w-full overflow h-14 sm:rounded-3xl">
            <textarea @keyup.enter="sending"
              class="bg-slate-900 w-full h-full text-xl border-l-0 border-r-0 border-b-0 border-t-slate-600 overflow resize-none rounded-md sm:rounded-br-3xl sm:rounded-bl-3xl sm:text-base"
              v-model="dialogbox" placeholder="Send a message..."></textarea>
            <button
              class="h-10 border pr-10 bg-slate-900 pl-10 rounded-full border-fuchsia-900 text-lg bg-[url('@/assets/images/border-jb.png')] bg-[length:100%_100%] leading-10 absolute right-6 bottom-2 sm:text-base hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              @click="sending">
              SEND
            </button>
          </div>
        </div>
      </div>
      <div class="w-[21%] ml-10 sm:hidden">
        <div class="relative max-h-[45vh]">
          <div class="relative flex h-full bg-[#16192E] rounded-[10px]   border-slate-600 p-4 ">
            <div class="text-white flex flex-1 flex-col text-left relative w-full">
              <div class="relative rounded-[4px] overflow-hidden">
                <div class="w-full relative   h-80 md:h-80 lg:h-80">

                  <div v-if="detail.is_3d" ref="threeCanvas"
                    class="overflow-hidden absolute inset-0 object-contain object-center w-full max-h-[31rem] bg-base-bg rounded-md h-60">
                  </div>

                  <div v-else>
                    <div v-if="detail.image_urls == null || detail.image_urls.length === 1" class="h-full">
                      <img :src="`${detail.image_url}`"
                        class="overflow-hidden h-full absolute inset-0 cursor-pointer object-cover object-center w-full bg-base-bg rounded-md" />
                    </div>
                    <div v-else>
                      <el-carousel :autoplay="false" arrow="always" indicator-position="none" :motion-blur="true">
                        <el-carousel-item v-for="item1 in detail.image_urls" :key="item1">
                          <img :src="item1"
                            class="overflow-hidden absolute inset-0 cursor-pointer object-cover object-center w-full bg-base-bg rounded-md h-full" />
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                    <div class="absolute hover:cursor-pointer  w-6 h-6 xl:w-10 xl:h-10  bottom-24 left-3 rounded-md blurred flex items-center justify-center z-20" style="background: linear-gradient(#00000052 0% 100%), #ffffff7a" @click="handleMorePic(detail)">
                    <el-icon><FullScreen /></el-icon>
                    </div>
                  </div>

                </div>

                <div class="absolute right-2 top-2 w-5 h-5 cursor-pointer" @click="handleEdit" v-if="type == 2">
                  <img src="@/assets/images/camera.png" class="w-full h-full" />
                </div>
              </div>
              <div style="background: linear-gradient( 180deg, rgba(127,127,127,0) 0%, rgba(0,0,0,1) 100%);"  @click="gochat(item.id)" class="w-full h-40 absolute left-0 bottom-0 z-[1]"></div>
              <div class="flex-1 flex flex-col pt-3 pb-[18px] absolute w-full p-2 bottom-0 left-0 z-[1]">
                <!-- bg-gradient-to-b from-[#17192100] to-[#E11B63]  -->
                <div class="rounded-br-[4px] rounded-bl-[4px] absolute inset-0 opacity-40"></div>
                <div class="relative">
                  <div class="flex items-center justify-between font-inter leading-[18px] font-medium">
                    <h4 class="text-xl truncate">
                      {{ detail.name }}
                    </h4>
                    <div class="flex items-center">
                      <span class="flex ml-4 mr-2 text-sm items-center" title="Supply: 1">
                        <svg t="1710500718187" class="icon mr-1" viewBox="0 0 1024 1024" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" p-id="4624" width="20" height="20">
                          <path
                            d="M388.5 411c0-21.4-17.6-39-39.2-39h-82.4c-21.6 0-39.2 17.5-39.2 39s17.6 39 39.2 39h82.4c21.6 0 39.2-17.5 39.2-39zM553.4 452c21.6 0 39.2-17.5 39.2-39 0-21.4-17.6-39-39.2-39H471c-21.6 0-39.2 17.5-39.2 39s17.6 39 39.2 39h82.4zM757.5 452c21.6 0 39.2-17.5 39.2-39 0-21.4-17.6-39-39.2-39h-82.4c-21.6 0-39.2 17.5-39.2 39s17.6 39 39.2 39h82.4z"
                            p-id="4625" fill="#ffffff"></path>
                          <path
                            d="M878.7 92.1h-733c-45 0-81.7 36.4-81.7 81.2v480c0 44.8 36.6 81.2 81.7 81.2h159.7c22.1 0 40.2-18 40.2-40s-18.1-40-40.2-40H145.7c-0.6 0-1.3-0.7-1.3-1.2v-480c0-0.6 0.7-1.2 1.3-1.2h733c0.6 0 1.3 0.7 1.3 1.2v480c0 0.6-0.7 1.2-1.3 1.2h-366v0.1c-11.1-0.6-22.3 3.2-30.7 11.6L284.5 862.6c-15.6 15.6-15.6 41 0 56.6 15.6 15.6 41.2 15.6 56.9 0L527 734.6h351.7c45 0 81.7-36.4 81.7-81.2v-480c0-44.8-36.7-81.3-81.7-81.3z"
                            p-id="4626" fill="#ffffff"></path>
                        </svg>
                        {{ detail.chat_count }}
                      </span>
                      <div class="hover:cursor-pointer" @click="getLike">
                        <div class="flex items-center text-xs mr-2">
                          <svg v-if="!detail.is_like" t="1710500785320" class="icon mr-1" viewBox="0 0 1024 1024"
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
                          <span class="text-sm" title="Likes: 834">
                            {{ detail.like_count }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h4 text-sm truncate mt-2">
                    By @{{ detail.account_name }}
                  </div>
                </div>
                <!-- <div
                  class="absolute bottom-0 separator opacity-30 h-[1px] w-full"
                ></div> -->
              </div>
            </div>
          </div>
          <div class="mt-4 mb-2 text-xl">Description</div>
          <div
            class="relative rounded-[10px] text-lg border h-[16vh] overflow-scroll overflow border-slate-600 bg-[#16192E]">
            <div class="absolute w-full h-full left-0 p-4 pt-2 text-sm bottom-0 overflow-scroll overflow">
              {{ detail.prompt }}
            </div>
            <div class="absolute w-full h-3 left-0 bottom-0 bg-[#16192E]"></div>
          </div>
          <div class="mt-4 mb-2 text-xl rounded-[10px]">NFT Information</div>
          <div
            class="text-sm rounded-[10px] border overflow-scroll p-4 w-full overflow h-[10vh] border-slate-600 bg-[#16192E]">
            <a class="inline-block w-40 underline text-wrap" v-if="detail.mint" :href="detail.mint">{{ detail.mint
              }}</a>
            <div v-else>None</div>
          </div>
        </div>
        <component width="w-2/4" height="h-[60%] sm:h-2/5" v-if="nologin" :is="modalComp" @close="nologin = false">
          <div class="w-full h-full">
            <div class="w-3/5 text-center mx-auto text-2xl mb-5 font-bold">
              Please log in first
            </div>
            <div class="mb-10 flex justify-center">
              <img src="@/assets/images/nologin.png" class="w-2/5 h-auto mt-4 mb-10 lg:mb-4" />
            </div>
            <!-- <div class="text-center">
              <component
                :is="WalletComp"
                @click="onClickForReactUserInfo"
              ></component>
            </div> -->
            <!-- <div class="w-2/5 h-14 bg-gradient-to-r from-left-gradient to-right-gradient shadow-custom  flex items-center justify-center mx-auto rounded-56 mt-[65px] cursor-pointer" @click="close">OK</div> -->
          </div>
        </component>
        <div v-if="editVisible">
          <EditInfo @close="handleCloseEdit" :detail="detail" />
        </div>
      </div>
    </div>
    <audio ref="audio" controls hidden="true" :src="voicePath" />
    <div v-if="showMorePic">
      <MorePic @close="showMorePic = false" :imgUrls="imgUrls"/>
    </div>
  </div>
</template>

<script setup>
import EditInfo from "@/components/EditInfo.vue";
import { shallowRef, ref, nextTick, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import BasicReactComponent from "../react_app/App.tsx";
import { useStore } from "vuex";
import { applyReactInVue, applyPureReactInVue } from "veaury";
import Modal from "@/components/Modal.vue";
import MorePic from '@/components/MorePic.vue'
import {
  characterhistory,
  characterdetails,
  characterchat,
  characterlike,
} from "@/api/url.js";
import { bus } from "@/utils/bus.js";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { fetchEventSource } from '@microsoft/fetch-event-source';
const route = useRoute();
const router = useRouter();
const store = useStore();
const modalComp = shallowRef(Modal);
const WalletComp = shallowRef(applyPureReactInVue(BasicReactComponent));
const nologin = ref(false);
const items = ref([]);
const digid = ref("");
const temporaryText = ref("");
const audio = ref(new Audio())
const voicePath = ref('')
const sendstatus = ref(false);
const token = ref(localStorage.getItem("token"));
const scrollDiv = ref(null);
const dialoglist = ref([]);
const detail = ref("");
const dialogbox = ref("");
const history = ref("");
const likestate = ref(false);
function playvoice(url) {
  voicePath.value = new URL(url, import.meta.url).href

  nextTick(() => {
    audio.value.currentTime = 0
    audio.value?.play()
  })
}
function gohomecreate() {
  router.push({ path: "/home", query: { create: true } });
}
async function getcharacterhistory(url) {
  try {
    const res = await characterhistory({});
    history.value = res.data.data;
  } catch (err) {
  }
}
const onClickForReactUserInfo = async (val) => {
  // store.commit('TOOGLE_LOADING', true)
  if (store.getters.userInfo === null) {
    try {
      const address = localStorage.getItem("address");
      const res = await getUserInfo(address);
      if (res.code == "0") {
        store.commit("SET_USERINFO", res.data);
        points.value = res.data.integral;
      }
    } catch {
    } finally {
      // store.commit('TOOGLE_LOADING', false)
    }
  }
};
async function getcharacterdetails() {
  const res = await characterdetails({
    id: digid.value,
  });
  detail.value = res.data
  // const timeStamp = new Date().getTime()
  // const imageUrl = detail.value.image_url
  // detail.value.image_url =`${imageUrl}?t=${timeStamp}`
  if (detail.value.is_3d) {
    nextTick(() => {
      create3D(detail.value.obj_url);
    })

  }
}
function clickDateDiff(value) {
  const dataValue = value;
  // if (typeof value == "string") {
  //   dataValue = new Date(value.replace(/-/g, "/")).getTime();
  // }
  let result;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const now = new Date().getTime();
  const diffValue = parseInt(now) - new Date(dataValue).getTime();
  if (diffValue < 0) {
    return;
  }
  const date = dataValue.substring(0, 10);
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;
  if (monthC >= 1) {
    result = date;
  } else if (weekC >= 1) {
    result = date;
  } else if (dayC >= 1) {
    if(parseInt(dayC)==1){
      result = "" + parseInt(dayC) + " day ago";
    }else{
      result = "" + parseInt(dayC) + " days ago";
    }
    
  } else if (hourC >= 1) {
    if(hourC==1){
      result = "" + parseInt(hourC) + " hour ago";
    }else{
    result = "" + parseInt(hourC) + " hours ago";
    }
  } else if (minC >= 1) {
    if(minC==1){
      result = "" + parseInt(minC) + " minute ago";
    }else{
    result = "" + parseInt(minC) + " minutes ago";
    }
  } else {
    result = "just";
  }
  return result;
}
async function sending() {
  if (dialogbox.value == "") {
    return;
  }
  if (sendstatus.value) {
    return;
  }
  if (detail.value.name == undefined) {
    return;
  }
  sendstatus.value = true;
  const text = dialogbox.value;
  dialogbox.value = "";
  temporaryText.value = detail.value.name + " is typing...";

  dialoglist.value.push(
    ...[
      {
        chat_message: text,
        image_meta: "",
        need_confirm: "",
        confirm_type: false,
        is_machine: false,
        type: "text",
      },
      {
        chat_message: "",
        image_meta: "",
        need_confirm: "",
        confirm_type: false,
        is_machine: true,
        type: "pedding",
      },
    ]
  );
  scrollBottom();
  bus.emit("getUserInfo");
  fetchEventSource(`https://starland.ai/api/v1/character/${digid.value}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.value}`,
    },
    body: JSON.stringify({
      message: text,
    }),
    onmessage(msg) {
      if (msg.data.indexOf("{\"code") !== -1) {
        const storagedata = JSON.parse(msg.data)
        const machinearr = [];
        temporaryText.value = "";
        sendstatus.value = false;
        dialoglist.value.pop();
        if (storagedata.data.voice) {
          machinearr.push({
            chat_message: storagedata.data.chat_message,
            image_meta: storagedata.data.image_meta,
            need_confirm: storagedata.data.need_confirm,
            confirm_type: storagedata.data.confirm_type,
            session_id: storagedata.data.session_id,
            is_3d: storagedata.data.is_3d,
            voice: storagedata.data.voice,
            is_machine: true,
            type: "audio",
          });
        } else {

          machinearr.push({
            chat_message: storagedata.data.chat_message,
            image_meta: storagedata.data.image_meta,
            need_confirm: storagedata.data.need_confirm,
            confirm_type: storagedata.data.confirm_type,
            session_id: storagedata.data.session_id,
            is_3d: storagedata.data.is_3d,
            is_machine: true,
            type: "text",
          });
        }
        dialoglist.value.push(...machinearr);

        scrollBottom();
      } else {
        if (temporaryText.value == detail.value.name + " is typing...") {
          temporaryText.value = "";
        }
        temporaryText.value += msg.data
        scrollBottom()
      }
    },
    onerror(err) {

  
      // errCallback(err)
      throw err
    }
  })

}
function scrollBottom() {
  nextTick(() => {
    const scrollElem = scrollDiv.value;
    scrollElem.scrollTo({ top: scrollElem.scrollHeight, behavior: "smooth" });
  });
}
function switchcharacters(id) {
  digid.value = id;
  dialoglist.value = [];
  getcharacterdetails();
}
async function getLike() {
  if (likestate.value) {
    return;
  }
  likestate.value = true;
  const res = await characterlike(
    {
      id: digid.value,
    },
    { flag: !detail.value.is_like }
  );
  getcharacterdetails();
  if (!detail.value.is_like) {
    bus.emit("getUserInfo");
  }
  likestate.value = false;
}
function dataprocessing(data) {
  try {
    const index = data.lastIndexOf("#");
    const data1 = data.substring(0, index);
    const index1 = data1.lastIndexOf("#");
    const dataJson = JSON.parse(data1.substring(index1 + 1, data1.length));
    return dataJson;
  } catch { }

}

// 3D
const pocObjs = ["Psyduck", "Henry", "Lady Sudaji", "Ganyu"];
// const pocFiles = [
//   "src/assets/3d/poc_cat.obj",
//   "src/assets/3d/poc_man.obj",
//   "src/assets/3d/poc_girl.obj",
//   "src/assets/3d/poc_dog.obj",
// ];
const threeCanvas = ref(null);
const create3D = (url) => {
  store.commit("TOOGLE_LOADING", true);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(
    threeCanvas.value && threeCanvas.value.offsetWidth,
    threeCanvas.value && threeCanvas.value.offsetHeight
  );
  if (threeCanvas.value === null) {
  } else {
  }
  threeCanvas.value?.appendChild(renderer.domElement);

  const pmremGenerator = new THREE.PMREMGenerator(renderer);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x16192e);
  scene.environment = pmremGenerator.fromScene(
    new RoomEnvironment(renderer),
    0.04
  ).texture;
  const ambientLight = new THREE.AmbientLight(0xffffff, 2);

  const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    100
  );
  camera.position.set(5, 2, 8);
  const pointLight = new THREE.PointLight(0xffffff, 15);
  camera.add(pointLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.5, 0);
  controls.update();
  controls.enablePan = true;
  controls.enableDamping = true;

  // Handle window reseize event
  window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(
      threeCanvas.value && threeCanvas.value.offsetWidth,
      threeCanvas.value && threeCanvas.value.offsetHeight
    );
  };

  const loader = new OBJLoader();

  loader.load(
    url,
    function (obj) {
      obj.scale.setScalar(5);
      scene.add(obj);
      obj.traverse((node) => {
        if (node.material && node.material.map == null) {
          node.material.vertexColors = true;
        }
      });
      store.commit("TOOGLE_LOADING", false);
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        obj.rotation.y += 0.02;
        renderer.render(scene, camera);
      };
      animate();
    },
    undefined,
    (error) => {
      store.commit("TOOGLE_LOADING", false);
    }
  );

  scene.add(ambientLight);
  scene.add(camera);

  // const animate = () => {
  //   controls.update();

  //   renderer.render(scene, camera);
  //   requestAnimationFrame(animate);
  // };
  // animate();
};
const type = route.query.type;
onMounted(() => {
  digid.value = route.query.id;
  if (!localStorage.getItem("walletName")) {
    nologin.value = true;
  }
  const intervalID = setInterval(() => {
    if (localStorage.getItem("token")) {
      token.value = localStorage.getItem("token");
      nologin.value = false;
      getcharacterdetails();
      getcharacterhistory();
      clearInterval(intervalID);
    }
  }, 1000);
});
const editVisible = ref(false);
function handleEdit() {
  editVisible.value = true;
}
function handleCloseEdit(refresh = false) {
  editVisible.value = false;
  if (refresh) {
    getcharacterdetails();
  }
}
const showMorePic = ref(false)
const imgUrls = ref(null)
const handleMorePic = (item) => {
      showMorePic.value = true
      if(item.image_urls === null) {
        imgUrls.value = [item.image_url]
      }else {
        imgUrls.value  = item.image_urls
      }
    }
</script>
<style lang="less" scoped>
.modelimage {
  display: none;
}

.modelname:hover+.modelimage {
  display: block;
}

.el-message--success {
  background: #16192e !important;
  border: none;
  top: 80px !important;
}

.el-message--error {
  background: #16192e !important;
  color: white !important;
  border: none;
  top: 80px !important;
}

.el-message-box {
  background: #16192e !important;
  border: none;
  top: 80px !important;
}

.el-message-box__title,
.el-message-box__message,
.el-message-box__close {
  color: white !important;
}

.el-button--primary {}

.el-button {
  background: none !important;
  border: none !important;
}

.el-button:hover {
  background: none;
  border: none;
  color: #9f38cc;
}

.el-button--primary:hover {
  color: #f825b9 !important;
}

.rotate {
  animation: spin 2s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.overflow::-webkit-scrollbar {
  display: none;
}

/deep/.el-carousel__arrow {
  background: linear-gradient(#00000052 0% 100%), #ffffff7a !important;
  border-radius: 8px !important;
  width: 2rem !important;
  height: 2rem !important;
}


@media (min-width: 1024px){
  /deep/.el-carousel__arrow {
    top: 36% !important;
    width: 2rem !important;
    height: 2rem !important;
  }
}
@media (min-width: 1280px){
  /deep/.el-carousel__arrow {
    top: 40% !important;
  }
}
@media (min-width: 1536px){
  /deep/.el-carousel__arrow {
    top: 40% !important;
  }
}
@media (max-width: 500px){
  /deep/.el-carousel__arrow {
    top: 26% !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
}
/deep/.el-carousel__container{
  height: 20rem !important;
}

</style>