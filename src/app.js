import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Aside from './aside'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-aside', Aside)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
    	loading1: false,
	    loading2: true,
	    loading3: false,
	    message: '双向绑定'
    },
	created() {
		this.$toast('我是 toast', {
			closeButton: {
				text: '知道了',
				callback(toast) {
					toast.log()
					console.log('用户说它知道了')
				}
			}
		})
	},
	methods: {
    	inputChange(xxx, yyy) {
		    console.log(xxx)
		    console.log(yyy)
	    },
		showToast() {
			this.$toast('我是 toast')
		}
	}
})
