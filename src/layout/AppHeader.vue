<template>
  <header
    class="fixed bg-gradient-to-b from-base-bg to-transparent box-border flex justify-between flex-col justify-center md-lg:z-40 md-lg:sticky md-lg:top-0 bg-base-bg-emphasized w-full z-80" 
  >
    <div
      class="flex  py-3 pl-3 md:pl-12 xl:pr-3 justify-between h-15 items-center"
    >
      <router-link to="/home" class="flex items-center justify-between "><img src="@/assets/images/logo.png" class="h-10"></router-link>
      <div class="hidden lg:block absolute right-[160px]">
        <div class="flex items-center max-w-6xl">
        <ul class="flex items-center">
        <li
          class="h-10 mr-5 text-xl leading-8 text-white transition-all cursor-pointer md:text-base lg:h-10 lg:text-xl sm:mr-20 xl:text-xl hover:bg-button p-2 rounded-lg"
        >
          <router-link to="/avatars" class="block h-6 leading-6"
            >AI Avatars
          </router-link>
        </li>
        <li
          class="h-10 mr-5 text-base leading-6 text-white transition-all cursor-pointer md:text-base lg:h-10 lg:text-xl sm:mr-20 xl:text-xl hover:bg-button p-2 rounded-lg"
        >
          <router-link to="/doc" class="block h-6 leading-6">
            Docs</router-link
          >
        </li>
        <li
          class="h-10 mr-5 text-base leading-8 text-white transition-all  md:text-base lg:h-10 lg:text-xl sm:mr-10 xl:text-xl  p-2 rounded-lg"
        >
        <router-link to="/home?points=true" class="block h-6 leading-6">
            Points <span class="text-[#9f38cc] text-sm"> ({{ points }})</span></router-link>
        </li>
      </ul>
      <div class="flex w-40 ml-5 mr-10">
        <a
          href="https://twitter.com/starlandai"
          class="border-r border-r-stone-600 h-5 pr-2"
        >
          <svg
            t="1709803037378"
            class="icon w-7 h-5"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4233"
            width="200"
            height="200" >
            <path
              d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z"
              fill="#ffffff"
              p-id="4234"
            ></path>
          </svg>
        </a>
        <a
          href="https://discord.gg/bJ66R7Ncpw"
          class="border-r border-r-stone-600 h-5 pr-2 pl-2"
        >
          <svg
            t="1709803170259"
            class="icon w-7 h-5"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7121"
            width="200"
            height="200"
          >
            <path
              d="M339.712 483.5328c50.688 0 91.7504 38.0416 90.8288 84.48 0 46.4896-40.0384 84.48-90.8288 84.48-49.8176 0-90.88-37.9904-90.88-84.48 0-46.4384 40.1408-84.48 90.88-84.48z m325.12 0c50.7904 0 90.9312 38.0416 90.9312 84.48 0 46.4896-40.1408 84.48-90.9312 84.48-49.8176 0-90.8288-37.9904-90.8288-84.48 0-46.4384 40.0384-84.48 90.8288-84.48z m84.224 398.1824c192.0512-6.144 265.984-134.8096 265.984-134.8096 0-285.696-125.184-517.2736-125.184-517.2736-125.0816-95.744-244.224-93.0816-244.224-93.0816l-12.1344 14.1824c147.7632 46.1312 216.3712 112.6912 216.3712 112.6912a698.112 698.112 0 0 0-261.5808-85.1456 720.4352 720.4352 0 0 0-175.4624 1.6896c-5.2736 0-9.6256 0.9216-14.848 1.792-30.3616 2.7136-104.2944 14.1824-197.2224 55.9104-32.1024 15.0528-51.3024 25.7536-51.3024 25.7536s72.192-70.144 228.5568-116.224l-8.704-10.6496s-119.04-2.6112-244.224 93.184c0 0-125.0816 231.5264-125.0816 517.12 0 0 73.0112 128.6144 265.0624 134.8608 0 0 32.1024-39.8336 58.2656-73.5744-110.4384-33.792-152.064-104.7552-152.064-104.7552s8.6016 6.2464 24.2176 15.104c0.8704 0.8704 1.6896 1.792 3.4816 2.6112 2.6112 1.8944 5.2224 2.7136 7.8848 4.5056 21.7088 12.3904 43.4176 22.1184 63.3344 30.1568 35.6864 14.1824 78.2336 28.3648 127.8464 38.1952a596.48 596.48 0 0 0 225.0752 0.8192 563.2 563.2 0 0 0 125.952-38.0928 498.944 498.944 0 0 0 99.9936-52.3776s-43.4688 72.704-157.3376 105.6256c26.112 33.6896 57.4464 71.7824 57.4464 71.7824h-0.1024z"
              fill="#ffffff"
              p-id="7122"
            ></path>
          </svg>
        </a>
        <a href="https://t.me/starlandai" class="h-5 pr-2 pl-2">
          <svg
            t="1709803226843"
            class="icon w-7 h-5"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8196"
            width="200"
            height="200"
          >
            <path
              d="M679.424 746.861714l84.004571-395.995428c7.424-34.852571-12.580571-48.566857-35.437714-40.009143l-493.714286 190.281143c-33.718857 13.129143-33.133714 32-5.705142 40.557714l126.281142 39.424 293.156572-184.576c13.714286-9.142857 26.294857-3.986286 16.018286 5.156571l-237.129143 214.272-9.142857 130.304c13.129143 0 18.870857-5.705143 25.709714-12.580571l61.696-59.428571 128 94.281142c23.442286 13.129143 40.009143 6.290286 46.299428-21.723428zM1024 512c0 282.843429-229.156571 512-512 512S0 794.843429 0 512 229.156571 0 512 0s512 229.156571 512 512z"
              fill="#ffffff"
              p-id="8197"
            ></path>
          </svg>
        </a>
      </div>
    
    
      </div>
      </div>
      <div
        class="text-sm rounded-full m-auto text-center  rounded-lg  text-white transition-all cursor-pointer md:text-base lg:text-sm mr-8 xl:text-sm   text-center rounded-full"
        style=""
      >
        <WalletButton @click="onClickForReactUserInfo"/>
      </div>
      <div class="block lg:hidden w-[23px] h-[17px] mr-5 cursor-pointer" @click="showSideBar = true">
          <img src="@/assets/images/oper.png" class=" w-full h-full"/>
      </div>
    </div>
    <div class="fixed top-14 bg-modal-bg bottom-0 left-0 right-0"  @click="showSideBar = false" v-if="showSideBar">
      <div class="absolute right-0 top-0 w-1/2 bg-[#08091B] bottom-0 p-7">
        <ul>
        <li
          class="h-10 mr-5 text-base leading-8 text-white transition-all cursor-pointer  lg:h-10 mt-7"
        >
          <router-link to="/avatars" class="block h-6 leading-6"
            >AI Avatars
          </router-link>
        </li>
        <li
          class="h-10 mr-5 text-base leading-6 text-white transition-all cursor-pointer lg:h-10  mt-7"
        >
          <router-link to="/doc" class="block h-6 leading-6">
            Docs</router-link
          >
        </li>
        <li
          class="h-10 mr-5 text-base leading-8 text-white transition-all  lg:h-10  mt-7"
        >
          <div
            >Points <span class="text-[#9f38cc] text-sm"> ({{ points }})</span></div
          >
        </li>
       </ul>
       <div class="flex mt-8">
        <a
          href="https://twitter.com/starlandai"
          class="border-r border-r-stone-600 h-5 pr-2"
        >
          <svg
            t="1709803037378"
            class="icon w-7 h-5"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4233"
            width="200"
            height="200" >
            <path
              d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z"
              fill="#ffffff"
              p-id="4234"
            ></path>
          </svg>
        </a>
        <a
          href="https://discord.gg/bJ66R7Ncpw"
          class="border-r border-r-stone-600 h-5 pr-2 pl-2"
        >
          <svg
            t="1709803170259"
            class="icon w-7 h-5"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7121"
            width="200"
            height="200"
          >
            <path
              d="M339.712 483.5328c50.688 0 91.7504 38.0416 90.8288 84.48 0 46.4896-40.0384 84.48-90.8288 84.48-49.8176 0-90.88-37.9904-90.88-84.48 0-46.4384 40.1408-84.48 90.88-84.48z m325.12 0c50.7904 0 90.9312 38.0416 90.9312 84.48 0 46.4896-40.1408 84.48-90.9312 84.48-49.8176 0-90.8288-37.9904-90.8288-84.48 0-46.4384 40.0384-84.48 90.8288-84.48z m84.224 398.1824c192.0512-6.144 265.984-134.8096 265.984-134.8096 0-285.696-125.184-517.2736-125.184-517.2736-125.0816-95.744-244.224-93.0816-244.224-93.0816l-12.1344 14.1824c147.7632 46.1312 216.3712 112.6912 216.3712 112.6912a698.112 698.112 0 0 0-261.5808-85.1456 720.4352 720.4352 0 0 0-175.4624 1.6896c-5.2736 0-9.6256 0.9216-14.848 1.792-30.3616 2.7136-104.2944 14.1824-197.2224 55.9104-32.1024 15.0528-51.3024 25.7536-51.3024 25.7536s72.192-70.144 228.5568-116.224l-8.704-10.6496s-119.04-2.6112-244.224 93.184c0 0-125.0816 231.5264-125.0816 517.12 0 0 73.0112 128.6144 265.0624 134.8608 0 0 32.1024-39.8336 58.2656-73.5744-110.4384-33.792-152.064-104.7552-152.064-104.7552s8.6016 6.2464 24.2176 15.104c0.8704 0.8704 1.6896 1.792 3.4816 2.6112 2.6112 1.8944 5.2224 2.7136 7.8848 4.5056 21.7088 12.3904 43.4176 22.1184 63.3344 30.1568 35.6864 14.1824 78.2336 28.3648 127.8464 38.1952a596.48 596.48 0 0 0 225.0752 0.8192 563.2 563.2 0 0 0 125.952-38.0928 498.944 498.944 0 0 0 99.9936-52.3776s-43.4688 72.704-157.3376 105.6256c26.112 33.6896 57.4464 71.7824 57.4464 71.7824h-0.1024z"
              fill="#ffffff"
              p-id="7122"
            ></path>
          </svg>
        </a>
        <a href="https://t.me/starlandai" class="h-5 pr-2 pl-2">
          <svg
            t="1709803226843"
            class="icon w-7 h-5"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8196"
            width="200"
            height="200"
          >
            <path
              d="M679.424 746.861714l84.004571-395.995428c7.424-34.852571-12.580571-48.566857-35.437714-40.009143l-493.714286 190.281143c-33.718857 13.129143-33.133714 32-5.705142 40.557714l126.281142 39.424 293.156572-184.576c13.714286-9.142857 26.294857-3.986286 16.018286 5.156571l-237.129143 214.272-9.142857 130.304c13.129143 0 18.870857-5.705143 25.709714-12.580571l61.696-59.428571 128 94.281142c23.442286 13.129143 40.009143 6.290286 46.299428-21.723428zM1024 512c0 282.843429-229.156571 512-512 512S0 794.843429 0 512 229.156571 0 512 0s512 229.156571 512 512z"
              fill="#ffffff"
              p-id="8197"
            ></path>
          </svg>
        </a>
      </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { applyReactInVue, applyPureReactInVue } from "veaury";
  import BasicReactComponent from "../react_app/App.tsx";
  import { useStore } from 'vuex';
  import { getUserInfo } from "@/api/url.js";
  import { onMounted, ref , reactive,watch, computed  , defineProps, nextTick, createApp} from "vue";
  import {bus} from '@/utils/bus.js'
  export default {
    components: {
      WalletButton: applyPureReactInVue(BasicReactComponent),
      // UploadImageMint: applyPureReactInVue(UploadMint)
    },
    setup() {
   
      const store = useStore();
      const points = ref(0)
      const handleGetUserInfo = async () => {
          try{
            const address = localStorage.getItem('address')
            const res = await getUserInfo(address)
            if(res.code == '0') {
              store.commit('SET_USERINFO', res.data)
              points.value = res.data.integral
            }
          }catch {

          }finally {
            // store.commit('TOOGLE_LOADING', false)
          }
        }
      const onClickForReactUserInfo = async (val) => {
        // store.commit('TOOGLE_LOADING', true)
        if(store.getters.userInfo === null && val==='get') {
          handleGetUserInfo()
        }else {
          store.commit('SET_USERINFO', null)
          points.value = 0
        }
      }
      bus.on('getUserInfo', () => {
        handleGetUserInfo()
      })
      const showSideBar = ref(false)
      return {
        onClickForReactUserInfo,
        points,
        showSideBar
      }
    }
  }
</script>
