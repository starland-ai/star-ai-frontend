<template>
  <div class="w-full min-h-screen bg-black">
    <div class="sm:h-[230px] h-[600px] relative">
      <div class="absolute top-[30%] left-0 right-0 text-fuchsia-500 font-bold gradienttext text-5xl font-bold h-50 sm:hidden">
          <span class="flex sm:px-10 sm:w-auto sm:text-3xl md:w-[1000px] sm:leading-[2rem] mx-auto text-center leading-[5rem]" ref="earn" id="earn"></span>
      </div>
      <iframe
        class="iframe"
        sandbox="allow-scripts"
        src="/test.html"
        width="100%"
        height="100%"
        frameborder="0"
      />
    </div>
    <div class="max-w-[1375px] m-auto">
      <div
        class="bg-transparent bg-base-bg-alternate relative rounded-xl text-left mb-0 flex justify-between pt-10 mx-auto"
      >
        <!-- <Test :language="language"/> -->
        <div class="lg:w-[60%] p-0 flex flex-col justify-center sm:text-center">
          <!-- <div class="text-5xl text-fuchsia-500 font-bold">
            {{ t("home.tip1") }}
          </div> -->
          <!-- <div
            class="text-5xl mt-4 text-fuchsia-500 font-bold gradienttext pl-1 sm:text-center sm:hidden"
          >
            AI Avatars are the most
          </div>
          <div
            class="text-5xl mt-4 text-fuchsia-500 font-bold text-nowrap gradienttext sm:hidden"
          >
            practically valuable assets on
          </div>
          <div
            class="text-5xl mt-4 text-fuchsia-500 font-bold gradienttext sm:hidden"
          >
            Blockchains!
          </div> -->
          <div class="w-[80%] ml-[10%] hidden sm:block">
            <img src="@/assets/images/banner.png" />
          </div>
          <div
        class="h-[1px]  hidden sm:block"
        style="
          border: 1px solid;
          border-image: linear-gradient(139deg, rgba(8, 9, 27, 1),rgba(255, 255, 255, 1),rgba(8, 9, 27, 1))1 1;"
      ></div>
          <div
            class="mt-4 text-fuchsia-500 font-bold gradienttext pl-1 hidden sm:block sm:text-xl sm:mt-4"
          >
            AI Avatars are the most practically valuable assets on Blockchains!
          </div>
          <div
            class="text-xl whitespace-break-spaces font-bold leading-8 sm:text-sm"
          >
            The first AI Avatars Network to combine Large Multimodal Models,
            NFTs, and DePIN technology.
          </div>
          <div
            class="text-xl whitespace-break-spaces font-bold leading-8 sm:text-sm"
          >
            You can create, use, and trade AI Avatars on Blockchains.
          </div>
          <div
            class="text-xl whitespace-break-spaces font-bold leading-8 sm:text-sm"
          >
            Mainnet on Solana now live. The Points Program is now available: 
          </div>
          <div
            class="text-xl white font-bold leading-8 sm:text-sm  sm:overflow-hidden sm:w-96 sm:mx-auto sm:text-ellipsis"
          >
           
            <a href="https://explorer.solana.com/address/GBmUeF3tu8PfHjpddLH3q4LERPz1Ftq7aXZwVWebfJwr" class="gradienttext" target="_blank">https://explorer.solana.com/address/GBmUeF3tu8PfHjpddLH3q4LERPz1Ftq7aXZwVWebfJwr</a>
          </div>
          <div
            class="text-xl whitespace-break-spaces font-bold leading-8 sm:text-sm"
          >
            Interacting with Starland can earn your points.
          </div>

          <div class="flex mt-20 sm:mx-auto">
            <div
              class="rounded-full leading-10 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...transition-all cursor-pointer text-base text-xl bg-button flex items-center justify-center pl-12 pr-12 py-4 h-14 sm:pl-8 sm:text-xs sm:pr-8 sm:h-13"
              @click="gocreate()"
            >
              CREATE & EARN
            </div>
            <div
              class="leading-10 text-white bg-[url('@/assets/images/border-jb.png')] bg-[length:100%_100%] transition-all cursor-pointer text-base text-xl flex items-center justify-center pl-12 pr-12 h-14 ml-5 sm:pl-8 sm:pr-8 sm:text-xs sm:h-13 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              @click="godigitalhuman()"
            >
              DISCOVER & EARN
            </div>
          </div>
        </div>
        <!-- <div class="w-1/4 h-[250px] relative">
        <img src="http://172.16.0.152:8082/v1/file/image/049a6634-256b-4d59-94ce-3e94b8158c29_0.png" class="w-[100%] h-[100%]"/>
        <UploadImageMint imageUrl="http://172.16.0.152:8082/v1/file/image/049a6634-256b-4d59-94ce-3e94b8158c29_0.png"/>
      </div> -->
        <div class="w-[40%] sm:hidden scaleAni">
          <img src="@/assets/images/banner.png" />
        </div>
      </div>
      <div
        class="h-[1px] sm:hidden"
        style="
          border: 1px solid;
          border-image: linear-gradient(139deg, rgba(8, 9, 27, 1),rgba(255, 255, 255, 1),rgba(8, 9, 27, 1))1 1;"
      ></div>
      <div
        class="flex justify-between text-center mt-40 mb-36 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 sm:p-2 sm:mb-14"
      >
        <div class="w-[23%] sm:w-full">
          <img class="h-24 m-auto scaleAni" src="@/assets/images/js4.png" />
          <div class="mt-6 text-2xl sm:mt-2 sm:text-base">
            CREATE AI AVATARS
          </div>
          <div
            class="text-base text-left mt-6 text-center text-neutral-300 sm:mt-2 sm:text-xs"
          >
            StarLand leverages cutting-edge GenAI technologies, including LMM,
            LLM, langchain, ReAct, Chain-of-Thought, Vllm, GanymedeNil, milvus,
            VITS-fast-fine-tuning, StableDiffusion, Lora, ControlNet, DWPose,
            Img2Img, InsightFace, FreeU, IP-Adapter, ESRGAN, and more, to
            swiftly and effortlessly create AI Avatars on blockchains.
          </div>
        </div>
        <div class="w-[23%] sm:w-full">
          <img class="h-24 m-auto scaleAni" src="@/assets/images/js3.png" />
          <div class="mt-6 text-2xl sm:mt-2 sm:text-base">TRADE AI AVATARS</div>
          <div
            class="text-base text-left mt-6 text-center text-neutral-300 sm:mt-2 sm:text-xs"
          >
            Your AI avatars can be minted as NFTs for trading, utilizing the
            latest NFT protocols such as ERC404, SPL20, SPL22, among others.
            This significantly enhances the liquidity of AI avatar assets,
            transforming your creativity into valuable assets on the blockchain.
          </div>
        </div>
        <div class="w-[23%] sm:w-full">
          <img class="h-24 m-auto scaleAni" src="@/assets/images/js2.png" />
          <div class="mt-6 text-2xl sm:mt-2 sm:text-base">USE AI AVATARS</div>
          <div
            class="text-base text-left mt-6 text-center text-neutral-300 sm:mt-2 sm:text-xs"
          >
            Your AI avatars can offer conversational services to other users,
            transforming your creativity into genuine and valuable services for
            many. This innovative interaction allows you to generate continuous
            revenue. Furthermore, you have the opportunity to engage with AI
            avatars created by other users. They are available 24/7 to keep you
            company and address any issues you may face!
          </div>
        </div>
        <div class="w-[23%] sm:w-full">
          <img class="h-24 m-auto scaleAni " src="@/assets/images/js1.png" />
          <div class="mt-6 text-2xl sm:mt-2 sm:text-base">
            CONTRIBUTE COMPUTING POWER
          </div>
          <div
            class="text-base text-left mt-6 text-center text-neutral-300 sm:mt-2 sm:text-xs"
          >
            In the future, StarLand will also enable the integration of DePIN
            devices, such as PCs, GPU Servers, and other types of equipment,
            into the network. This will support the distributed operation of AI
            Avatars, providing you with additional benefits.
          </div>
        </div>
      </div>
      <div
        class="h-[1px]"
        style="
          border: 1px solid;
          border-image: linear-gradient(139deg, rgba(8, 9, 27, 1),rgba(255, 255, 255, 1),rgba(8, 9, 27, 1))1 1;"
      ></div>

      <div class="text-center text-6xl mt-20 font-bold sm:text-4xl sm:mt-5">
        Create Your On-chain<span
          class="text-fuchsia-500 ml-2 pl-1 gradienttext sm:block"
          >AI Avatars!</span
        >
      </div>
      <div class="swiperbox relative hidden sm:block">
        <swiper
          :modules="modules"
          :navigation="navigation"
          class="mySwiper w-full h-full"
        >
          <swiper-slide>
            <div
              class="w-[70%] rounded-2xl bg-gradient-to-r h-min from-pink-500 via-purple-500 to-indigo-500 ... px-2 py-2 sm:ml-[15%] sm:mt-10"
            >
              <img
                src="@/assets/images/ai1.png"
                class="w-full h-auto rounded-md"
              />
              <div class="mt-1 p-2 text-sm font-bold">
                Hello, nice to meet you ! How have you been recently?
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="w-[70%] rounded-2xl bg-gradient-to-r h-min from-pink-500 via-purple-500 to-indigo-500 ... px-2 py-2 sm:ml-[15%] sm:mt-10"
            >
              <img
                src="@/assets/images/ai2.png"
                class="w-full h-auto rounded-md"
              />
              <div class="mt-1 p-2 text-sm font-bold">
                Hello! Do you have any expectations for today?
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="w-[70%] rounded-2xl bg-gradient-to-r h-min from-pink-500 via-purple-500 to-indigo-500 ... px-2 py-2 sm:ml-[15%] sm:mt-10"
            >
              <img
                src="@/assets/images/ai3.png"
                class="w-full h-auto rounded-md"
              />
              <div class="mt-1 p-2 text-sm font-bold">
                Hey, nice to meet you. Have you read any interesting books
                lately?
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="button-prev absolute left-2 top-[50%] z-50" @click="nextEl">
          <img class="w-8 h-8" src="@/assets/images/right.png" alt="" />
        </div>
        <div
          class="button-next absolute right-2 top-[50%] z-50"
          @click="prevEl"
        >
          <img class="w-8 h-8" src="@/assets/images/left.png" alt="" />
        </div>
      </div>

      <div class="flex justify-between mt-20 sm:hidden">
        <div
          class="w-[30%] rounded-2xl bg-gradient-to-r h-min from-pink-500 via-purple-500 to-indigo-500 ... px-2 py-2 scaleAni"
        >
          <img src="@/assets/images/ai1.png" class="w-full h-auto rounded-md" />
          <div class="mt-3 p-3 text-xl font-bold">
            Hello, nice to meet you ! How have you been recently?
          </div>
        </div>

        <div
          class="w-[30%] rounded-2xl bg-gradient-to-r mt-40 from-pink-500 via-purple-500 to-indigo-500 ... px-2 py-2 scaleAni"
        >
          <img src="@/assets/images/ai2.png" class="w-full h-auto rounded-md" />
          <div class="mt-3 p-3 text-xl font-bold">
            Hello! Do you have any expectations for today?
          </div>
        </div>
        <div
          class="w-[30%] rounded-2xl bg-gradient-to-r h-min from-pink-500 via-purple-500 to-indigo-500 ... px-2 py-2 scaleAni"
        >
          <img src="@/assets/images/ai3.png" class="w-full h-auto rounded-md" />
          <div class="mt-3 p-3 text-xl font-bold">
            Hey, nice to meet you. Have you read any interesting books lately?
          </div>
        </div>
      </div>
      <div
        class="text-4xl bg-button rounded-full cursor-pointer m-auto text-center mt-20 w-80 pl-8 pr-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... sm:w-[90%] sm:text-xl sm:mt-12"
        @click="gocreate"
      >
        START
      </div>
      <div
        class="flex justify-between mt-24 sm:grid sm:grid-cols-1 sm:gap-6 sm:mt-14"
        id="targetElement"
      >

