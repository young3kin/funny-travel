import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import place from '@/components/place'
import community from '@/components/community'
import login from '@/components/login'
import travelnotes from '@/components/travelnotes'
import register from '@/components/register'
import news from '@/components/news'
import articles from '@/components/articles'
import mateSub from '@/components/mateSub'
import articlesSub from '@/components/articlesSub'
import articleslist from '@/components/articleslist'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: main
    },
    {
      path: '/place',
      name: 'place',
      component: place
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/community/submit',
      name: 'matesubmit',
      component: mateSub
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles
    },
    {
      path: '/articles/submit',
      name: 'articlessubmit',
      component: articlesSub
    },
    {
      path: '/artiles/list',
      name: 'articleslist',
      component: articleslist
    }, {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/travelnotes',
      name: 'travelnotes',
      component: travelnotes
    }
  ]
})
