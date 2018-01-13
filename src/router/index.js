import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Setting from '@/components/Setting'
import Login from '@/components/Login'
import ForgetPwd from '@/components/ForgetPwd'
import PersonInfo from '@/components/PersonInfo'
import OtherInfo from '@/components/OtherInfo'
import PersonCenter from '@/components/PersonCenter'
import BindCard from '@/components/BindCard'
import Pay from '@/components/Pay'
import Repay from '@/components/Repay'
import RepayPlan from '@/components/RepayPlan'
import RepayInfo from '@/components/RepayInfo'
import RepayRecord from '@/components/RepayRecord'
import RepayHistory from '@/components/RepayHistory'
import Validate from '@/components/Validate'
import NameSure from '@/components/NameSure'
import Help from '@/components/Help'

import CloudLoan from '@/components/CloudLoan'
import DefaultIndex from '@/components/DefaultIndex'
import Register from '@/components/Register'
import Grade from '@/components/Grade'
import OtherInfor from '@/components/OtherInfor'
import UnitInfo from '@/components/UnitInfo'
import ReplenishInfo from '@/components/ReplenishInfo'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

   {
      path: '/',
      component: DefaultIndex,
      children: [
        {
          path: '',
          component: Index
        },
        {
          path: '/index',
          component: Index
        },
        {
          path: '/repay',
          component: CloudLoan
        },
        {
          path: '/personCenter',
          component: PersonCenter
        },
        {
          path: '/grade',
          component: Grade
        },
         {
          path: '/pay',
          component: Pay
        },
        {
          path: '/help',
          component: Help
         },
          {
          path: '/setting',
          component: Setting
         },

        ]
    },
     {
          path: '/wantRepay',
          component: Repay
        },
     {
          path: '/repayRecord',
          component: RepayRecord
      },
      {
        path:'/repayPlan',
        component: RepayPlan
      },
       {
          path: '/changeCord',
          component: BindCard
        },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    //实名认证
    {
      path: '/nameSure',
      component: NameSure
    },
    // 其他信息
    {
      path: '/otherInfor',
      component: OtherInfor
    },
    //单位信息
    {
      path: '/unitInfo',
      component: UnitInfo
    },
    //补充信息
    {
      path: '/replenishInfo',
      component: ReplenishInfo
    },
    {
    //忘记密码
      path: '/forgetpwd',
      component: ForgetPwd
    },
    {
      path: '/validate',
      component: Validate
    },

    {
      path: '/personInfo',
      component: PersonInfo
    },
    {
      path: '/otherInfo',
      component: OtherInfo
    },

    {
      path: '/bindcard',
      component: BindCard
    },

    {
      path: '/repayplan',
      component: RepayPlan
    },
    {
      //借款信息
      path: '/repayinfo',
      component: RepayInfo
    },
    {
      path: '/repayrecord',
      component: RepayRecord
    },
    {
      //历史借款记录
      path: '/repayhistory',
      component: RepayHistory
    },


    {
      path: '*',
      redirect: '/Index'
    }
  ]
})