<transition-group name="lyric">
        <div class="w-1/3 sm:w-full sm:p-10 " v-if="!createCharacterInformation" :key="1">
          <div
            class="rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ... px-1.5 py-1.5 scaleAni"
          >
            <img src="@/assets/images/lt1.png" class="w-full h rounded-md" />
            <div class="mt-1 text-lg px-2 py-2 font-bold sm:text-sm">
              Planets are celestial bodies orbiting stars, some rocky, some
              gaseous.
            </div>
          </div>
          <div
            class="w-[100%] rounded-md bg-gradient-to-r mt-8 from-pink-500 via-purple-500 to-indigo-500 ... px-1.5 py-1.5 scaleAni"
          >
            <img src="@/assets/images/lt2.png" class="w-full h rounded-md" />
            <div class="mt-1  text-lg px-2 py-2 text-sm font-bold sm:text-sm">

              The Milky Way is a vast galaxy home to Earth, with hundreds of
              billions of stars.
            </div>
          </div>
        </div>
        <div class="w-1/3 sm:w-full sm:p-10 bg-slate-900 rounded-md p-5" v-if="createCharacterInformation"  :key="2">
          <div class="text-[#ccc] sm:text-base text-xl mt-4 mb-3">Name</div>
          <div
            class="w-full block rounded-md shadow-sm focus:outline-none"
          >
            {{createCharacterInformation.name}}
          </div>
          <div class="text-[#ccc] sm:text-base text-xl mt-4 mb-3"></div>
          <div class="text-[#ccc] sm:text-base text-xl mt-8 mb-3">Gender</div>
          <div
            class="w-full block rounded-md shadow-sm focus:outline-none"
          >
          {{createCharacterInformation.gender}}

          </div>
          <div class="text-[#ccc] sm:text-base text-xl mt-8 mb-3">
            Description
          </div>
          <div class="max-w-xl rounded-3xl   sm:p-3 sm:text-sm rounded-bl-none" style="white-space: pre-wrap;">{{createCharacterInformation.description}}</div>
          <div class="text-[#ccc] sm:text-base text-xl mt-8 mb-3" v-if=createCharacterVoice>
            Voice
          </div>
          <div
            class="flex w-40 items-center justify-center border px-2 py-1 rounded-md cursor-pointer"
             v-if="createCharacterVoice"
             @click="selectAudio(createCharacterVoice)"
          >
            <span>{{createCharacterVoice.name_en}}</span>
            <div>
              <svg
                t="1711449177360"
                class="icon ml-1"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5428"
                width="20"
                height="20"
              >
                <path
                  d="M257.493333 322.4l215.573334-133.056c24.981333-15.413333 57.877333-7.914667 73.493333 16.746667 5.301333 8.373333 8.106667 18.048 8.106667 27.914666v555.989334C554.666667 819.093333 530.784 842.666667 501.333333 842.666667c-9.994667 0-19.786667-2.773333-28.266666-8L257.493333 701.6H160c-41.237333 0-74.666667-33.013333-74.666667-73.738667V396.138667c0-40.725333 33.429333-73.738667 74.666667-73.738667h97.493333z m26.133334 58.4a32.298667 32.298667 0 0 1-16.96 4.8H160c-5.888 0-10.666667 4.714667-10.666667 10.538667v231.733333c0 5.813333 4.778667 10.538667 10.666667 10.538667h106.666667c5.994667 0 11.872 1.664 16.96 4.8L490.666667 770.986667V253.013333L283.626667 380.8zM800.906667 829.653333a32.288 32.288 0 0 1-45.248-0.757333 31.317333 31.317333 0 0 1 0.768-44.693333c157.653333-150.464 157.653333-393.962667 0-544.426667a31.317333 31.317333 0 0 1-0.768-44.682667 32.288 32.288 0 0 1 45.248-0.757333c183.68 175.306667 183.68 460.010667 0 635.317333z m-106.901334-126.186666a32.288 32.288 0 0 1-45.248-1.216 31.328 31.328 0 0 1 1.237334-44.672c86.229333-80.608 86.229333-210.56 0-291.178667a31.328 31.328 0 0 1-1.237334-44.672 32.288 32.288 0 0 1 45.248-1.216c112.885333 105.546667 112.885333 277.418667 0 382.965333z"
                  fill="#ffffff"
                  p-id="5429"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        </transition-group>
        <div
          class="w-full relative border-slate-600 shadow-xl max-h-[53rem] h-[53rem] ml-10 border rounded-md bg-slate-900 sm:ml-0 sm:h-[40rem] sm:rounded-3xl sm:w-[90%] sm:ml-[5%]"
        >
          <div
            class="p-5 h-[92%] text-xl overflow-scroll overflow sm:p-2"
            ref="scrollDiv"
          >
            <div
              v-for="(item, index) in dialoglist"
              :key="index"
              class="text-center"
            >
              <div
                class="flex text-left items-end mt-5"
                :class="item.is_machine ? '' : 'justify-end'"
              >
                <img
                  v-if="item.is_machine"
                  src="@/assets/images/jqr.png"
                  class="w-12 h-12 rounded-full sm:w-10 sm:h-10"
                />
                <div
                  v-if="item.type == 'text'"
                  style="white-space: pre; text-wrap: wrap"
                  class="p-5 max-w-xl rounded-3xl text-xl mr-3 ml-3 sm:ml-2 sm:p-3 sm:text-sm"
                  :class="
                    item.is_machine
                      ? 'bg-[#5A4FE0] rounded-bl-none'
                      : 'bg-[#9246C5] rounded-br-none'
                  "
                >
                  {{ item.chat_message }}
               
                </div>
                <div
                  v-if="item.type == 'voice'"
                  style="white-space: pre; text-wrap: wrap"
                  class="p-5 max-w-xl rounded-3xl text-xl mr-3 ml-3 sm:ml-2 sm:p-3 sm:text-sm"
                  :class="
                    item.is_machine
                      ? 'bg-[#5A4FE0] rounded-bl-none'
                      : 'bg-[#9246C5] rounded-br-none'
                  "
                >
                  <div>Please select a voice for your character.</div>
                  <div class="flex mt-3 flex-wrap">
                    <div
                      class="flex items-center px-3 py-1 rounded-md mr-3 mt-2 cursor-pointer"
                      v-for="(item, index) in voicelist"
                      :key="index"
                      :class="
                        voiceid == item.uuid
                          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                          : 'border'
                      "
                      @click="selectAudio(item)"
                    >
                      <span class="text-base">{{ item.name_en }}</span>
                      <svg
                        t="1711449177360"
                        class="icon ml-1"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5428"
                        width="20"
                        height="20"
                      >
                        <path
                          d="M257.493333 322.4l215.573334-133.056c24.981333-15.413333 57.877333-7.914667 73.493333 16.746667 5.301333 8.373333 8.106667 18.048 8.106667 27.914666v555.989334C554.666667 819.093333 530.784 842.666667 501.333333 842.666667c-9.994667 0-19.786667-2.773333-28.266666-8L257.493333 701.6H160c-41.237333 0-74.666667-33.013333-74.666667-73.738667V396.138667c0-40.725333 33.429333-73.738667 74.666667-73.738667h97.493333z m26.133334 58.4a32.298667 32.298667 0 0 1-16.96 4.8H160c-5.888 0-10.666667 4.714667-10.666667 10.538667v231.733333c0 5.813333 4.778667 10.538667 10.666667 10.538667h106.666667c5.994667 0 11.872 1.664 16.96 4.8L490.666667 770.986667V253.013333L283.626667 380.8zM800.906667 829.653333a32.288 32.288 0 0 1-45.248-0.757333 31.317333 31.317333 0 0 1 0.768-44.693333c157.653333-150.464 157.653333-393.962667 0-544.426667a31.317333 31.317333 0 0 1-0.768-44.682667 32.288 32.288 0 0 1 45.248-0.757333c183.68 175.306667 183.68 460.010667 0 635.317333z m-106.901334-126.186666a32.288 32.288 0 0 1-45.248-1.216 31.328 31.328 0 0 1 1.237334-44.672c86.229333-80.608 86.229333-210.56 0-291.178667a31.328 31.328 0 0 1-1.237334-44.672 32.288 32.288 0 0 1 45.248-1.216c112.885333 105.546667 112.885333 277.418667 0 382.965333z"
                          fill="#ffffff"
                          p-id="5429"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- 加载中文字框 -->
                <div
                  v-if="sendstatus && item.is_machine && item.type == 'pedding'"
                  style="white-space: pre; text-wrap: wrap"
                  class="p-5 max-w-xl rounded-3xl bg-[#5A4FE0] rounded-bl-none relative text-xl mr-3 ml-3 sm:ml-2 sm:p-3 sm:text-sm"
                >
                  {{ temporaryText }}
                  <svg
                    t="1711596941061"
                    class="icon rotate absolute right-[-2rem] top-3"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2536"
                    width="25"
                    height="25"
                  >
                    <path
                      d="M144.205 202.496a136.678 136.678 0 1 0 273.357 0 136.678 136.678 0 1 0-273.357 0zM41.728 492.902a119.578 119.578 0 1 0 239.155 0 119.578 119.578 0 1 0-239.155 0zM144.23 749.158a102.502 102.502 0 1 0 205.005 0 102.502 102.502 0 1 0-205.005 0zM435.2 861.926a89.6 89.6 0 1 0 179.2 0 89.6 89.6 0 1 0-179.2 0z m289.843-95.666a85.427 85.427 0 1 0 170.855 0 85.427 85.427 0 1 0-170.855 0z m136.704-290.433a68.326 68.326 0 1 0 136.653 0 68.326 68.326 0 1 0-136.653 0zM759.22 219.571a51.251 51.251 0 1 0 102.502 0 51.251 51.251 0 1 0-102.503 0zM512 85.376a34.176 34.176 0 1 0 68.352 0 34.176 34.176 0 1 0-68.352 0z"
                      p-id="2537"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
        
                <div
                  v-if="item.type == 'hover'"
                  class="bg-[#5A4FE0] p-5 text-xl max-w-xl rounded-3xl rounded-bl-none ml-3 flex flex-wrap sm:text-sm"
                >
                  <div>
                    Let's create a photo of the Avatar, I have a variety of
                    styles available,
                  </div>
                  <div
                    class="relative px-1"
                    v-for="(item, index) in imagemodellist"
                    :key="index"
                  >
                    <span class="underline modelname">{{ item.nameEN }} ,</span>
                    <div
                      class="modelimage absolute left-1/2 bottom-6 w-32 h-20"
                    >
                      <img
                        :src="item.URL"
                        class="absolute left-0 bottom-0 z-10 rounded-xl rounded-bl-none"
                      />
                    </div>
                  </div>
                  <span> You can choose one of the styles mentioned above, or tell me a style you like. </span>
                </div>

                <div
                  v-if="item.type == 'images'"
                  class="bg-[#5A4FE0] p-5 max-w-xl rounded-3xl rounded-bl-none ml-3 flex sm:ml-2 sm:p-3"
                >
                <img
                    v-for="(item, index) in item.image_meta"
                    :key="index"
                    class="w-[24%] h-auto rounded-md"
                    :src="item"
                    @click="startgenerating(item)"
                  />
                </div>
                <img
                  v-if="!item.is_machine"
                  src="@/assets/images/user.png"
                  class="w-12 h-12 rounded-full sm:w-10 sm:h-10"
                />
              </div>
              <button
                v-if="item.need_confirm && !clicked"
                class="text-xl bg-button mt-5 rounded-full m-auto text-center w-36 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... sm:text-base"
                @click="confirm('character_setting')"
              >
                CONFIRM
              </button>
              <button
                v-if="item.type == 'voice'&&voiceid && state==1"
                class="text-xl bg-button mt-5 rounded-full m-auto text-center w-36 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... sm:text-base"
                @click="confirm('voice_setting')"
              >
                CONFIRM
              </button>
            </div>
  <div class="text-center" v-show="isthree">
    <div
                class="flex text-left items-end mt-5"
              >
                <img
                  src="@/assets/images/jqr.png"
                  class="w-12 h-12 rounded-full sm:w-10 sm:h-10"
                />
                <div
                  style="white-space: pre; text-wrap: wrap"
                  class="p-5 max-w-xl rounded-3xl bg-[#5A4FE0] rounded-bl-none text-xl mr-3 ml-3 sm:ml-2 sm:p-3 sm:text-sm"
                >
                <div
                      ref="threeCanvas"
                      @click="startgenerating(isthreeimage)"
                      class="overflow-hidden object-contain object-center w-60 h-60 max-h-[31rem] bg-base-bg rounded-md"
                    ></div>
                </div>
                </div>

  </div>
           
          </div>
          <div class="absolute left-0 bottom-0 w-full overflow h-14">
            <textarea
              @keyup.enter="sending"
              class="bg-slate-900 w-full h-full border-l-0 border-r-0 text-xl overflow border-b-0 border-t-slate-600 resize-none rounded-md sm:rounded-3xl sm:text-base"
              v-model="dialogbox"
              placeholder="Send a message..."
            ></textarea>
            <button
              class="h-10 border bg-slate-900 pr-10 pl-10 rounded-full border-fuchsia-900 text-xl bg-[url('@/assets/images/border-jb.png')] bg-[length:100%_100%] leading-10 absolute right-6 bottom-2 sm:text-base hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              @click="sending"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
      <div
        id="pointsElement"
        class="border-slate-600 shadow-xl border rounded-md bg-slate-900 mb-20 mt-32 pb-14 sm:mt-14 sm:h-full sm:w-[90%] sm:ml-[5%] sm:p-5"
      >
        <div class="flex border-b border-b-neutral-700 sm:block sm:relative">
          <div
            class="flex w-7/12 h-16 items-center justify-around sm:block sm:h-24 sm:text-sm"
          >
            <div class="flex items-center">
              <img class="w-8" src="@/assets/images/jifen.png" />
              <span class="ml-3">My Points</span>
              <span class="text-fuchsia-500 ml-2">{{
                (pointsAccount && pointsAccount.integral) || 0
              }}</span>
            </div>
            <div class="flex items-center sm:mt-3">
              <img class="w-8" src="@/assets/images/jifen2.png" />
              <span class="ml-3">Claimed Points</span>
              <span class="text-fuchsia-500 ml-2">{{
                (pointsAccount && pointsAccount.received) || 0
              }}</span>
            </div>
            <div
              class="h-10 pr-9 pl-9 rounded-full cursor-pointer text-base bg-[url('@/assets/images/border-jb.png')] bg-[length:100%_100%] leading-10 sm:absolute sm:rounded-none sm:right-0 sm:top-4 sm:h-9 sm:leading-9 sm:text-base hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              @click="showClaimPoints"
            >
              CLAIM
            </div>
          </div>
          <div class="flex w-5/12 items-center text-sm sm:hidden">Rules</div>
        </div>
        <div class="flex h-72 sm:block sm:h-full">
          <div
            class="w-7/12 h-full overflow-scroll overflow sm:w-full sm:h-[20rem]"
            v-if="pointsList && pointsList.length > 0"
          >
            <div class="w-11/12 m-auto pt-8">
              <div
                class="border-b border-b-neutral-700 h-14 items-center flex justify-between sm:text-sm"
                v-for="(item, index) in pointsList"
                :key="index"
              >
                <span>{{ item.create_at }}</span>
                <span>{{ item.activity_name }}</span>
                <span class="text-fuchsia-500 pr-5">+{{ item.integral }}</span>
              </div>
            </div>
          </div>
          <ul class="w-5/12 pl-4 mt-8 list-none sm:w-full sm:text-xs sm:pl-0">
            <li
              class="mt-5 w-4/5 text-neutral-400 sm:w-full sm:flex sm:items-center"
            >
              <span
                class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700 ..."
              ></span>
              Create an AI Avatar, +20 Points, daily limit of 5 Avatars.
            </li>
            <li
              class="mt-5 w-4/5 text-neutral-400 text-l sm:w-full sm:flex sm:items-center"
            >
              <span
                class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700 ..."
              ></span>
              Chat with an AI Avatar, +1 Point, daily limit of 100.
            </li>
            <li
              class="mt-5 w-4/5 text-neutral-400 text-l sm:w-full sm:flex sm:items-center"
            >
              <span
                class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700 ..."
              ></span>
              Like an AI Avatar, +1 Point, daily limit of 20.
            </li>
            <li
              class="mt-5 w-4/5 text-neutral-400 text-l sm:w-full sm:flex sm:items-center"
            >
              <span
                class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700 ..."
              ></span>
              Daily Sign-In, +5 Points.
            </li>
            <li
              class="mt-5 w-4/5 text-neutral-400 text-l sm:w-full sm:flex sm:items-center"
            >
              <span
                class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700 ..."
              ></span>
              The Claimed Points will be Airdropped in the future.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="text-center py-12 bg-[url('@/assets/images/background7.png')] bg-[length:100%_100%]"
    >
      <div><img src="@/assets/images/logo.png" class="h-10 mx-auto" /></div>
      <div class="mt-7 text-lg sm:text-xs sm:w-[90%] sm:mx-auto">
        Creating, contributing, trading, and utilizing on-chain AI Avatars for
        sustained income and value.
        <!-- <span
          class="inline-block border-r border-r-stone-600 h-4 pr-2 text-sm leading-4"
          >StarLand.AIxxxxxxweb3</span
        >
        <span class="pl-2 text-sm leading-4">123456789@fox.com</span> -->
      </div>
      <div class="flex mt-5 justify-center">
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
            height="200"
          >
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
        <a href="https://t.me/starlandai" class="h-5 pl-2">
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
    <Modal
      width="w-1/4"
      height="h-[30%] sm:h-2/5"
      v-if="createpopup"
      @close="createpopup = false"
    >
      <div class="w-full h-full text-center">
        <div class="w-3/5 text-center mx-auto text-2xl mb-5 font-bold">
          We have all the necessary information to create a AI Avatar. Let's get
          started!
        </div>
        <button
          class="text-xl bg-button mt-5 rounded-full m-auto text-center w-36 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
          @click="confirmCreation"
        >
          OK
        </button>
        <!-- <div class="w-2/5 h-14 bg-gradient-to-r from-left-gradient to-right-gradient shadow-custom  flex items-center justify-center mx-auto rounded-56 mt-[65px] cursor-pointer" @click="close">OK</div> -->
      </div>
    </Modal>
    <Modal
      width="w-2/4"
      height="h-[60%] sm:h-2/5"
      v-if="nologin"
      @close="nologin = false"
    >
      <div class="w-full h-full">
        <div class="w-3/5 text-center mx-auto text-2xl mb-5 font-bold">
          Please log in first
        </div>
        <div class="mb-10 flex justify-center">
          <img
            src="@/assets/images/nologin.png"
            class="w-3/5 h-auto mt-4 mb-10 lg:mb-4"
          />
        </div>
        <!-- <div class="text-center">
          <WalletButton @click="onClickForReactUserInfo" />
        </div> -->
        <!-- <div class="w-2/5 h-14 bg-gradient-to-r from-left-gradient to-right-gradient shadow-custom  flex items-center justify-center mx-auto rounded-56 mt-[65px] cursor-pointer" @click="close">OK</div> -->
      </div>
    </Modal>
    <Modal
      v-if="showModal"
      width="w-3/4"
      height="h-2/5"
      @close="showModal = false"
    >
      <div class="w-full">
        <div class="w-4/5 md:w-3/5 text-center mx-auto text-2xl font-bold">
          <div class="text-1.75">Claim Points</div>
          <div class="mt-[26px] mb-[30px] md:mt-[80px] md:mb-[50px]">
            <el-slider
              v-model="points"
              :step="1"
              :min="1"
              :max="claimPoints"
              show-tooltip
              :marks="marks"
            />
          </div>
          <div class="flex items-center text-[16px] md:text-xl font-bold">
            <div class="bg-[#9246C5] w-2 h-2 rounded-full mr-2"></div>
            <div class="flex-1 leading-normal text-left">
              The Claimed Points will be Airdropped in the future.
            </div>
          </div>
          <div class="flex items-center text-[16px] md:text-xl font-bold">
            <div class="bg-[#9246C5] w-2 h-2 rounded-full mr-2"></div>
            <div class="flex-1 leading-normal text-left">
              Claiming Points will incur gas fees.
            </div>
          </div>
        </div>
        <ClaimPoints @click="onClickForReact" :points="points" />
      </div>
    </Modal>
    <div v-if="claimLoading">
      <Loading />
    </div>
    <div v-if="modalInfo.msgModal">
      <MsgModal
        :title="modalInfo.title"
        :type="modalInfo.type"
        @close="modalInfo.msgModal = false"
      />
    </div>
    <audio ref="audio" controls hidden="true" :src="voicePath"/>
    <AppFooter/>
  </div>
