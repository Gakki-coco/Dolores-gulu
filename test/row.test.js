const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Row'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
	it('存在.', () => {
		expect(Row).to.exist
	})
	
	it('接收 gutter 属性', (done)=> {
		Vue.component('g-row', Row)
		Vue.component('g-col', Col)
		const div = document.createElement('div')
		document.body.appendChild(div)
		div.innerHTML = `
			<g-row gutter="20">
				<g-col span="12"></g-col>
				<g-col span="12"></g-col>
			</g-row>
		`
		const vm = new Vue({
			el: div
		})
		
		// mounted 是异步触发的, 测试框架需要加一个参数 done, 在异步完成后调用 done()
		setTimeout(()=> {
			// console.log(vm.$el.outerHTML)
			const row = vm.$el.querySelectorAll('.row')
			expect(getComputedStyle(row[0]).marginLeft).to.eq('-10px')
			expect(getComputedStyle(row[0]).marginRight).to.eq('-10px')

			const cols = vm.$el.querySelectorAll('.col')
			expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
			expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
			done()
			vm.$el.remove()
			vm.$destroy()
		})
	})
	
	it('接收 align 属性', ()=> {
		const div = document.createElement('div')
		document.body.appendChild(div)
		
		const Constructor = Vue.extend(Row)
		const vm = new Constructor({
			propsData: {
				align: 'right'
			}
		}).$mount(div)
		
		const element = vm.$el
		expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
		div.remove()
		vm.$destroy()
	})
})