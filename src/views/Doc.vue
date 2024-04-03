<template>
  <div
    class="lg:flex lg:w-[1400px] lg:mx-auto lg:px-4"
    style="height: calc(100vh - 60px)"
  >
    <div class="hidden lg:block h-full bg-[#1c1f33]">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
      >
        <el-menu-item index="1">
          <a href="#1">Introduction</a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="#1">Get Started</a>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <span>Product</span>
          </template>
          <el-menu-item index="3-1">
            <a href="#2">Create AI Avatars</a>
          </el-menu-item>
          <el-menu-item index="3-2" >
            <a href="#3-1">Use AI Avatars</a>
          </el-menu-item>
          <el-menu-item index="3-3">
            <a href="#3-2">Trade AI Avatars NFTs</a></el-menu-item
          >
          <el-menu-item index="3-4">
            <a href="#3-3">Contribute Computing Power</a>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <span>Technical</span>
          </template>
          <el-menu-item index="4-1">
            <a href="#3-4">Key Technologies</a></el-menu-item
          >
          <el-menu-item index="4-2">
            <a href="#4-1">Technical Architecture</a></el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <span>Tokenomics</span>
          </template>
          <el-menu-item index="5-1">
            <a href="#4-2">How to Obtain Points</a>
          </el-menu-item>
          <el-menu-item index="5-2">
            <a href="#5-1">Points and Airdrop</a>
          </el-menu-item>
          <el-menu-item index="5-3">
            <a href="#5-2">Token Allocation</a></el-menu-item
          >
          <!-- <el-menu-item index="5-4">item three-2</el-menu-item>
        <el-menu-item index="5-5">item three-2</el-menu-item> -->
        </el-sub-menu>
        <el-menu-item index="6">
          <a href="#5-2">Roadmap</a>
        </el-menu-item>
      </el-menu>
    </div>
    <div
      class="py-4 flex items-center px-6 lg:hidden cursor-pointer"
      @click="showMenu = true"
      style="z-index: 99"
    >
      <el-icon size="24"><Expand /></el-icon>
      <span class="ml-2 text-xl">Menu</span>
    </div>
    <div
      class="overflow-y-auto bg-[#08091B] p-6 text-[#ccc] sm:text-base text-[18px] overflow-x-hidden overflow"
      style="height: calc(100vh - 60px)"
    >
      <div class="text-3xl font-bold text-white" id="1">Introduction</div>
      <div class="mt-2">
        The first decentralized AI avatars network based on large language
        multimodal models, NFT, and DePIN technology.
      </div>
      <div class="mt-2">
        You can easily create your on-chain AI avatar and turn it into a digital
        asset on blockchain, from which you can obtain steady earnings from the
        digital persona's ongoing services.
      </div>
      <div class="mt-2">
        We support running AI avatars on DePIN devices, and you can contribute
        computing devices such as PCs, mobiles, GPUs, etc., to access the
        network for more benefits.
      </div>
      <div class="mt-2">
        You can conveniently create on-chain AI avatars , allowing everyone to
        have their avatar on the blockchain, utilizing the latest AI model
        technologies such as LLM, langchain, ReAct, Chain-of-Thought, Vllm,
        GanymedeNil, milvus, VITS-fast-fine-tuning, StableDiffusion, Lora, etc.
      </div>
      <div class="mt-2">
        On-chain AI avatars can be sold as NFTs, integrated with the latest
        protocols such as ERC404, SPL20, SPL22, etc., greatly enhancing the
        liquidity of on-chainavatars assets, turning your creativity into an
        asset on blockchain!
      </div>
      <div class="mt-2">
        The on-chain AI avatars you created can provide conversation and
        companionship services to other users, from which you can gain ongoing
        revenue!
      </div>
      <div class="mt-2">
        You can chat with a large number of different on-chain AI digital
        personas in the network, and they will accompany you 24/7.
      </div>
      <div class="mb-20">
        You can also connect DePIN devices such as PCs and GPUs to the network
        to support the operation of AI digital personas and earn more profits!
      </div>
      <div class="text-3xl font-bold text-white" id="2">Get Started</div>
      <div class="mt-6">
        The world of AI digital humans is waiting for you to create! Unleash
        your unlimited imagination and create a unique digital partner. By
        creating AI digital humans, you will have a platform to showcase your
        creativity and personality. Whether it is used for entertainment,
        education or other fields, your AI digital human will be a unique bridge
        to connect with the world. Take action now and start your AI digital
        human creation journey, let the future shine from your hands!
      </div>
      <div
        class="mt-6 flex items-center h-20 w-full pl-8 border border-white rounded-md"
      >
        <el-icon><Paperclip /></el-icon
        ><span class="cursor-pointer underline ml-2" @click="gocreate"
          >Create</span
        >
      </div>
      <div class="mt-6">
        Experience the future of interaction and communicate with AI digital
        humans! AI digital humans are not only an innovative technology, but
        also a new way of communication. Interacting with digital humans is as
        natural and smooth as having a conversation with a real human. They can
        answer your questions, provide information, and even chat with you,
        bringing you an unprecedented intelligent experience. No need to wait,
        come and start a wonderful interactive journey with AI digital humans
        now!
      </div>
      <div
        class="mt-6 mb-20 flex items-center h-20 w-full pl-8 border border-white rounded-md"
      >
        <el-icon><Paperclip /></el-icon
        ><span class="cursor-pointer underline ml-2" @click="goChat">Chat</span>
      </div>
      <div class="text-3xl font-bold text-white" id="3-1">
        Create AI Avatars
      </div>
      <div class="mt-2">Creating high quality AI avatars is very simple：</div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 mt-2 bg-fuchsia-700"
        ></span
        >Use natural language dialogue to complete the creation of an on-chain
        AI avatars
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 mt-2 bg-fuchsia-700"
        ></span
        >Customized AI avatars' image
      </div>
      <div class="mb-20 mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 mt-2 bg-fuchsia-700"
        ></span
        >Customized AI avatars' character
      </div>

      <div class="text-3xl font-bold text-white" id="3-2">USE AI AVATARS</div>
      <div class="mb-20">
        AI avatars can offer conversational services to other users,
        transforming users' creativity into genuine and valuable services on
        blockchains.
      </div>

      <div class="text-3xl font-bold text-white" id="3-3">
        Trade AI Avatars NFTs
      </div>
      <div class="mb-20">
        AI avatars can be minted as NFTs for trading, utilizing protocols like
        ERC-721 and ERC-404 on Ethereum, and the SPL-Tokens standard on Solana,
        to bolster the liquidity of these digital assets.
      </div>

      <div class="text-3xl font-bold text-white" id="3-4">
        Contribute Computing Power
      </div>
      <div class="mt-2 mb-20">
        You can integrate DePIN devices such as PCs and GPUs into the network to
        support the distributed operation of AI avatars. The revenue generated
        by the avatars will be shared with the computing power providers.
      </div>

      <div class="text-3xl font-bold text-white" id="4-1">Key Technologies</div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >Multimodal Large Model。Integrate data from multiple sources like text,
        images, audio, and video, using deep learning techniques such as CNNs,
        RNNs, and Transformers. This enhances AI Avatars' ability to understand
        and adapt.
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 mt-2 bg-fuchsia-700"
        ></span
        >Distributed low-memory training and inference。Distributes models
        across multiple GPUs enables the utilization of tensor parallelism, data
        parallelism, pipeline parallelism, gradient accumulation, and memory
        optimization techniques. This approach allows GPUs with smaller memory
        capacities to participate in inference computations.
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 mt-2 bg-fuchsia-700"
        ></span
        >Cross-Chain AI Avatar Minting, supporting SOL, ETH, QTUM and
        more。Through SPL 22 and improved protocols of ERC721/ERC404, the
        separation of NFT ownership and usage rights is facilitated. By
        securitizing the inference revenue rights represented by the NFTs,
        liquidity and participation are enhanced.
      </div>
      <div class="mt-2 mb-20">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 mt-2 bg-fuchsia-700"
        ></span
        >Supports DePIN devices in running multimodal large models。Supporting
        DePIN devices in running multimodal large models enables various
        devices, such as PCs, smartphones, Internet of Things (IoT) devices,
        edge computing nodes, and others, to execute complex models that involve
        multiple modalities, such as text, images, and audio.
      </div>
      <div class="text-3xl font-bold text-white" id="4-2">
        Technical Architecture
      </div>
      <img
        src="@/assets/images/tech.png"
        class="w-full h-auto mt-2 mb-20 mx-auto"
      />
      <div class="text-3xl font-bold text-white" id="5-1">
        How to Obtain Points
      </div>
      <div class="mt-2">
        The following actions can all earn corresponding points:
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >Successfully creating an AI avatar following the instructions.
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >Completing the avatar as required, including avatar description,
        personality, appearance, etc.
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >Chatting and liking with any avatar across the network.
      </div>
      <div class="mt-2 mb-20">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >Logging in daily to earn login points.
      </div>
      <div class="text-3xl font-bold text-white" id="5-2">
        Points and Airdrop
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >In the current digital era, the integration of blockchain technology
        and artificial intelligence (AI) is leading a brand-new revolution.
        Starland, as an innovative Web3 AI Avatar platform, is currently in its
        public beta phase, aiming to provide users with a new interactive
        experience and value creation ecosystem by combining AI avatar creation
        and blockchain technology. During this stage, we particularly encourage
        early participants to accumulate points by using our platform, which
        will play a significant role in the upcoming mainnet launch phase.
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >In the public beta phase, we have specially launched a point incentive
        plan to encourage users to actively participate in the construction and
        development of the platform. Users can earn points by creating AI
        avatars, participating in community discussions, providing feedback and
        suggestions, and engaging in testing and platform feature improvement.
        These points can not only be redeemed for virtual goods and services on
        the platform but also serve as a symbol of the user's influence and
        status.
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >When the mainnet officially goes live, these points will hold greater
        value. We will distribute digital assets to users based on the number of
        points they have accumulated during the public beta phase, according to
        a certain ratio. These airdropped digital assets may include the
        platform's native tokens, governance tokens, or other forms of digital
        assets, which will grant users more rights on the platform, such as
        participating in governance, enjoying privileges, and obtaining rewards.
      </div>
      <div class="mt-2">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >Furthermore, we will establish a transparent point management and
        airdrop mechanism to ensure that all users can participate and benefit
        fairly. We will use smart contracts to record and verify the
        distribution of points and the airdrop process, ensuring the entire
        process is open, transparent, and tamper-proof. We believe that through
        this method, not only can we motivate users to actively participate in
        the early development of the platform, but we can also create long-term
        value for users.
      </div>
      <div class="mt-2 mb-20">
        <span
          class="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"
        ></span
        >The public beta phase of Starland is a period full of opportunities,
        and we encourage all users to seize this opportunity to accumulate
        points by using our AI avatars creation and Web3 platform. As the
        mainnet goes live, these points will become an important voucher for
        users to receive airdrops and enjoy more rights. We look forward to
        witnessing the growth and development of this innovative platform with
        all users and embarking on a new chapter of the Web3 era together.
      </div>
      <div class="text-3xl font-bold text-white" id="5-3">Token Allocation</div>
      <!-- <img src="@/assets/images/doc5-1.png" class="w-[80%] h-auto mt-2 mb-20 mx-auto"/> -->
      <div class="w-full lg:w-[80%] mx-auto mt-4 mb-20">
        <div class="flex">
          <div
            class="text-sm lg:text-[18px] w-2/6 h-10 pl-2 text-white flex items-center"
          >
            Allocation
          </div>
          <div
            class="text-sm lg:text-[18px] w-1/6 h-10 pl-2 text-white flex items-center text-ellipsis word-break
            "
          >
            Percentage
          </div>
          <div
            class="w-3/6 h-10 pl-2 bg-orange-400 text-white flex items-center text-sm lg:text-[18px]"
          >
            Token Usage
          </div>
        </div>
        <div class="flex">
          <div
            class="w-2/6 pl-2 border border-white  sm:h-20 h-16 flex items-center text-sm lg:text-[18px]"
          >
            Computing Power contributors
          </div>
          <div
            class="w-1/6 pl-2 border border-l-0 border-r-0 border-white sm:h-20 h-16 flex items-center text-sm lg:text-[18px]"
          >
            30%
          </div>
          <div
            class="w-3/6 pl-2 border border-white sm:h-20 h-16  flex items-center text-sm lg:text-[18px]  sm:line-clamp-4"
          >
            Incentivize DePIN device owners to contribute computing power to the
            distributed inference services for AI Avatars
          </div>
        </div>

        <div class="flex">
          <div
            class="w-2/6 pl-2 border border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            AI Avatars Creator
          </div>
          <div
            class="w-1/6 pl-2 border border-l-0 border-r-0 border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            20%
          </div>
          <div
            class="w-3/6 pl-2 border border-white sm:h-20  h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            Incentivize users to create more high-quality AI Avatars
          </div>
        </div>
        <div class="flex">
          <div
            class="w-2/6 pl-2 border border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            Early Adopter of AI Avatars
          </div>
          <div
            class="w-1/6 pl-2 border border-l-0 border-r-0 border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            15%
          </div>
          <div
            class="w-3/6 pl-2 border border-white sm:h-20  h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            Incentivize users
          </div>
        </div>
        <div class="flex">
          <div
            class="w-2/6 pl-2 border border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            Capital Providers
          </div>
          <div
            class="w-1/6 pl-2 border border-l-0 border-r-0 border-white sm:h-20  h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            15%
          </div>
          <div
            class="w-3/6 pl-2 border border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            Incentivize investors and AMM participants
          </div>
        </div>
        <div class="flex">
          <div
            class="w-2/6 pl-2 border border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            Community Reserve Fund
          </div>
          <div
            class="w-1/6 pl-2 border border-l-0 border-r-0 border-white sm:h-20  h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            10%
          </div>
          <div
            class="w-3/6 pl-2 border border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            Incentivize KOLs, influencers,and developers
          </div>
        </div>
        <div class="flex">
          <div
            class="w-2/6 pl-2 border border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            Team & Advisors
          </div>
          <div
            class="w-1/6 pl-2 border border-l-0 border-r-0 border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            10%
          </div>
          <div
            class="w-3/6 pl-2 border border-white sm:h-20 h-16 flex items-center border-t-0 text-sm lg:text-[18px]"
          >
            Ensure continuous development and innovation
          </div>
        </div>
      </div>
      <div class="text-3xl font-bold text-white" id="6">Roadmap</div>
      <!-- <img src="@/assets/images/doc6-1.png" class="w-[80%] h-auto mt-2 mb-20 mx-auto"/> -->
      <div class="flex w-full lg:w-[80%] mt-6 mx-auto">
        <div class="w-full">
          <div class="flex">
            <div class="w-1/4 text-center">2023</div>
            <div class="w-1/4 text-center">
              <div>2024</div>
              <div>Q1</div>
            </div>
            <div class="w-1/4 text-center">
              <div>2024</div>
              <div>Q2</div>
            </div>
            <div class="w-1/4 text-center">
              <div>2024</div>
              <div>Q3</div>
            </div>
          </div>
          <div
            class="w-50 flex-1 angle relative"
            style="
              border: 1.5rem solid #4d5a75;
              border-left: 1.5rem solid transparent;
            "
          >
            <div class="arrow-right"></div>
            <div class="arrow-right" style="left: 50%"></div>
            <div class="arrow-right" style="left: 78%"></div>
          </div>
          <div class="flex">
            <div class="w-1/4 px-2">
              <div class="text-2xl py-2 sm:text-base">In development</div>
              <div class="sm:text-sm">
                Developed multimodal large models tensor
                parallelism,containerized GPU clusters,AI avatar NFTs, and other
                core technologies.
              </div>
            </div>
            <div class="w-1/4 px-4">
              <div class="text-2xl py-2 sm:text-base">TestNet V1</div>
              <div class="sm:text-sm">Using LLMs to Create AI Avatars.</div>
              <div class="mt-4 sm:text-sm">Supports SOL NFTs.</div>
              <div class="mt-4 sm:text-sm">Supports NVIDIA 3080,3090 GPUS.</div>
              <div class="mt-4 sm:text-sm">Points incentive launched.</div>
            </div>
            <div class="w-1/4 px-4">
              <div class="text-2xl py-2 sm:text-base">MainNet V1</div>
              <div class="sm:text-sm">Supports Ethereum NFTs and more chains.</div>
              <div class="mt-4 sm:text-sm">
                Supports DePIN devices such as PCs smartphones Internet of
                Things (loT) devices.
              </div>
              <div class="mt-4 sm:text-sm">Initiating airdrop.</div>
              <div class="mt-4 sm:text-sm">Offers thousands of AI Avatar services.</div>
            </div>
            <div class="w-1/4 px-4 pl-8">
              <div class="text-2xl py-2 sm:text-base">MainNet V2</div>
              <div class="sm:text-sm">Supports more multimodal large models.</div>
              <div class="mt-4 sm:text-sm">
                Supports AI Avatar store offering incentives to developers.
              </div>
              <div class="mt-4 sm:text-sm">
                Computing power providers, creators, developers, and user
                ecosystem completed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="fixed top-0 bg-modal-bg bottom-0 left-0 right-0 lg:hidden"
    @click="handleClose"
    style="z-index: 999"
    v-if="showMenu"
  >
    <div class="absolute left-0 top-0 w-2/3 md:w-1/2 bg-[#1E223B] bottom-0">
      <el-menu
        :default-active="activeKey"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        :default-openeds="['3','4','5']"
      >
        <el-menu-item index="1">
          <a href="#1" class="text-xl" @click="handleOpen('1')">Introduction</a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="#2" class="text-xl" @click="handleOpen('2')">Get Started</a>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <span class="text-xl">Product</span>
          </template>
          <el-menu-item index="3-1">
            <a href="#3-1" @click="handleOpen('3-1')">Create AI Avatars</a>
          </el-menu-item>
          <el-menu-item index="3-2">
            <a href="#3-2" @click="handleOpen('3-2')">Use AI Avatars</a>
          </el-menu-item>
          <el-menu-item index="3-3" >
            <a href="#3-3" @click="handleOpen('3-3')">Trade AI Avatars NFTs</a></el-menu-item
          >
          <el-menu-item index="3-4" >
            <a href="#3-4" @click="handleOpen('3-4')">Contribute Computing Power</a>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <span class="text-xl">Technical</span>
          </template>
          <el-menu-item index="4-1">
            <a href="#4-1" @click="handleOpen('4-1')">Key Technologies</a></el-menu-item
          >
          <el-menu-item index="4-2">
            <a href="#4-2" @click="handleOpen('4-2')">Technical Architecture</a></el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <span class="text-xl">Tokenomics</span>
          </template>
          <el-menu-item index="5-1">
            <a href="#5-1" @click="handleOpen('5-1')">How to Obtain Points</a>
          </el-menu-item>
          <el-menu-item index="5-2">
            <a href="#5-2" @click="handleOpen('5-2')">Points and Airdrop</a>
          </el-menu-item>
          <el-menu-item index="5-3">
            <a href="#5-3" @click="handleOpen('5-3')">Token Allocation</a></el-menu-item
          >
        </el-sub-menu>
        <el-menu-item index="6">
          <a href="#6" class="text-xl" @click="handleOpen('6')">Roadmap</a>
        </el-menu-item>
      </el-menu>
      <!-- <ul class="w-full pt-6 pl-6">
        <li class="text-2xl mt-2 font-bold">
            Introduction
        </li>
        <li class="p-4">
          Introduction
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const gocreate = (el) => {
      router.push({ path: "/home", query: { create: true } });
    };
    const goChat = () => {
        router.push({path:'/avatars'});
    }
    const activeKey = ref('1')
    const handleOpen = (key, keyPath) => {
      activeKey.value = key
      // gocreate(key)
    };
    const showMenu = ref(false)
    const  handleClose = ($event) => {
      if(activeKey.value === '3' || activeKey.value === '4' || activeKey.value === '5') {
        
      }else {
        showMenu.value = false
      }
    }
    return {
      handleOpen,
      gocreate,
      goChat,
      showMenu,
      handleClose,
      activeKey
    };
  },
};
</script>

<style lang="less" scoped>
.angle::after {
  position: absolute;
  content: "";
  border-left: 1.5rem solid transparent;
  border-right: 1.5rem solid transparent;
  border-bottom: 1.5rem solid #4d5a75;
  width: 0;
  height: 0;
  transform: rotate(90deg);
  left: calc(100% + 0.75rem);
  top: -0.75rem;
  z-index: 90;
}
.arrow-right {
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent; 
  border-color: #0c0d19;
  border-style: solid;
  border-width: 4px 4px 0 0;
  transform: rotate(45deg); 
  top: -1.25rem;
  left: 23%;

}
::v-deep .el-icon .el-sub-menu__icon-arrow {
  display: none !important
}

.overflow::-webkit-scrollbar {
  display: none;
}
</style>