</template>

<script>
import { ethers } from "ethers";
import {
  onMounted,
  ref,
  reactive,
  watch,
  computed,
  defineProps,
  nextTick,
} from "vue";
import Web3Modal from "web3modal";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
import { applyReactInVue, applyPureReactInVue } from "veaury";
import UploadMint from "../react_app/uploadMint.tsx";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import Modal from "@/components/Modal.vue";
import BasicReactComponent from "../react_app/App.tsx";
import {
  character,
  imagemodel,
  getUserInfo,
  getPointsList,
  characterVoice,
} from "@/api/url.js";
import ClaimPoints from "../react_app/ClaimPoints.tsx";
import Loading from "@/components/loading/AppLoading.vue";
import MsgModal from "@/components/MsgModal.vue";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import {fetchEventSource} from '@microsoft/fetch-event-source';
import { assertBid } from '@metaplex-foundation/js';
import AppFooter from "@/layout/AppFooter.vue";
import TypeIt from 'typeit'
export default {
  components: {
    Test: applyPureReactInVue(BasicReactComponent),
    UploadImageMint: applyPureReactInVue(UploadMint),
    ClaimPoints: applyPureReactInVue(ClaimPoints),
    WalletButton: applyPureReactInVue(BasicReactComponent),
    Modal,
    Loading,
    MsgModal,
    Swiper,
    SwiperSlide,
    AppFooter
  },

  setup() {
    const router = useRouter();

    const route = useRoute();
    const threeCanvas = ref(null);
    const audio = ref(new Audio());
    const voicePath = ref("");
    const targetElement = ref(null);
    const pointsElement = ref(null);
    const scrollDiv = ref(null);
    const characterURL = ref("");
    const voiceid = ref("");
    const createpopup = ref(false);
    const token = ref(localStorage.getItem("token"));
    const { t } = useI18n();
    const store = useStore();
    const temporaryText = ref("StarLand is typing...");
    const sendstatus = ref(false);
    const showModal = ref(false);
    const isthree = ref(false);
    const isthreeimage = ref("");
    const createCharacterInformation = ref("");
    const createCharacterVoice = ref("");
    const clicked = ref(false);
    const dialogbox = ref("");
    const state = ref(0);
    const nologin = ref(false);
    const modules = [Autoplay, Pagination, Navigation, A11y];
    const navigation = ref({
      nextEl: ".button-next",
      prevEl: ".button-prev",
    });
    const imagemodellist = ref([]);
    const voicelist = ref([]);
    const dialoglist = ref([
      {
        chat_message: "I want to create an On-chain AI Avatar.",
        image_meta: "",
        need_confirm: false,
        confirm_type: "",
        session_id: "",
        is_machine: false,
        type: "text",
      },
      {
        chat_message:
          "Okay, let me help you. Please introduce the name, gender, personality, and background story of the Avatar you want?",
        image_meta: "",
        need_confirm: false,
        confirm_type: "",
        session_id: "",
        is_machine: true,
        type: "text",
      },
    ]);

    const session_id = ref("");

    watch(token, (newValue, oldValue) => {
      initialcharacter();
    });
    watch(
      () => router.currentRoute.value,
      (newValue) => {
        if (newValue.query.points) {
          setTimeout(() => {
            gopoints();
          });
        }
      },
      { immediate: true }
    );

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
    const playVoice = (url) => {
      voicePath.value = new URL(url, import.meta.url).href;

      nextTick(() => {
        audio.value.currentTime = 0;
        audio.value?.play();
      });
    };
    function gocreate() {
      document.getElementById("targetElement").scrollIntoView({
        behavior: "smooth", 
        block: "center", 
      });
      // window.location.href = '/home#create'
    }
    function gopoints() {
      document.getElementById("pointsElement").scrollIntoView({
        behavior: "smooth", 
        block: "center", 
      });
      // window.location.href = '/home#create'
    }
    function godigitalhuman() {
      router.push({ path: "/avatars", query: {} });
    }
    async function startgenerating(url) {
      characterURL.value = url;
      createpopup.value = true;
    }
    function confirmCreation() {
      claimLoading.value = true;
      finalstep(characterURL.value);
    }
    async function finalstep(url) {
      fetchEventSource('https://starland.ai/api/v1/character', {
        method: 'POST',
        headers: {  
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.value}`,
                  },
        body: JSON.stringify( {
      session_id: session_id.value,
        message: url,
        state: 4,
        is_3d: !!isthree.value,
        }) ,
        onmessage(msg) {
         if(msg.data.indexOf("{\"code")!==-1){
          const resJson=JSON.parse(msg.data)
      if (resJson.code == "0") {
        isthree.value=false;
        temporaryText.value = "StarLand is typing...";
        claimLoading.value = false;
        createpopup.value = false;
        createCharacterInformation.value = "";
        createCharacterVoice.value = "";

        ElMessage.success("Created Successfully");
        state.value = 0;
        session_id.value = "";
        initialcharacter();
        setTimeout(() => {
          clicked.value = false;
          dialoglist.value = [
            {
              chat_message: "I want to create an On-chain AI Avatar.",
              image_meta: "",
              need_confirm: false,
              confirm_type: "",
              session_id: "",
              is_machine: false,
              type: "text",
            },
            {
              chat_message:
                "Okay, let me help you. Please introduce the name, gender, personality, and background story of the Avatar you want?",
              image_meta: "",
              need_confirm: false,
              confirm_type: "",
              session_id: "",
              is_machine: true,
              type: "text",
            },
          ];
        }, 1200);
        handleGetPointsList();
        handleGetUserInfo();
      }
         }
        },
        onerror(err){

           
            // errCallback(err)
            throw err
        }
    })
      // const res = await character({
      //   session_id: session_id.value,
      //   message: url,
      //   state: 4,
      //   is_3d: !!isthree.value,
      // });
    
    }
    function selectAudio(item) {
      createCharacterVoice.value = item
      voiceid.value = item.uuid;
      voicePath.value = new URL(item.en_url, import.meta.url).href;
      nextTick(() => {
        audio.value.currentTime = 0;
        audio.value?.play();
      });
    }
    async function confirm(type) {
      clicked.value = true;
      sendstatus.value = true;
      // if(type=='character_setting'){
      //   dialoglist.value.pop();
      // }
      state.value++;
      dialoglist.value.push(
        ...[
          {
            chat_message: "",
            image_meta: "",
            need_confirm: "",
            confirm_type: false,
            session_id: "",
            is_machine: true,
            type: "pedding",
          },
        ]
      );
      fetchEventSource('https://starland.ai/api/v1/character', {
        method: 'POST',
        headers: {  
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.value}`,
                  },
        body: JSON.stringify( {
          session_id: session_id.value,
        message: voiceid.value,
        state: state.value,
        }) ,
        onmessage(msg) {
         if(msg.data.indexOf("{\"code")!==-1){
       sendstatus.value = false;
      dialoglist.value.pop();
        if(state.value==1){
          dialoglist.value.push(
          ...[
            {
              chat_message: "",
              image_meta: "",
              need_confirm: false,
              confirm_type: "",
              session_id: "",
              is_machine: true,
              type: "voice",
            },
          ]
        );
      } else {
        dialoglist.value.push(
          ...[
            {
              chat_message: "",
              image_meta: "",
              need_confirm: false,
              confirm_type: "",
              session_id: "",
              is_machine: true,
              type: "hover",
            },
          ]
        );
      }
      if (state.value == 1) {
        getcharacterVoice()
      } else {
        getimagemodel()
       
      }

      scrollBottom();
         } 
        },
        onerror(err){

          
            // errCallback(err)
            throw err
        }
    })

    
    }
    async function getcharacterVoice(){
      const res1 = await characterVoice({});
        voicelist.value = res1.data;
    }
    async function getimagemodel(){
      const res1 = await imagemodel({});
      imagemodellist.value = res1.data;
    }
    const prevEl = () => {};
    const nextEl = () => {};
    function showClaimPoints() {
      if (!token.value) {
        nologin.value = true;
        return;
      }
      showModal.value = true;
    }
    async function sending() {
      if (!token.value) {
        nologin.value = true;
        return;
      }
      if (session_id.value == "") {
        return;
      }
      if (dialogbox.value == "") {
        return;
      }
      if (sendstatus.value) {
        return;
      }
      if (state.value == 2) {
        state.value++;
      }
      sendstatus.value = true;
      const text = dialogbox.value;
      dialogbox.value = "";
      dialoglist.value.push(
        ...[
          {
            chat_message: text,
            image_meta: "",
            need_confirm: "",
            confirm_type: false,
            session_id: "",
            is_machine: false,
            type: "text",
          },
          {
            chat_message: "",
            image_meta: "",
            need_confirm: "",
            confirm_type: false,
            session_id: "",
            is_machine: true,
            type: "pedding",
          },
        ]
      );
      scrollBottom();
      fetchEventSource('https://starland.ai/api/v1/character', {
        method: 'POST',
        headers: {  
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.value}`,
                  },
        body: JSON.stringify( {
          session_id: session_id.value,
          message: text,
          state: state.value,
        }) ,
        onmessage(msg) {
          console.log(msg)
          if(msg.data.indexOf("{\"code")!==-1){
            const storagedata=JSON.parse(msg.data)

          const machinearr = [];
          temporaryText.value = "StarLand is typing...";
          sendstatus.value = false;
          dialoglist.value.pop();
          if(storagedata.data.setting_chunk&&storagedata.data.need_confirm){
           const  chunk=JSON.parse(storagedata.data.setting_chunk)
            createCharacterInformation.value=chunk

          }
          if (storagedata.data.confirm_type == "image_setting") {
            if (storagedata.data.is_3d) {
              isthree.value = storagedata.data.obj_url;
              isthreeimage.value = storagedata.data.image_meta[0];
              nextTick(() => {
      create3D(storagedata.data.obj_url)
              })
            }
            dialoglist.value.push(
              ...[
                {
                  chat_message: storagedata.data.message,
                  image_meta: storagedata.data.image_meta,
                  need_confirm: storagedata.data.need_confirm,
                  confirm_type: storagedata.data.confirm_type,
                  session_id: storagedata.data.session_id,
                  is_machine: true,
                  type: "text",
                },
                {
                  chat_message: "",
                  image_meta: storagedata.data.image_meta,
                  need_confirm: storagedata.data.need_confirm,
                  confirm_type: storagedata.data.confirm_type,
                  session_id: storagedata.data.session_id,
                  is_machine: true,
                  type: "images",
                },
              ]
            );
          } else {
            machinearr.push({
              chat_message: storagedata.data.message,
              image_meta: storagedata.data.image_meta,
              need_confirm: storagedata.data.need_confirm,
              confirm_type: storagedata.data.confirm_type,
              session_id: storagedata.data.session_id,
              is_3d: storagedata.data.is_3d,
              is_machine: true,
              type: "text",
            });
            dialoglist.value.push(...machinearr);
          }
          scrollBottom();
          }else{
            if(msg.data=='\\n'){
              temporaryText.value += '\n';
            }else{
            temporaryText.value += msg.data;

            }
          scrollBottom();
          }
            // successCallback(msg)
        },
        onerror(err){

         
            // errCallback(err)
            throw err
        }
    })
    }
    function scrollBottom() {
      nextTick(() => {
        const scrollElem = scrollDiv.value;
        scrollElem.scrollTo({
          top: scrollElem.scrollHeight,
          behavior: "smooth",
        });
      });
    }
    const onClickForReactUserInfo = async (val) => {
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
        }
      }
    };
    async function initialcharacter() {
      fetchEventSource('https://starland.ai/api/v1/character', {
        method: 'POST',
        headers: {  
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.value}`,
                  },
        body: JSON.stringify( {
          message: "",
        state: state.value,
        }) ,
        onmessage(msg) {
        
         if(msg.data.indexOf("{\"code")!==-1){
       const characterJson=JSON.parse(msg.data)
      session_id.value = characterJson.data.session_id
         } 
        },
        onerror(err){

          
            // errCallback(err)
            throw err
        }
    })
      // const res = await character({
      //   message: "",
      //   state: state.value,
      // });
      // const resJson = dataprocessing(res);

      // session_id.value = resJson.data.session_id;
    }
    function dataprocessing(data) {
      try {
        const index = data.lastIndexOf("#");
        const data1 = data.substring(0, index);
        const index1 = data1.lastIndexOf("#");
        const dataJson = JSON.parse(data1.substring(index1 + 1, data1.length));
        return dataJson;
      } catch {}

    }

    const earn = ref(null)
