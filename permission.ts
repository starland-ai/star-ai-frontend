import router from '@/router'
import { filterAsyncRouter, progressClose, progressStart } from '@/hooks/use-permission'
import { useStore } from 'vuex';
import { getUserInfo } from "@/api/url.js";



const whiteList = ['/dashboard'] // no redirect whitelist
router.beforeEach(async (to) => {
  progressStart()
  const store = useStore();
  const token = localStorage.getItem('token')
  if(store.getters.userInfo === null &&  token) {
    try{
      const address = localStorage.getItem('address')
      const res = await getUserInfo(address)
      if(res.code == '0') {
        store.commit('SET_USERINFO', res.data)
      }
    }catch {

    }
  }
 
})

router.afterEach(() => {
  progressClose()
})