const printText = () => {
  

  const domEarn = document.getElementById('earn')
  if(domEarn !== null) {
    new TypeIt(domEarn,{
    strings: ['AI Avatars are the most practically valuable assets on Blockchains!'],
    cursorChar: "<span class='cursorChar'>|<span>", 
    speed: 200,
    lifeLike: true, 
    cursor: false, 
    breakLines: true, 
    loop: false 
  })
    .go()
  }
 
}
    onMounted(() => {
      nextTick(() =>{
        printText()
      })
      if (token.value) {
        initialcharacter();
        handleGetUserInfo();
        handleGetPointsList();
      } else {
        const intervalID = setInterval(() => {
          if (localStorage.getItem("token")) {
            token.value = localStorage.getItem("token");
            clearInterval(intervalID);
            nologin.value = false;
          }
        }, 1000);
      }
      if (route.query.create) {
        setTimeout(() => {
          gocreate();
        });
      }
      if (route.query.points) {
        setTimeout(() => {
          gopoints();
        });
      }
    });

    const language = ref(store.state.language);
    const points = ref(0);
    const test = () => {
      if (language.value === "en") {
        language.value = "zh";
      } else {
        language.value = "en";
      }
      store.commit("SET_LANGUAGE", language.value);
      localStorage.setItem("lang", language);
    };

    const modalInfo = reactive({
      title: "",
      type: "",
      msgModal: false,
    });
    const claimLoading = ref(false);
    const claimPoints = ref(2);
    const handleGetUserInfo = async (val) => {
      try {
        const address = localStorage.getItem("address");
        const res = await getUserInfo(address);
        if (res.code == "0") {
          store.commit("SET_USERINFO", res.data);
        }
      } catch {}
    };
    const onClickForReact = ({ loading, msg }) => {
      claimLoading.value = loading;
      if (msg) {
        modalInfo.msgModal = true;
        if (msg === "success") {
          modalInfo.title = "Points successfully claimed";
          claimPoints.value = claimPoints.value - points.value;
          points.value = 0;
          pointsAccount.value.received =
            pointsAccount.value.received + points.value;
          handleGetUserInfo();
        } else {
          modalInfo.title = "Failed to claim points, please try again";
        }
        modalInfo.type = msg;
      }
    };
    const marks = reactive({
      1: "1",
    });

    const userInfo = computed(() => store.getters.userInfo);
    const pointsAccount = ref(null);
    const pointsList = ref(null);
    const handleGetPointsList = async () => {
      // claimLoading.value = true
      const address = localStorage.getItem("address");
      const res = await getPointsList(address, { page: 1, limit: 100 });
      if (res.code == "0") {
        const data = res.data.data.map((item) => {
          const createAt = item.create_at.split("T")[0];
          return {
            ...item,
            create_at: createAt,
          };
        });
        pointsList.value = data;
      }
      // claimLoading.value = false
    };
    watch(userInfo, (newVal, oldVal) => {

      if (newVal !== null) {
        pointsAccount.value = newVal;
        const claimPoint = newVal.integral - newVal.received;
        marks[claimPoint] = "" + claimPoint;
        claimPoints.value = claimPoint;
        if (oldVal !== newVal) {
          handleGetPointsList();
        }
      }
    });


    return {
      t,
      test,
      language,
      showModal,
      points,
      onClickForReact,
      claimLoading,
      marks,
      pointsAccount,
      claimPoints,
      modalInfo,
      sending,
      dialogbox,
      dialoglist,
      confirm,
      imagemodellist,
      startgenerating,
      clicked,
      scrollDiv,
      gocreate,
      godigitalhuman,
      pointsList,
      token,
      onClickForReactUserInfo,
      nologin,
      showClaimPoints,
      prevEl,
      nextEl,
      modules,
      navigation,
      confirmCreation,
      createpopup,
      characterURL,
      voiceid,
      voicelist,
      selectAudio,
      playVoice,
      audio,
      voicePath,
      dataprocessing,
      temporaryText,
      sendstatus,
      isthree,
      createCharacterInformation,
      createCharacterVoice,
      threeCanvas,
      create3D,
      isthreeimage,
    state,
    printText
    };
  },
};
</script>
<style lang="less">
.gradienttext {
  background-image: -webkit-linear-gradient(left, #3f54ed, #7f49cf, #d43ba6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.modelimage {
  display: none;
}
.modelname:hover + .modelimage {
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
.el-button--primary {
}
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
// .el-message .el-icon-error {
//   font-size: 18px;
// }

// .el-message--error .el-message__content {
//   font-size: 18px;
//   font-weight: 700;
// }
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

.scaleAni {
  transition: all 0.6s;
}
.scaleAni:hover {
  transform: scale(1.1);
}
.lyric-enter,
  .lyric-leave-to {
  opacity: 0;
  transform: translateY(10px);
  }
  .lyric-enter-to,
  .lyric-leave {
  opacity: 1;
 
  }
  .lyric-enter-active,
  .lyric-leave-active {
  transition: all 0.3s;
  }
</style>
